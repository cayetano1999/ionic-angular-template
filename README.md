# 📱 Ionic Capacitor Template - Angular 18 🚀

Este template es un punto de partida para proyectos de **Angular 18** con **Ionic 8** y **Capacitor 7**. Ofrece una estructura modular optimizada y servicios avanzados para facilitar el desarrollo de aplicaciones móviles y PWA.

---

## 🏆 Características Principales

- ✅ **Angular 18** y **Ionic 8** con soporte para Capacitor 7.
- 🌍 **Soporte multiplataforma** (Android, iOS y Web).
- 🔌 **Plugins Capacitor** preintegrados: `preferences`, `network`, `status-bar`, `haptics`, `admob`, `browser`.
- 🔥 **Firebase**: Autenticación, base de datos, almacenamiento, Remote Config.
- 💎 **Optimización UI/UX**: `animation.css`, `Swiper.js`.
- 📊 **RxJS y Lazy Loading** para alto rendimiento.
- 🔐 **Seguridad** con `CryptoJS` y almacenamiento seguro.

---

## 📂 Estructura del Proyecto

```txt
src/
|-- app/
|   |-- core/
|   |   |-- services/          # Servicios globales (API, manejo de autenticación, etc.)
|   |   |-- guards/            # Guards de rutas
|   |   |-- interceptors/      # Interceptores de HTTP
|   |   |-- helpers/           # Funciones utilitarias globales
|   |   |-- constants/         # Constantes globales
|   |   |-- enums/             # Enumeraciones globales
|   |-- shared/
|   |   |-- components/        # Componentes compartidos (modales, botones, etc.)
|   |   |-- directives/        # Directivas personalizadas
|   |   |-- pipes/             # Pipes reutilizables
|   |   |-- interfaces/        # Interfaces TypeScript compartidas
|   |   |-- validators/        # Validadores personalizados
|   |-- features/
|   |   |-- feature1/          # Módulo de una característica específica
|   |   |   |-- pages/         # Páginas específicas del módulo
|   |   |   |-- components/    # Componentes específicos del módulo
|   |   |   |-- services/      # Servicios específicos del módulo
|   |   |-- feature2/
|   |       |-- pages/
|   |       |-- components/
|   |       |-- services/
|   |-- app-routing.module.ts  # Configuración de rutas principal
|   |-- app.module.ts          # Módulo principal de la aplicación
|   |-- app.component.ts       # Componente raíz
|-- assets/
|   |-- images/                # Imágenes estáticas
|   |-- icons/                 # Íconos de la aplicación
|   |-- locales/               # Archivos de internacionalización (i18n)
|-- environments/
|   |-- environment.ts         # Configuración para desarrollo
|   |-- environment.prod.ts    # Configuración para producción
|-- theme/
|   |-- variables.scss         # Variables globales de estilo
|   |-- global.scss            # Estilos globales
|-- index.html                 # Archivo HTML raíz
|-- main.ts                    # Punto de entrada de la aplicación
|-- polyfills.ts               # Archivos de polyfills
|-- test.ts                    # Configuración de pruebas
```

---

## 🛠 Servicios Incluidos

| Servicio                 | Funcionalidad |
|--------------------------|--------------|
| **AdmobService**         | Integración con Google AdMob. |
| **ApiService**           | Manejo de solicitudes HTTP. |
| **AuthService**          | Autenticación y gestión de tokens. |
| **BackButtonService**    | Manejo del botón de retroceso. |
| **CommunicationService** | Comunicación entre componentes con RxJS. |
| **FirebaseServices**     | Analytics, Database, Remote Config, Storage. |

---

## 🏗 Guards de Seguridad

- 🔐 `AppMaintenanceGuard`: Bloquea acceso si la app está en mantenimiento.
- ⏫ `ForceUpgradeGuard`: Forza actualización si la versión es antigua.
- 🌍 `InternetConnectionGuard`: Restringe acceso si no hay conexión.
- 🏁 `OnboardingGuard`: Bloquea acceso si el usuario no completó el onboarding.

---

## 📦 Interceptores

- `HttpInterceptor`:  
  ✅ Agrega **token de autenticación** en cada solicitud.  
  ⚠️ Manejo de errores **401 Unauthorized** (sesión expirada).  

---

## 🎨 Optimización UI/UX

- `animation.css`: Efectos visuales avanzados.
- `Swiper.js`: Componente de carrusel personalizable.

---

## 🔧 Cómo Ejecutar el Proyecto

1️⃣ **Clonar el repositorio**
```sh
git clone https://github.com/cayetano1999/ionic-angular-template
cd ionic-angular-template
```
2️⃣ **Instalar dependencias**
```sh
npm install
```
3️⃣ **Ejecutar en modo desarrollo**
```sh
ionic serve
```
4️⃣ **Construir la aplicación**
```sh
ionic build
```

---

## ✨ Autor

👤 **Josue Alexander Cayetano**  
📍 Ingeniero en Ciencias Computacionales y Desarrollador de Software.  
🌎 Especializado en **Angular**, **Ionic**, **Firebase** y arquitectura modular.  

📌 **Contacto:**
- 🔗 [GitHub](https://github.com/cayetano1999)
- 📧 [josuecayetano@hotmail.com](mailto:josuecayetano@hotmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/josuecayetano/)

