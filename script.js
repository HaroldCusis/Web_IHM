document.querySelectorAll('.ver-mas').forEach((btn) => {
    btn.addEventListener('click', () => {
        const p = btn.previousElementSibling;
        p.classList.toggle('texto-expandido');
        btn.textContent = p.classList.contains('texto-expandido') ? "Ver menos" : "Ver más";
    });
});
