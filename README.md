# Dashboard SPA - Monitoreo de Infraestructura Cloud ☁️

Este proyecto es una interfaz web responsiva (Dashboard Single Page Application) desarrollada como parte de una práctica integral de Diseño de Interfaces. El objetivo principal es la visualización de métricas de servidores y la ejecución de acciones críticas de administración, garantizando accesibilidad, usabilidad y confirmación segura.

## 🎯 Objetivo General
Diseñar y construir una interfaz aplicando metodologías de Experiencia de Usuario (UX), las 5 dimensiones del Diseño de Interacción (IxD) y maquetación moderna nativa, separando la interfaz en tres zonas funcionales estratégicas.

## 🛠️ Tecnologías y Herramientas Utilizadas
Para garantizar el dominio de los principios web nativos, este proyecto se desarrolló con restricciones estrictas de no utilizar frameworks CSS prefabricados (como Bootstrap o Tailwind).

* **HTML5 Semántico:** Estructuración del documento, formularios y ventanas modales nativas (`<dialog>`).
* **CSS3 Nativo:** 
  * Estrategia *Mobile-First* y *Media Queries*.
  * Maquetación con **CSS Grid** (patrón *Bento Layout*) y **Flexbox**.
  * Variables CSS (`:root`) para la gestión de paleta de colores.
* **JavaScript (Vanilla):** Manipulación del DOM, gestión de estados y eventos de la interfaz.
* **Figma:** Prototipado, Wireframes y definición del User Persona.

## ✨ Características Principales

1. **Arquitectura de Interfaz en 3 Zonas:**
   * **Zona 1 (Navegación):** Header superior fijo y Sidebar responsivo.
   * **Zona 2 (Contenido):** Panel central con *Bento Grid Layout* mostrando métricas en tiempo real.
   * **Zona 3 (Interacción):** *Drawer* (panel deslizante) para configuración y Ventana Modal de confirmación segura.

2. **Mecanismos de Control y Accesibilidad:**
   * Gestión rigurosa de los 5 estados en controles de interfaz: *Default, Hover, Focus (accesible), Disabled y Loading*.
   * Soporte de atajos de teclado (tecla `Escape` para cerrar modales y paneles).

3. **Modo Oscuro Nativo e Interactivo:**
   * Detección automática mediante `@media (prefers-color-scheme: dark)`.
   * Toggle manual (override) programado con JavaScript y variables CSS.

4. **Aplicación de las 5 Dimensiones IxD:**
   * **1D (Palabras):** Microcopia concisa y alertas claras.
   * **2D (Elementos Visuales):** Paleta semántica y jerarquía tipográfica.
   * **3D (Espacio Físico):** Zonas de toque táctil mínimas de 44x44px.
   * **4D (Tiempo):** Transiciones fluidas de 0.3s y simulación de peticiones asíncronas.
   * **5D (Comportamiento):** Prevención de errores destructivos.

## 🚀 Instalación y Ejecución
Dado que el proyecto es puramente frontend sin dependencias externas, no se requiere la instalación de gestores de paquetes.

1. Clona este repositorio:
   ```bash
   git clone https://github.com/carmendgekja-prog/Dashboard-SPA
   ```
2. Abre la carpeta del proyecto.
3. Ejecuta el archivo `index.html` en tu navegador web preferido.

## 📁 Estructura del Proyecto
```text
/
├── index.html        # Estructura semántica (SPA)
├── styles.css        # Estilos nativos (Grid, Flexbox, Modo Oscuro)
├── app.js            # Lógica de estados e interacciones
├── README.md         # Documentación del proyecto
└── assets/           # Imágenes y recursos (Ficha UX, capturas, etc.)
```
