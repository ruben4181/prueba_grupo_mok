# Prueba Desarrollador Frontend - Grupo Mok

## Mejoras

Teniendo en cuenta la información de las tecnologías usadas, por Grupo Mok, en sus desarrollos se realizaron las siguientes consideraciones:

- Investigar y usar la metodología Atomic Design
- Usar la librería Tailwind CSS para el maquetado y estilos de la interfaz gráfica.
- Uso de Lazy Loading en el componente más grande y "pesado", la tabla de usuarios, con un fallback para reducir el TTI y CLP.

Teniendo en cuenta el aspecto visual y de U/X se realizaron las siguientes mejoras:

- Selección de colores para el tema oscuro y tema claro del Sistema Operativo, mediante la etiqueta **dark:** de Tailwind, para una mejor experiencia de usuario con respecto a la configuración del tema de su Sistema Operativo.
- Adición del botón flotante **Ir al final**, que le sirve al usuario para saber que hay más datos por leer en la tabla y para desplazarse hasta la última fila de la tabla cuando se da click en este botón. El botón aparece y desaparece según la última fila de la tabla esté o no esté en el ViewPort. Para saber si la última fila está siendo visualizada en el ViewPort se hace uso de un Custom Hook con la lógica principal del Interception Observer, con el fin de que pueda ser reusado en diferentes partes del proyecto de ser necesario.
- Colorear, las filas de la tabla de usuario, con los colores **#112233** y **#556677**, solamente para el tema oscuro, y con los colores **bg-white** y **bg-slate-100** para el tema claro, esto para no generar un contraste excesivo que puede resultar visualmente molesto para el usuario o disruptivo con respecto al tema del Sistema Operativo.
- Diseño reponsive en la sección de botones para mejorar la visualización en dispositivos con pantallas más pequeñas.

## Levantamiento del proyecto

El proyecto solo hace uso de la librería externa Tailwind CSS, la cual ya está en el package.json, por lo que para levantar el proyecto basta con clonarlo y ejecutar

`https://github.com/ruben4181/prueba_grupo_mok.git`
`cd prueba_grupo_mok`
`npm install`

Para levantar en modo desarrollo
`npm start`

Para levantar el proyecto minificado y compilado, listo para producción
`npm install -g serve`
`npm run build`
`serve -s build`

## Ruta de prueba pública

También se puede revisar el proyecto corriendo, en Google Cloud, se puede acceder a la siguiente ruta, donde ya se realizó el despliegue:

[Ruta de prueba Google Cloud](http://34.125.8.183/)
