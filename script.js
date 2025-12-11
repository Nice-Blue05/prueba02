// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidad de Pestañas (Tabs)
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Obtener el ID del contenido a mostrar (e.g., 'tab-habilidades')
            const tabId = link.getAttribute('data-tab');

            // a) Desactivar todos los links y ocultar todos los contenidos
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // b) Activar el link clickeado
            link.classList.add('active');

            // c) Mostrar el contenido correspondiente
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });


    // 2. Efecto de Click en Botón (Mantiene la funcionalidad anterior)
    const showMessageBtn = document.getElementById('show-message-btn');
    const messageArea = document.getElementById('message-area');

    if (showMessageBtn) {
        showMessageBtn.addEventListener('click', () => {
            // Muestra u oculta el mensaje
            if (messageArea.style.display === 'none' || messageArea.style.display === '') {
                messageArea.style.display = 'block';
                showMessageBtn.textContent = 'Ocultar Mensaje';
            } else {
                messageArea.style.display = 'none';
                showMessageBtn.textContent = '¡Clic para saludar!';
            }
        });
    }

    // 3. Efecto de "Highlight" en Habilidades (Mantiene la funcionalidad anterior)
    const skillsList = document.getElementById('skills-list');
    
    if (skillsList) {
        skillsList.addEventListener('click', (event) => {
            const skillItem = event.target;
            if (skillItem.tagName === 'LI' && skillItem.parentElement.id === 'skills-list') {
                // Efecto visual temporal (Amarillo)
                skillItem.style.backgroundColor = '#ffc107'; 
                skillItem.style.color = '#333';

                setTimeout(() => {
                    skillItem.style.backgroundColor = ''; 
                    skillItem.style.color = '';
                }, 300);
            }
        });
    }

});
