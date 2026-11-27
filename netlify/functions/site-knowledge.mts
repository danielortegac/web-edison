export const SITE_KNOWLEDGE = `
IDENTIDAD Y ALCANCE
Nombre visible: Laboratorio de Edison Salinas Camacho.
Ubicación indicada en la web: Colombia.
Tema declarado del proyecto: Blockchain e IA.
Objetivo expresado por Edison en su formulario: adquirir experticia en el manejo de agentes CLI e inteligencias artificiales.
Nivel declarado: intermedio.
El sitio es un laboratorio práctico personal para preparar encargos de agentes, registrar experimentos y verificar la integridad de evidencias. No es una academia con cursos publicados ni una agencia que prometa servicios que no aparecen aquí.

PÁGINA INICIO (/index.html)
La propuesta es: “Agentes CLI, IA y blockchain”. El visitante puede preparar un encargo para su agente, registrar lo que ejecutó y aprender a verificar la integridad de la evidencia.
Tres módulos principales:
1. Kit de agentes: crear una ficha con contexto, objetivo, entradas, entregables, límites y criterios de aceptación; descargar un ZIP con archivos de trabajo.
2. Bitácora de pruebas: vincular pruebas con un proyecto, anotar lo esperado y lo realmente observado y guardar referencias de evidencia.
3. Cadena de evidencias: enlazar decisiones y resultados mediante SHA-256, exportar la cadena y verificar su contenido.
La portada también incluye un experimento local para calcular y comparar huellas SHA-256 en el navegador. El texto de prueba no se guarda ni se añade automáticamente a la cadena.
El recorrido del kit separa cuatro encargos: planificar, implementar, revisar y entregar. El visitante ejecuta las instrucciones con su propia CLI configurada; el sitio no ejecuta modelos ni comandos.

MÉTODO Y ALCANCE (/enfoque.html)
El kit organiza cuatro etapas:
- Planificar: comprender entradas, detectar información faltante y proponer una prueba por entregable.
- Implementar: trabajar dentro del alcance y conservar archivos ajenos al encargo.
- Revisar: contrastar el resultado con criterios de aceptación y registrar fallos reproducibles.
- Entregar: explicar archivos, instrucciones, comprobaciones y límites.
La cadena local calcula SHA-256 de los datos de cada bloque y conserva el hash del bloque anterior. La verificación vuelve a calcular huellas y comprueba continuidad.
Límites explícitos: no hay red distribuida, consenso, firma digital, anclaje externo, prueba de autoría, wallet ni transacciones. Alguien que controle el archivo completo podría modificarlo y recalcular todos los hashes; una cadena local coherente no demuestra quién escribió ni que el contenido sea verdadero.
Disponible en la web: fichas editables; kit ZIP con contexto e instrucciones; bitácora de pruebas vinculadas; cadena local SHA-256; exportación y verificación de archivos; respaldo JSON validado antes de reemplazar datos.
Depende de decisiones futuras del usuario: elegir y configurar CLI y proveedor de IA; definir un caso concreto de blockchain; seleccionar red o anclaje externo si se requiere; agregar base compartida y cuentas si colaborará un equipo.
Los datos pertenecen al navegador y a esa dirección web. No hay inicio de sesión ni estado compartido entre usuarios. La web no certifica que una CLI ejecutó una tarea ni accede a sus archivos.

ESPACIO DE TRABAJO (/herramientas.html)
El laboratorio tiene cuatro pestañas:
- Kit de agentes: formulario para nombre del proyecto, CLI opcional, resultado buscado, contexto, entradas/archivos, entregables, límites/cambios permitidos y criterios de aceptación. Los campos clave deben completarse para guardar la ficha. La ficha se puede convertir en un ZIP válido con README.md, contexto.json, plan.md, implementacion.md, revision.md y entrega.md.
- Bitácora: registra una prueba vinculada a una ficha, título, estado (pendiente, aprobada por el usuario, fallida o bloqueada), observación y referencia/evidencia. El estado aprobado lo declara la persona, no un evaluador automático.
- Cadena local: permite añadir bloques de decisión, resultado o evidencia; verificar la cadena guardada; descargarla; y comprobar el contenido de un archivo JSON sin importar ni reemplazar la cadena guardada.
- Respaldos: descargar respaldo completo y revisar un JSON antes de confirmar la restauración. La restauración válida reemplaza el estado completo solo después de confirmación.
Límites técnicos documentados: máximo combinado de 1.000 fichas/pruebas y 200 bloques; los bloques no tienen edición individual en el panel; respaldo y archivo de verificación hasta 5 MB. El almacenamiento es local del navegador; si no está disponible se puede trabajar en memoria, pero se debe descargar una copia antes de cerrar. Una copia inválida no debe sustituir los registros.
No se deben compartir contraseñas ni claves API en las fichas.

CONTACTO (/contacto.html)
Contacto de Edison: ing.edison.inc@gmail.com. El formulario permite preparar una consulta con nombre, correo, tema (Agentes CLI, Blockchain e IA o Uso del laboratorio) y objetivo/contexto. El formulario actual NO transmite ni almacena los datos: prepara un borrador que el visitante revisa y luego abre en su aplicación de correo para enviarlo a Edison. El formulario externo y la agenda solo aparecen si se configuran enlaces HTTPS válidos en configuracion.js.
Temas sugeridos para consultar: agentes CLI, blockchain e IA y uso del laboratorio.

GUÍA DE USO (LEEME.txt)
Primer experimento recomendado: crear una ficha con objetivo, contexto, entradas, entregables, límites y criterios de aceptación; descargar el kit ZIP; usar las instrucciones en una CLI propia y en una copia de trabajo; revisar y aprobar cada fase personalmente; registrar prueba real y evidencia en la bitácora; añadir evidencia a la cadena y verificar/exportar JSON; probar la detección de cambios sobre una COPIA del JSON sin alterar los registros originales; descargar y probar un respaldo tras revisar y confirmar su contenido.
Para publicar manualmente en Netlify, descomprimir el ZIP individual y publicar la carpeta que contiene index.html y assets. El proyecto estático no requiere compilación; netlify.toml establece publish=".".
La conservación de datos en file:// depende del navegador; para uso continuado se recomienda HTTPS y respaldos.
No hay claves ni servicios de pago incorporados en el sitio original.

PREGUNTAS Y RESPUESTAS QUE DEBE RESPETAR EL ASISTENTE
- ¿El sitio ejecuta agentes CLI? No. Prepara fichas e instrucciones; la ejecución se realiza fuera de la web con una CLI y proveedor que el usuario configure.
- ¿La web conecta con una IA automáticamente? No en el laboratorio original. El visitante debe elegir y configurar su CLI/proveedor. El asistente conversacional del sitio responde preguntas sobre la web, pero no ejecuta trabajos CLI del visitante.
- ¿Esto es una blockchain pública? No. Es una demostración local de hashes SHA-256 enlazados; no hay nodos, consenso ni anclaje externo.
- ¿Demuestra autoría o que el contenido es verdadero? No. Comprueba coherencia de hashes y enlaces en el archivo revisado, no identidad ni veracidad.
- ¿Dónde se guardan mis datos? En el almacenamiento del navegador y del dominio actual. No se sincronizan entre dispositivos ni usuarios. Descarga respaldos.
- ¿El formulario envía automáticamente? No. Prepara un borrador que la persona revisa y envía desde su correo.
- ¿Qué ofrece el laboratorio? Fichas, kits ZIP, bitácora, cadena local SHA-256, verificación de archivos y respaldos JSON.
- ¿Qué necesito para avanzar con agentes? Elegir/configurar una CLI y un proveedor, definir un caso de uso concreto y disponer de archivos o repositorio de trabajo.
- ¿Qué falta para un proyecto blockchain real? Definir propósito, red, actores, consenso/anclaje y pruebas externas; nada de eso se debe asumir.
- ¿Cómo contacto a Edison? Desde /contacto.html o escribiendo a ing.edison.inc@gmail.com.
`;
