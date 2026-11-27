# Pruebas realizadas · Edison

11 grupos de pruebas aprobados. Ejecutados con los scripts reales y una representación DOM instrumentada del HTML, mediante Node VM. No se utilizó navegador ni renderizador visual.

- Aprobado: Edison: SHA-256 coincide con node:crypto en seis vectores
- Aprobado: Edison: crear ficha desde la interfaz y descargar kit ZIP completo
- Aprobado: Edison: bitácora vinculada, observación requerida y edición estable
- Aprobado: Edison: evidencia encadenada y detección de cambios y reordenamiento
- Aprobado: Edison: verificar archivo no altera los registros locales
- Aprobado: Edison: importación de respaldo con revisión y confirmación
- Aprobado: Edison: respaldo alterado no cambia los datos
- Aprobado: Edison: pestañas por enlace y navegación de teclado
- Aprobado: Edison: bloqueo de almacenamiento conserva copia en memoria
- Aprobado: 07: contacto prepara, copia y limpia borrador sin enviar
- Aprobado: Edison: una evidencia nueva invalida la verificación anterior

El ZIP producido por la herramienta se abrió con zipfile: seis archivos presentes, CRC y UTF-8 correctos. SHA-256 contrastado con node:crypto, incluyendo Unicode y múltiples bloques.

Auditoría del conjunto: enlaces y fragmentos locales, identificadores únicos, recursos, etiquetas de campos y sintaxis JavaScript. Los datos de pruebas no están precargados en la herramienta.

## Revisión del 26 de noviembre de 2026

Los 22 grupos de regresión de ambos proyectos volvieron a pasar. Se añadieron las siguientes comprobaciones de problemas concretos:

- Aprobado: Edison: editar el texto de cadena limpia la verificación anterior
- Aprobado: Edison: una lectura antigua no sobrescribe un archivo recién cargado
- Aprobado: Edison: kit exportado avisa por ficha pendiente y cancelación conserva texto
- Aprobado: Edison: alterar espacios del contenido de un bloque se detecta
- Aprobado: Límite de respaldo: datos demasiado grandes no sustituyen el estado

Sin inspección visual en navegador.
