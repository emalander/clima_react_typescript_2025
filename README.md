☁️ Weather App - Buscador de Clima con React y TypeScript Bienvenido a la aplicación de búsqueda de clima, un proyecto moderno construido con React que utiliza TypeScript para la robustez del código y buenas prácticas de desarrollo.🛠️ Tecnologías Utilizadas
Este proyecto fue desarrollado utilizando el siguiente stack:CategoríaTecnologíaUso en el ProyectoFrontendReactLibrería principal para la interfaz de usuario.
Lenguaje TypeScript: Añade tipado estático, mejorando la detección de errores y la escalabilidad.
Bundler Vite Entorno de desarrollo rápido y bundler para la compilación.
EstilosCSS Modules
Gestión de estilos locales para evitar conflictos de clases (.module.css).
#  Validación 
Zod Librería para la validación de esquemas en tiempo de ejecución (especialmente la data de la API).Efectos SecundariosCustom HooksLógica encapsulada para la gestión del fetch de datos (useWeather).
#  API
"api.openweathermap.org" Fuente de datos para obtener la información climática actual.
#  UI/UX
Spinkit Componente Spinner ligero para mostrar estados de carga.
# 🚀 Instalación y Uso
Sigue estos pasos para configurar el proyecto localmente.
Prerequisitos Node.js (v18+) Una cuenta en OpenWeatherMap para obtener tu clave API.
#  
1. Clonar el Repositoriogit clone <URL_DE_TU_REPOSITORIO>
cd weather-app
2. Instalación de Dependenciasnpm install
# 
yarn install
3. Configuración de la Clave APICrea un archivo llamado .env en la raíz del proyecto y añade tu clave API de OpenWeatherMap:VITE_API_KEY="TU_CLAVE_AQUI"
4. Iniciar el Servidor de Desarrollonpm run dev
# 
yarn dev
El proyecto estará disponible en http://localhost:5173/ (o el puerto que te indique Vite).💡 Características Destacadas1. Manejo de Estado y Lógica con Custom HooksLa aplicación utiliza un custom hook (useWeather.ts) para centralizar toda la lógica de obtención y manejo de errores de la API. Esto mantiene los componentes de la interfaz de usuario limpios y enfocados en la presentación.2. Tipado Estricto con TypeScriptTodos los datos (tanto el estado local como los parámetros de las funciones y las props de los componentes) están rigurosamente tipados. Esto asegura que los errores de tipo se detecten en tiempo de desarrollo.3. Validación de Datos (Zod)Para garantizar que los datos que provienen de la API externa (pi.openweathermap.org) tengan el formato esperado, se utiliza Zod. Esto previene crashes en la interfaz en caso de que la estructura de la respuesta de la API cambie inesperadamente.4. Estilos ModularesSe emplean CSS Modules (.module.css) para aplicar estilos específicos a cada componente, evitando la colisión global de nombres de clases.⚙️ Estructura del Proyectosrc/
├── components/
│   ├── Form/         # Componente del formulario de búsqueda
│   ├── WeatherCard/  # Componente para mostrar el clima
│   └── Alert/        # Componente para mostrar errores
├── hooks/
│   └── useWeather.ts # Lógica central de la API y el estado (Custom Hook)
├── types/
│   └── index.ts      # Definiciones de tipos para TypeScript y Zod
├── data/
│   └── countries.ts  # Lista estática de países
├── App.tsx           # Componente principal
└── main.tsx          # Punto de entrada de la aplicación
