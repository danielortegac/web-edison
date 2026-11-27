(function () {
  "use strict";
  if (document.getElementById("edison-chat-root")) return;

  const root = document.createElement("div");
  root.id = "edison-chat-root";
  root.innerHTML = `
    <button class="edison-chat-launcher" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="edison-chat-panel">
      <span class="edison-chat-launcher-mark" aria-hidden="true">✦</span><span>Habla con el asistente</span>
    </button>
    <section class="edison-chat-panel" id="edison-chat-panel" role="dialog" aria-modal="false" aria-label="Asistente del Laboratorio Edison" hidden>
      <header class="edison-chat-head">
        <span class="edison-chat-avatar" aria-hidden="true">E</span>
        <div class="edison-chat-head-copy"><strong>Edison Lab Assistant</strong><span>Orientación sobre el laboratorio · En línea</span></div>
        <button class="edison-chat-close" type="button" aria-label="Cerrar chat">×</button>
      </header>
      <div class="edison-chat-messages" id="edison-chat-messages" aria-live="polite" aria-relevant="additions"></div>
      <div class="edison-chat-quick" id="edison-chat-quick">
        <button type="button" data-prompt="¿Qué puedo hacer en este laboratorio?">¿Qué puedo hacer aquí?</button>
        <button type="button" data-prompt="Explícame cómo funciona el Kit de agentes CLI y cómo empezar.">Agentes CLI</button>
        <button type="button" data-prompt="¿Qué demuestra la cadena local SHA-256 y cuáles son sus límites?">Blockchain y SHA-256</button>
        <button type="button" data-prompt="¿Cómo puedo contactar a Edison para hablar de mi proyecto?">Contactar a Edison</button>
      </div>
      <p class="edison-chat-status" id="edison-chat-status" role="status"></p>
      <button class="edison-chat-reset" id="edison-chat-reset" type="button">Iniciar conversación nueva</button>
      <form class="edison-chat-form" id="edison-chat-form">
        <textarea id="edison-chat-input" name="message" rows="1" maxlength="2500" placeholder="Escribe tu pregunta…" aria-label="Escribe tu pregunta" required></textarea>
        <button class="edison-chat-send" type="submit" aria-label="Enviar mensaje">➤</button>
      </form>
    </section>`;
  document.body.appendChild(root);

  const launcher = root.querySelector(".edison-chat-launcher");
  const panel = root.querySelector(".edison-chat-panel");
  const close = root.querySelector(".edison-chat-close");
  const messagesEl = root.querySelector("#edison-chat-messages");
  const form = root.querySelector("#edison-chat-form");
  const input = root.querySelector("#edison-chat-input");
  const send = root.querySelector(".edison-chat-send");
  const status = root.querySelector("#edison-chat-status");
  const quick = root.querySelector("#edison-chat-quick");
  const reset = root.querySelector("#edison-chat-reset");
  let messages = [];
  let busy = false;

  function addMessage(role, content) {
    const bubble = document.createElement("div");
    bubble.className = "edison-chat-message " + (role === "user" ? "user" : "assistant");
    const linkPattern = /(https:\/\/csrc\.nist\.gov\/pubs\/fips\/180-4\/upd1\/final|\/(?:index|enfoque|herramientas|contacto)\.html(?:#[a-z-]+)?)/g;
    let last = 0;
    let match;
    while ((match = linkPattern.exec(content)) !== null) {
      bubble.appendChild(document.createTextNode(content.slice(last, match.index)));
      const anchor = document.createElement("a");
      anchor.href = match[0];
      anchor.textContent = match[0].startsWith("/") ? match[0].replace(/^\//, "") : "Estándar SHA-256 de NIST";
      if (match[0].startsWith("https://")) { anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; }
      bubble.appendChild(anchor);
      last = match.index + match[0].length;
    }
    bubble.appendChild(document.createTextNode(content.slice(last)));
    messagesEl.appendChild(bubble);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function welcome() {
    addMessage("assistant", "¡Hola! Soy el asistente del Laboratorio de Edison. Puedo explicarte cómo funcionan los kits de agentes CLI, la bitácora, la cadena SHA-256 y los respaldos, y guiarte a la sección adecuada. ¿Qué te gustaría resolver?");
  }

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    if (open) input.focus(); else launcher.focus();
  }

  function setBusy(value) {
    busy = value;
    send.disabled = value;
    input.disabled = value;
    status.textContent = value ? "Estoy revisando la información del laboratorio…" : "";
    if (value) {
      const typing = document.createElement("div");
      typing.className = "edison-chat-typing";
      typing.id = "edison-chat-typing";
      typing.textContent = "Preparando respuesta ";
      for (let i = 0; i < 3; i++) typing.appendChild(document.createElement("span"));
      messagesEl.appendChild(typing);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    } else {
      root.querySelector("#edison-chat-typing")?.remove();
    }
  }

  async function ask(text) {
    const value = text.trim();
    if (!value || busy) return;
    messages.push({ role: "user", content: value });
    addMessage("user", value);
    input.value = "";
    quick.hidden = true;
    setBusy(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messages.slice(-12) })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "No pude conectar con el asistente.");
      const reply = String(data.reply || "").trim();
      if (!reply) throw new Error("No recibí una respuesta. Inténtalo de nuevo.");
      messages.push({ role: "assistant", content: reply });
      addMessage("assistant", reply);
    } catch (error) {
      messages.pop();
      addMessage("assistant", error.message || "Hubo un problema de conexión. Inténtalo de nuevo.");
    } finally {
      setBusy(false);
      input.disabled = false;
      send.disabled = false;
      input.focus();
    }
  }

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
  form.addEventListener("submit", (event) => { event.preventDefault(); ask(input.value); });
  quick.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-prompt]");
    if (button) ask(button.dataset.prompt);
  });
  reset.addEventListener("click", () => {
    messages = [];
    messagesEl.replaceChildren();
    quick.hidden = false;
    welcome();
    status.textContent = "Conversación nueva. No guardamos el historial en el navegador.";
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) setOpen(false);
  });
  welcome();
})();