function updateCountdown() {
    const christmas = new Date(new Date().getFullYear(), 11, 25);
    const now = new Date();
    const diff = christmas - now;

    if (diff <= 0) {
        document.querySelector('.contene').innerHTML = "🎉 ¡Feliz Navidad! 🎉";
        return;
    }

    const dia = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hora = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seg = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('dia').textContent = dia.toString().padStart(2, '0');
    document.getElementById('hora').textContent = hora.toString().padStart(2, '0');
    document.getElementById('min').textContent = min.toString().padStart(2, '0');
    document.getElementById('seg').textContent = seg.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
