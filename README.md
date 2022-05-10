# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

![adem-ay-Tk9m_HP4rgQ-unsplash](https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg)

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Resumen del proyecto
**action!**, es una red social pensada para que actores productores y directores puedan interactuar de forma directa. 

El objetivo es que los usuarios puedan encontrar información de castings, producciones, información relacionada con el medio facilmente y sin necesitad de intermediarios.

Para acceder a esta red social solo se necesita un correo electrónico. Hay dos formas para registrarte, la primera con una cuenta de correo de google y la segunda ingresando tu nombre de usuario, correo electrónico y creando una contraseña. 

Aquí se podrán realizar publicaciones, editarlas y eliminarlas. Las publicaciones son visibles para todos los usuarios, también darle like a  las publicaciones que más te gusten o quitar tu like si es que ya no lo quieres tener.



En este proyecto construimos **action!**, una Red Social para actores, productores y directores en donde pueden interactuar. 

![action! Logo](https://i.imgur.com/uKNYKl6.jpg)

**action!** permite a cualquier usuario crear una cuenta de acceso ingresando su nombre de usuario, email y contraseña y loguearse con ella o también puede loguearse con su cuenta de Gmail; puede crear, editar, borrar y _"likear"_ publicaciones.

El objetivo principal de aprendizaje de este proyecto es construir una **Single-page Application (SPA) responsive**  (con más de una vista / página) en la que podamos **leer y escribir datos**.

## 3. Objetivos de aprendizaje

Los objetivos de aprendizaje que revisamos durante este proyecto son:

### HTML

- [✓]  **Uso de HTML semántico**

### CSS

- [✓]  **Uso de selectores de CSS**

- [✓]  **Modelo de caja (box model): borde, margen, padding**

- [✓]   **Uso de flexbox en CSS**


### Web APIs

- [✓]  **Uso de selectores del DOM**

- [✓]  **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [✓]  **Manipulación dinámica del DOM**

- [✓]  **Ruteado (History API, evento hashchange, window.location)**

### JavaScript

- [✓]  **Arrays (arreglos)**

- [✓]  **Objetos (key, value)**

- [✓]  **Diferenciar entre tipos de datos primitivos y no primitivos**

- [✓]  **Variables (declaración, asignación, ámbito)**


- [✓]  **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [✓]  **Uso de bucles/ciclos (while, for, for..of)**

- [✓]  **Funciones (params, args, return)**

- [✓]  **Módulos de ECMAScript (ES Modules)**

- [✓]  **Uso de linter (ESLINT)**

- [✓]  **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [✓]  **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [✓]  **Callbacks**

- [✓]  **Promesas**

### Control de Versiones (Git y GitHub)

- [✓]  **Git: Instalación y configuración**

- [✓]  **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [✓]  **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [✓]  **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [✓]  **GitHub: Despliegue con GitHub Pages**

- [✓]  **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [✓]  **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### User-centricity

- [✓]  **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### Product-design

- [✓]  **Crear prototipos de alta fidelidad que incluyan interacciones**

- [✓]  **Seguir los principios básicos de diseño visual**

### Research

- [✓]  **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

### Firebase

- [✓]  **Firebase Auth**

- [✓]  **Firestore**


## 4. Consideraciones generales

* El proyecto lo trabajamos en equipo de tres. 

* La lógica del proyecto se imprementó completamente en JavaScript (ES6+), HTML y CSS. 


## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate

Este proyecto no incluía un _boilerplate_, así es que se definió la estructura de carpetas.


### 5.2 Definición del producto

**action!**, es una red social pensada para que actores productores y directores puedan interactuar de forma directa. 
Hicimos una breve encuesta y la pasamos a personas relacionadas con el medio.
Nos basamos en esas respuestas para ir definiendo nuestra red social. 

![encuesta](https://i.imgur.com/3wNs6wn.jpg)

El objetivo es que los usuarios puedan encontrar información de castings, producciones, información relacionada con el medio facilmente y sin necesitad de intermediarios, al mismo tiempo actores, directores y productores pueden conocerse e interactuar.

### 5.3 Historias de usuario

Una vez entendidas la necesidades, escribimos las Historias de Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada una de tus Historias de Usuario tenía:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse y así como equipo sabíamos que cada historia estaba terminada y lista para publicarse. 

Los siguientes aspectos se incluyeron:

  - Es una SPA (Single Page Application).
  - Es _responsive_.
  - Testeamos manualmente buscando errores e imperfecciones simples.
  - Hicimos _pruebas_ de usabilidad e incorporamos el _feedback_ de los
    usuarios como mejoras.
  - Desplegamos la aplicación.

    [Puedes visitar action! dando clic aquí.](https://action-redsocial.web.app/ "Puedes visitar action! dando clic aquí.")

  - Etiquetamos la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

**action!** se ve bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Seguimos la técnica de _`mobile first`_.

![responsive](https://i.imgur.com/X4xM0Ey.png)

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)


#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro usamos Firebase.
  - Se puede crear una cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña es secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, se valida.
  - Si hay errores, se muestran mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se valida que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, verifica si el usuario está _logueado_
    antes de mostrar contenido.
  - Se puede publicar un _post_.
  - Se puede dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Se lleva un conteo de los _likes_.
  - Se puede eliminar un post específico.
  - Pide confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, cambia el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al recargar la página debo puedo ver los textos editados.

### 5.7 Consideraciones técnicas UX

* Entrevistamos usuarios para conocer sus opiniones y basarnos en ellas.
* Hicimos un  prototipo de baja fidelidad.
![baja fidelidad](https://i.imgur.com/q9V51V9.png)

* Hicimos un  prototipo de alta fidelidad.
![alta fidelidad](https://i.imgur.com/jDo7Fpb.png)

* La implementación en código siguió los lineamientos del
  diseño.
* Hicimos test de usabilidad con la herramienta Maze.
Los mapas de calor que obtuvimos nos permitieron ver como interactúa el usuario con nuestra applicación.

![usabilidad](https://i.imgur.com/GVhVgur.png)

***

