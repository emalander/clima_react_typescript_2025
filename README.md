☁️ Weather App \- Buscador de Clima con React y TypeScript

Bienvenido a la aplicación de búsqueda de clima, un proyecto moderno construido con **React** que utiliza **TypeScript** para la robustez del código y buenas prácticas de desarrollo.

## **🛠️ Tecnologías Utilizadas**

Este proyecto fue desarrollado utilizando el siguiente *stack*:

| Categoría | Tecnología | Uso en el Proyecto |
| :---- | :---- | :---- |
| **Frontend** | [React](https://es.react.dev/) | Librería principal para la interfaz de usuario. |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | Añade tipado estático, mejorando la detección de errores y la escalabilidad. |
| **Bundler** | [Vite](https://vitejs.dev/) | Entorno de desarrollo rápido y *bundler* para la compilación. |
| **Estilos** | [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) | Gestión de estilos locales para evitar conflictos de clases (.module.css). |
| **Validación** | [Zod](https://zod.dev/) | Librería para la validación de esquemas en tiempo de ejecución (especialmente la data de la API). |
| **Efectos Secundarios** | Custom Hooks | Lógica encapsulada para la gestión del *fetch* de datos (useWeather). |
| **API** | pi.openweathermap.org | Fuente de datos para obtener la información climática actual. |
| **UI/UX** | [Spinkit](https://tobiasahlin.com/spinkit/) | Componente *Spinner* ligero para mostrar estados de carga. |

## **🚀 Instalación y Uso**

Sigue estos pasos para configurar el proyecto localmente.

### **Prerrequisitos**

* Node.js (v18+)  
* Una cuenta en OpenWeatherMap para obtener tu clave API.

### **1\. Clonar el Repositorio**

git clone \<URL\_DE\_TU\_REPOSITORIO\>  
cd weather-app

### **2\. Instalación de Dependencias**

npm install  
\# o  
yarn install

### **3\. Configuración de la Clave API**

Crea un archivo llamado .env en la raíz del proyecto y añade tu clave API de OpenWeatherMap:

VITE\_API\_KEY="TU\_CLAVE\_AQUI"

### **4\. Iniciar el Servidor de Desarrollo**

npm run dev  
\# o  
yarn dev

El proyecto estará disponible en http://localhost:5173/ (o el puerto que te indique Vite).

## **💡 Características Destacadas**

### **1\. Manejo de Estado y Lógica con Custom Hooks**

La aplicación utiliza un *custom hook* (useWeather.ts) para centralizar toda la lógica de obtención y manejo de errores de la API. Esto mantiene los componentes de la interfaz de usuario limpios y enfocados en la presentación.

### **2\. Tipado Estricto con TypeScript**

Todos los datos (tanto el estado local como los parámetros de las funciones y las *props* de los componentes) están rigurosamente tipados. Esto asegura que los errores de tipo se detecten en tiempo de desarrollo.

### **3\. Validación de Datos (Zod)**

Para garantizar que los datos que provienen de la API externa (pi.openweathermap.org) tengan el formato esperado, se utiliza **Zod**. Esto previene *crashes* en la interfaz en caso de que la estructura de la respuesta de la API cambie inesperadamente.

#### **4\. Estilos Modulares**

Se emplean CSS Modules (.module.css) para aplicar estilos específicos a cada componente, evitando la colisión global de nombres de clases.

## **⚙️ Estructura del Proyecto**

Para que el diagrama de archivos se vea correctamente alineado, se usa un bloque de código:

src/  
├── components/  
│   ├── Form/         \# Componente del formulario de búsqueda  
│   ├── WeatherCard/  \# Componente para mostrar el clima  
│   └── Alert/        \# Componente para mostrar errores  
├── hooks/  
│   └── useWeather.ts \# Lógica central de la API y el estado (Custom Hook)  
├── types/  
│   └── index.ts      \# Definiciones de tipos para TypeScript y Zod  
├── data/  
│   └── countries.ts  \# Lista estática de países  
├── App.tsx           \# Componente principal  
└── main.tsx          \# Punto de entrada de la aplicación  
