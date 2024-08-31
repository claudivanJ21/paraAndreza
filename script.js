document.getElementById('surpriseBtn').addEventListener('click', function() {
    const modal = document.getElementById('galleryModal');
    modal.classList.add('show');
    modal.classList.remove('hidden');
});

const closeBtn = document.querySelector('.modal .close');

closeBtn.addEventListener('click', function() {
    const galleryModal = document.getElementById('galleryModal');
    galleryModal.classList.remove('show');
    setTimeout(() => {
        galleryModal.classList.add('hidden');
    }, 500);  // Aguarda a animação antes de ocultar
});

// Fechar o modal ao clicar fora da galeria
window.addEventListener('click', function(event) {
    const galleryModal = document.getElementById('galleryModal');
    if (event.target === galleryModal) {
        galleryModal.classList.remove('show');
        setTimeout(() => {
            galleryModal.classList.add('hidden');
        }, 500);
    }
});

// Mostrar imagem grande ao clicar na imagem da galeria
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function() {
        const imageModal = document.getElementById('imageModal');
        const modalImage = imageModal.querySelector('img');
        
        modalImage.src = this.src;
        imageModal.classList.add('show');
        imageModal.classList.remove('hidden');
    });
});

const imageModalCloseBtn = document.querySelector('#imageModal .close');

imageModalCloseBtn.addEventListener('click', function() {
    const imageModal = document.getElementById('imageModal');
    imageModal.classList.remove('show');
    setTimeout(() => {
        imageModal.classList.add('hidden');
    }, 500);  // Aguarda a animação antes de ocultar
});

// Fechar o modal da imagem ao clicar fora da imagem
window.addEventListener('click', function(event) {
    const imageModal = document.getElementById('imageModal');
    if (event.target === imageModal) {
        imageModal.classList.remove('show');
        setTimeout(() => {
            imageModal.classList.add('hidden');
        }, 500);
    }
});

// Função para criar corações em loop
function createHearts() {
    const heartContainer = document.getElementById('heartContainer');

    // Cria um novo coração
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;  // Posiciona horizontalmente
    heart.style.animationDuration = `${Math.random() * 2 + 2}s`;  // Duração aleatória

    // Adiciona o coração ao contêiner
    heartContainer.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 3000);  // O mesmo tempo da duração da animação
}

// Função para gerar corações em loop
function startHeartAnimation() {
    createHearts();  // Cria um coração inicial

    // Gera novos corações a cada intervalo
    setInterval(createHearts, 500);  // Cria um novo coração a cada 500ms
}

// Inicia a animação de corações
startHeartAnimation();

// Adiciona corações ao clicar na imagem
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function() {
        createHearts();  // Cria corações na tela quando a imagem é clicada
    });
});
