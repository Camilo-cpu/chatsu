ChatBot Proyecto con Next.js, OpenAI, y Shadcn
Este es un proyecto de chat interactivo utilizando Next.js, OpenAI, y componentes de UI de Shadcn. El chatbot permite a los usuarios interactuar con un modelo de lenguaje AI, y la interfaz está construida utilizando componentes de Shadcn para una experiencia moderna.

Requisitos
Antes de ejecutar el proyecto, asegúrate de tener los siguientes requisitos instalados en tu máquina:

*Node.js (v16 o superior)
*npm o yarn
*OpenAI API Key (más detalles en OpenAI)
Instalación
Clonar el repositorio (si lo has subido a un repositorio):

bash
Copiar código
git clone <URL_del_repositorio>
cd <nombre_del_repositorio>
Instalar dependencias:

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

bash
Copiar código
npm install
Configurar la API de OpenAI:

Crea un archivo .env en la raíz de tu proyecto.
Obtén tu clave API de OpenAI en OpenAI API.
Añade la clave API en el archivo .env de la siguiente manera:
env
Copiar código
OPENAI_API_KEY=tu_clave_api_aqui
Instalar y configurar Shadcn:

Asegúrate de haber ejecutado los siguientes comandos para integrar los componentes de Shadcn:

bash
Copiar código
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
Ejecutar el Proyecto
Para iniciar el proyecto en modo de desarrollo, utiliza el siguiente comando:

bash
Copiar código
npm run dev
Esto iniciará el servidor de desarrollo y podrás acceder al proyecto en http://localhost:3000.

Estructura del Proyecto
La estructura del proyecto es la siguiente:

bash
Copiar código
/my-chatbot
├── /components
│   ├── ChatBox.tsx       # Componente principal para mostrar el chat
│   ├── ChatForm.tsx      # Formulario para enviar nuevos mensajes
│   ├── Mensaje.tsx       # Componente para mostrar cada mensaje
│   └── UI Components     # Componentes de UI personalizados como Botón, Entrada, etc.
├── /lib
│   ├── actions.openai.ts # Función para interactuar con la API de OpenAI
├── /pages
│   ├── api
│   └── index.tsx         # Página principal donde se muestra el chat
├── .env                  # Archivo para almacenar las variables de entorno
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
Notas
Seguridad: Asegúrate de no compartir tu clave API de OpenAI públicamente. Utiliza el archivo .env para almacenar información confidencial.
Configuración de OpenAI: Si deseas cambiar el modelo o la configuración de la API de OpenAI, puedes modificar el archivo lib/actions.openai.ts donde se hace la llamada a la API.
Contribuciones
Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras, no dudes en abrir un "issue" o enviar un "pull request".


