![imagen](https://user-images.githubusercontent.com/92324278/212838270-92d42db7-204f-43ce-9f31-5a27d5c2056b.png)

# Newton WebApp

## Enlace a newton desplegada: https://resilient-dolphin-894b13.netlify.app/

Se ha hecho uso de Netlify debido a problemas con gitHub pages, su simpleza y el aprovechamiento de la función build de react para generar
archivos optimizados para desplegar

Con uso de la API https://newton.vercel.app/

### Intro

En resumen la web de newton es una calculadora simple que recibe operaciones en formato **operación**/Expresion y devuelve un resultado. Posee además funcionalidades clave de web y dispone de una documentación con buscador donde consultar los diferentes parámetros para usarla.

La estructura de la web es la siguiente:

- Página principal
- Account
  - Perfil
  - Seguridad
  - Opciones de pago
  - Ajustes
- Donate
  - Overlay de donar con tarjeta clicando en "Credit card"
- About
  - Docs
  - Contacto

## Estas son algunas de las funcionalidades que se han implementado:

### Login, registro y todos los campos con validaciones

Está implementada una simulación completa de login y registro donde puedes registrarte con una cuenta, desloguearte clicando en el texto del menú burguer
y volverte a loguear con la cuenta que has introducido. Si cambias los datos en tu sección "account" podrás seguir haciendo log in y log out con los datos se hayan guardado.

### Actualización y completado de datos del usuario

En account, el usuario puede cambiar sus datos y añadir 2 campos nuevos a sus datos que se almacenan. En password puede cambiar su contraseña mediante la validación de su contraseña anterior y también se ha implementado una funcionalidad para cambiar la visibilidad de la contraseña (filtro de privacidad).

### Docs
En la sección about/docs encontramos un buscador que filtra por descripción, código de operación, sección, nombre de la operación o término en alguna de estas partes y actualiza dinámicamente el contenido en función de la búsqueda.

### Función "FastDocs"

Al mantener pulsado sobre uno de los botones de la calculadora durante más de 1 segundo, automáticamente nos llevará a la documentación estableciendo como
placeholder el texto recomendado a buscar para encontrar el boton en la documentación.

### Adicional

- Al clicar en la caja de texto de la sección contacto, aparecerá un mensaje aleatorio como placeholder simpático. 
- En la sección account/settings se encuentra un botón de eliminar sobre el que debemos pulsar dos veces. Al hacerlo saldrá un menú de confirmación
- Clicar en bizum en la sección donations/bizum nos abrirá un overlay de información
- El icono copiar al portapapeles efectivamente copia al portapapeles
- La barra posee una animación cuando recibe texto copiado directamente

### Navegación
- El menú burger es el eje de la navegación, se utiliza principalmente para movernos entre las distintas secciones. 
- Para cerrar el menú burger, debemos *clicar fuera, pinchar en una sección para ir allí o hacer doble click en el botón burger*. Los iconos de las redes sociales nos llevan a la red social en concreto. Clicar en el logo de newton nos llevará a la p

## Información extra

La documentación puede generarse automáticamente con el comando "npm run doc".

Se ha utilizado la librería de componentes de react mui/materialUI para hacer ciertos elementos como el tooltip al copiar el texto:

https://mui.com/material-ui/react-autocomplete/#autocomplete-autofill
