/* ---------- 1) Imágenes de respaldo ---------- */
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    const file = img.getAttribute('src');              // ruta que falló
    const box = document.createElement('div');
    box.className = 'img-fallback';
    box.textContent = file;                             // muestra qué archivo falta
    // Si es la imagen grande del perro, le damos un tamaño visible
    if (img.classList.contains('pet__main')) {
      box.style.cssText = 'width:420px;height:480px;border-radius:24px;';
    }
    img.replaceWith(box);
  });
});

/* ---------- 2) Burbujas en pantallas táctiles ---------- */
const isTouch = window.matchMedia('(hover: none)').matches;
if (isTouch) {
  const targets = document.querySelectorAll('.card, .pet');
  targets.forEach(el => {
    el.addEventListener('click', () => {
      const bubble = el.querySelector('.bubble');
      const visible = bubble.style.opacity === '1';
      // Oculta todas las demás
      document.querySelectorAll('.bubble').forEach(b => {
        b.style.opacity = '0'; b.style.transform = 'scale(.4)';
      });
      // Muestra (o deja oculta) la actual
      if (!visible) { bubble.style.opacity = '1'; bubble.style.transform = 'scale(1)'; }
    });
  });
}