<p align="center">
  <a href="https://es.react.dev/" target="blank"><img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png" width="200" alt="Logo react" /></a>
</p>

# Prisma Services

## Descripción del proyecto

Este proyecto es una aplicación web que te permite consumir una API de servicios correspondiente a registros de actividades cotidianas de las cuales se refleja el flujo fidusiario (ingreso o salida), los montos, asi como las observaciones correspondiente.

## Características principales

1. Crear registros de actividades: Puedes crear actividades con la informacion relacionada para su asentamiento en base de dato.
2. Obtener registros de actividades de un usuario: los usuarios podrán mantener un registro  de sus actividades mapeado en la ruta Dashboard.
3. Obtener detallado de actividad especifica: La aplicación te permite obtener el detallado de una actividad en especifico a elección de las registradas.
4. Eliminar actividades: el usuario podrá eliminar actividades de su elección.

## Tecnologías utilizadas

1. React.js: Un framework minimalista para la creacion de aplicaciones web.

2. Axios: Axios es un cliente HTTP simple basado en promesas para el navegador y node.js.

3. React-hook-form: librería para creación de formularios eficaces, flexibles y extensibles con validación fácil de usar.

4. React-redux: Libreria diseñada para trabajar con el modelo de componentes de React, con la funcion sublime de extraer los valores que se requiere en los componentes de Redux y actualización automática según sea necesario.

5. React-router-dom: El paquete react-router-dom contiene enlaces para usar React Router en aplicaciones web. Consulte la guía de inicio para obtener más información sobre cómo comenzar con React Router.


## Requeisitos previos

Antes de ejecutar el proyecto, asegurate de poseer una conección de datos estable ya que la función principal será la comunicación con la API de servicios de Prisma Digital. Deberás tener instalado Node.js a fin de ejecutar comandos NPM para los servicios locales.


## Cómo ejecutar el proyecto

1. Clonar el proyecto
2. Ejecutar `npm install`
3. Ubicar el archivo `.env.example` y renombrarlo a `.env`. Escribir la `URL BASE` la cual finaliza con la extención `.co`
6. Levantar el modo de desarrollo: `npm run dev`
