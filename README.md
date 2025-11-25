# Follow Up

Habit tracker desarrollado con React, Firebase y un calendario tipo heatmap inspirado en GitHub, diseñado para visualizar hábitos de forma intuitiva, sencilla y anual.

---

## 📌 Descripción
**Follow Up** es una aplicación web para registrar hábitos y ver el progreso anual mediante un **calendar heatmap interactivo**. Nació como un proyecto de seguimiento de rutinas de ejercicio, pero su estructura es completamente escalable para cualquier tipo de hábito.

El proyecto combina:
- diseño limpio,
- buena experiencia de usuario,
- sincronización entre Firestore y localStorage,
- autenticación Firebase (incluye modo invitado),
- estructura escalable con Context API,
- y un flujo de carga optimizado para despliegue.

Demo online: https://follow-up-a3a76.web.app/

---

## 🚀 Tecnologías utilizadas
- **React + Vite**
- **React Router**
- **Context API**
- **Firebase Auth**
- **Firebase Firestore**
- **Firebase Hosting**
- **React Calendar Heatmap**
- **CSS personalizado** (más adelante se puede confirmar Tailwind)

---

## ✨ Funcionalidades principales
- Registrar hábitos por día usando un formulario simple.
- Marcar un hábito como completado y agregar una descripción opcional.
- Visualizar el progreso anual en un **heatmap interactivo**.
- Editar el título del hábito.
- Cambiar el año del calendario.
- Autenticación con Firebase (Email/Password).
- **Modo invitado** (Guest): permite usar la app sin registrarse.
- Sincronización inteligente:
  - Si estás logueado → sincroniza con Firestore.
  - Si no estás logueado → guarda en localStorage.
- Estados globales manejados con Context API.
- Flujo de carga optimizado para evitar parpadeos (loader inicial).

---

## 🧠 Aprendizajes del proyecto
Al desarrollar Follow Up aprendí y apliqué:

### 🔥 1. Primer proyecto usando Firebase & Firestore
- Cómo configurar Firebase en React.
- Cómo diseñar reglas de seguridad.
- Lectura/escritura de documentos en Firestore.
- Sincronización entre Firestore y localStorage sin duplicar información.

### 🔐 2. Autenticación completa
- Registro de usuarios.
- Verificación por email.
- Inicio de sesión con manejo de errores.
- Logout.
- Persistencia de sesión.
- Modo invitado.

### 🧩 3. Arquitectura y experiencia de usuario
- Separación clara por componentes.
- Contextos globales para compartir datos entre formulario y calendario.
- Optimización del renderizado del calendario.
- Control del loader inicial para evitar parpadeos en producción.
- Deploy automatizado con GitHub Actions.

### 🎨 4. Enfoque en UI/UX
- Diseño oscuro y limpio.
- Navegación clara.
- Feedback de usuario (hover, interacción visual, etc.).

---

## 📸 Capturas de pantalla
### Vista principal
![Main View](/mnt/data/Captura de pantalla 2025-11-25 134525.png)

---

## 📁 Estructura del proyecto (resumen)
```
/src
  /components
    Calendar.jsx
    CalendarTitle.jsx
    HabitForm.jsx
    NavBar.jsx
  /contexts
    AppContext.jsx
    NavBarContext.jsx
    UserContext.jsx
  /pages
    Habits.jsx
    Register.jsx
    SignIn.jsx
  App.jsx
  main.jsx
  firebase.js
```

---

## 🛠️ Instalación y ejecución
1. Clonar el repositorio:
```
git clone <repo-url>
```

2. Instalar dependencias:
```
npm install
```

3. Ejecutar en modo desarrollo:
```
npm run dev
```

4. Construir para producción:
```
npm run build
```

5. Desplegar en Firebase:
```
firebase deploy
```

---

## 🌱 Próximas mejoras (roadmap)
- Múltiples hábitos por usuario.
- Secciones adicionales (To-Do, Expenses).
- Heatmap con intensidades variables.
- Estadísticas semanales y mensuales.
- Modo oscuro/ligero intercambiable.
- Integración PWA.

---

## 📄 Licencia
Proyecto personal, libre para revisar y usar como referencia.

---