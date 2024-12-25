const flowersContainer = document.querySelector('.flowers');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  const size = Math.random() * 50 + 10;
  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;

  flower.style.left = `${Math.random() * 100}%`;
  flower.style.animationDuration = `${Math.random() * 3 + 2}s`;
  flower.style.animationDelay = `${Math.random() * 2}s`;

  flowersContainer.appendChild(flower);

  setTimeout(() => flower.remove(), 5000);
}
setInterval(createFlower, 300);

// Obtenemos el elemento audio
const reproductor = document.getElementById('reproductor');

// Función para reproducir la música automáticamente
function reproducirMusica() {
    reproductor.play();
}

// Llamamos a la función para reproducir la música
reproducirMusica();