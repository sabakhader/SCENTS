function updateCountdown() {
    const target = new Date('September 07, 2025 23:59:59 GMT-0500').getTime();
    const countdown = document.getElementById('countdown-timer');
    const message = document.getElementById('times-up-message');

    function update() {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            countdown.style.display = 'none';
            message.style.display = 'block';
            clearInterval(interval);
            return;
        }

        document.getElementById('days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').textContent = Math.floor((diff % (1000 * 60)) / 1000);
    }

    update();
    const interval = setInterval(update, 1000);
}

updateCountdown();