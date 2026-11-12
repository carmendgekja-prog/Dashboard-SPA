document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const themeToggle = document.querySelector(".theme-toggle");
    
    // Selectores del Drawer
    const drawer = document.getElementById("config-drawer");
    const openDrawerBtns = document.querySelectorAll(".open-drawer");
    const closeDrawerBtns = document.querySelectorAll(".close-drawer");
    const drawerOverlay = document.querySelector(".overlay");
    
    // Selectores del Modal
    const modal = document.getElementById("confirm-modal");
    const openModalBtn = document.querySelector(".open-modal");
    const cancelModalBtn = document.querySelector(".cancel-modal");
    const confirmActionBtn = document.querySelector(".confirm-action");


    // Toggle Menú Móvil
    menuToggle.addEventListener("click", () => {
        const isActive = sidebar.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isActive);
    });

    // NUEVO: Cerrar Sidebar en móvil al hacer clic fuera
    document.addEventListener("click", (e) => {
        // Verificamos si estamos en vista móvil (donde el menú no es fijo)
        if (window.innerWidth < 1024 && sidebar.classList.contains("active")) {
            // Si el clic no fue dentro del sidebar ni en el botón de hamburguesa
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        }
    });

    // CORRECCIÓN: Toggle Modo Oscuro/Claro forzado
    themeToggle.addEventListener("click", () => {
        let currentTheme = document.body.getAttribute('data-theme');
        
        // Si no se ha forzado un tema, leemos la preferencia del sistema operativo
        if (!currentTheme) {
            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        // Intercambiamos forzando el atributo data-theme
        if (currentTheme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙 Modo Oscuro';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Modo Claro';
        }
    });


    function openDrawer() {
        drawer.classList.add("open");
        drawer.setAttribute("aria-hidden", "false");
        drawerOverlay.classList.add("active");
        setTimeout(() => document.getElementById("instance-region").focus(), 300);
    }

    function closeDrawer() {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
        drawerOverlay.classList.remove("active");
    }

    openDrawerBtns.forEach(btn => btn.addEventListener("click", openDrawer));
    closeDrawerBtns.forEach(btn => btn.addEventListener("click", closeDrawer));

    // Cerrar clickeando afuera (Overlay)
    drawerOverlay.addEventListener("click", () => {
        if(drawer.classList.contains("open")) closeDrawer();
    });


    openModalBtn.addEventListener("click", () => {
        modal.showModal(); 
    });

    cancelModalBtn.addEventListener("click", () => {
        modal.close();
    });

    confirmActionBtn.addEventListener("click", () => {
        confirmActionBtn.disabled = true;
        confirmActionBtn.innerHTML = '<span class="spinner"></span> Procesando...';
        confirmActionBtn.classList.add("loading");
        cancelModalBtn.disabled = true;

        setTimeout(() => {
            modal.close();
            closeDrawer();
            
            confirmActionBtn.disabled = false;
            confirmActionBtn.innerHTML = 'Confirmar';
            confirmActionBtn.classList.remove("loading");
            cancelModalBtn.disabled = false;
            
            alert("✅ Instancia reiniciada correctamente.");
        }, 2000); 
    });

    // Accesibilidad: Cerrar Drawer con Escape (5D)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (drawer.classList.contains("open") && !modal.open) {
                closeDrawer();
            }
        }
    });
});