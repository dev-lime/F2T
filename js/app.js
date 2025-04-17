// Загрузка компонентов
async function loadComponent(componentName, targetId) {
    try {
        const response = await fetch(`/components/${componentName}.html`);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (err) {
        console.error(`Ошибка загрузки ${componentName}:`, err);
    }
}

// Загружаем шапку и подвал на каждой странице
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header');
    loadComponent('footer', 'footer');
    
    // Активируем мобильное меню
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-toggle')) {
            document.querySelector('.nav-menu').classList.toggle('active');
        }
    });
});
