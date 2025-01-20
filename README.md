# ChatBot Proyecto con Next.js, OpenAI y Shadcn

### Juan Camilo Franco Gonzalez, INGENIERO DE SISTEMAS

El archivo **Chatsu Test.mp4** es un video representativo del código funcionando.

Este es un proyecto de chat interactivo utilizando **Next.js**, **OpenAI** y componentes de UI de **Shadcn**. El chatbot permite a los usuarios interactuar con un modelo de lenguaje AI, y la interfaz está construida utilizando componentes modernos de Shadcn para una experiencia agradable.

---

## 📋 Requisitos

Antes de ejecutar el proyecto, asegúrate de tener los siguientes requisitos instalados en tu máquina:

- **Node.js** v16 o superior: [Descargar Node.js](https://nodejs.org/)
- **npm** o **yarn** para gestionar dependencias.
- **API Key de OpenAI**: Puedes obtenerla en [OpenAI](https://beta.openai.com/signup/).

---

## 🚀 Instalación

1. **Clonar el repositorio**:
   Si aún no has clonado el proyecto, usa el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/Camilo-cpu/chatsu.git
   cd chatsu
Instalar las dependencias: Luego, instala las dependencias necesarias para el proyecto ejecutando:

npm install

Configurar la API de OpenAI:

*Crea un archivo .env en la raíz de tu proyecto.
*Obtén tu API Key de OpenAI desde OpenAI API.
*Añade la clave en el archivo .env de la siguiente forma: OPENAI_API_KEY=tu_clave_api_aqui

Instalar y configurar Shadcn: Shadcn proporciona componentes preconstruidos para hacer que tu aplicación luzca más profesional. Asegúrate de haber ejecutado estos comandos para integrar los componentes necesarios:

*npx shadcn@latest init
*npx shadcn@latest add button
*npx shadcn@latest add form
*npx shadcn@latest add input
*npx shadcn@latest add textarea

🚧 Ejecutar el Proyecto
Para iniciar el proyecto en modo de desarrollo, utiliza el siguiente comando:

*npm run dev

Esto iniciará el servidor de desarrollo. Puedes acceder a la aplicación en tu navegador visitando http://localhost:3000.

📁 Estructura del Proyecto
La estructura de carpetas del proyecto es la siguiente:

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

🔑 Variables de Entorno
El archivo .env es crucial para almacenar configuraciones sensibles como la clave API de OpenAI. Aquí está el formato básico para agregar tu clave API en el archivo .env:

OPENAI_API_KEY=tu_clave_api_aqui

📝 Cómo Funciona
Este proyecto permite a los usuarios interactuar con un Chatbot basado en el modelo GPT-4 de OpenAI. La conversación se maneja en un estado de historial de mensajes que se mantiene a lo largo de la sesión.

*Componente ChatBox.tsx: Muestra el historial de mensajes y la interfaz para enviar nuevos mensajes.
*Componente Mensaje.tsx: Muestra cada mensaje del usuario o del asistente, con soporte para formateo HTML si es necesario.
*Componente ChatForm.tsx: Formulario para que el usuario ingrese un mensaje, que luego es enviado a la API de OpenAI para obtener una respuesta.
⚙️ Comandos Útiles
Instalar las dependencias:
* npm install
Iniciar el servidor de desarrollo:
* npm run dev
Ejecutar la aplicación en producción:
*npm run build
*npm start

📢 Notas
Seguridad: No compartas tu clave API de OpenAI públicamente. Usa el archivo .env para mantener las claves seguras.
Configuración de OpenAI: Si deseas modificar el modelo o la configuración de la API de OpenAI, puedes hacerlo en el archivo lib/actions.openai.ts, que maneja la lógica para interactuar con la API.
🤝 Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto o deseas reportar un problema, por favor abre un "issue" o envía un "pull request".




