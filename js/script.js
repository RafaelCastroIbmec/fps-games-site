// ===== DADOS DOS JOGOS =====
const gamesData = {
    cs2: {
        titulo: 'Counter-Strike 2',
        descricao: 'O sucessor do lendário CS:GO, desenvolvido pela Valve. Combina o clássico gameplay tático 5v5 com a nova engine Source 2, trazendo gráficos aprimorados, física de fumaça revolucionária e mapas reformulados.',
        caracteristicas: [
            'Modo competitivo 5v5 com sistema de ranking',
            'Economia de armas e equipamentos por rodada',
            'Mapas clássicos reformulados (Dust2, Mirage, Inferno)',
            'Sistema de fumaça dinâmica com a Source 2',
            'Modo Premier com mapas em rotação competitiva'
        ],
        plataformas: ['PC', 'Steam'],
        tags: ['Tático', 'Competitivo', 'F2P']
    },
    valorant: {
        titulo: 'Valorant',
        descricao: 'O FPS tático da Riot Games que combina precisão de tiro com habilidades únicas de agentes. Cada agente possui habilidades especiais que podem mudar o rumo da partida, criando um meta estratégico profundo.',
        caracteristicas: [
            'Partidas 5v5 no formato melhor de 25 rodadas',
            'Sistema de agentes com 4 habilidades únicas cada',
            'Economia de créditos para compra de armas',
            'Mapas com zonas de plantio de spike',
            'Cenário competitivo com torneios mundiais'
        ],
        plataformas: ['PC'],
        tags: ['Competitivo', 'Habilidades', 'F2P']
    },
    cod: {
        titulo: 'Call of Duty',
        descricao: 'A franquia mais famosa dos FPS de ação. Com campanhas cinematográficas, multiplayer frenético e o gigantesco modo Warzone battle royale, CoD oferece ação intensa para todos os estilos de jogo.',
        caracteristicas: [
            'Modo Warzone battle royale com até 150 jogadores',
            'Multiplayer com killstreaks e loadouts personalizados',
            'Campanhas cinematográficas de tirar o fôlego',
            'Modo Zombies cooperativo',
            'Crossplay entre plataformas'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox'],
        tags: ['Ação', 'Battle Royale', 'Multiplayer']
    },
    overwatch: {
        titulo: 'Overwatch 2',
        descricao: 'O hero shooter da Blizzard que revolucionou o gênero. Escolha entre mais de 35 heróis com habilidades únicas e trabalhe em equipe para dominar os objetivos em partidas 5v5 dinâmicas.',
        caracteristicas: [
            'Mais de 35 heróis divididos em 3 classes',
            'Partidas 5v5 com objetivos variados',
            'Modo PvE com missões cooperativas',
            'Sistema de roles: Tanque, Dano e Suporte',
            'Visual vibrante e estilo artístico único'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox', 'Switch'],
        tags: ['Heróis', 'Equipe', 'F2P']
    },
    apex: {
        titulo: 'Apex Legends',
        descricao: 'O battle royale da Respawn Entertainment que combina tiroteio veloz com lendas que possuem habilidades únicas. A movimentação fluida e o sistema de ping revolucionaram o gênero.',
        caracteristicas: [
            'Esquadrões de 3 jogadores com lendas únicas',
            'Sistema de ping para comunicação sem voz',
            'Movimentação avançada: deslizamentos e saltos',
            'Sistema de respawn de companheiros de equipe',
            'Mapas dinâmicos com eventos em tempo real'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox', 'Switch'],
        tags: ['Battle Royale', 'Lendas', 'F2P']
    },
    r6: {
        titulo: 'Rainbow Six Siege',
        descricao: 'O FPS tático da Ubisoft focado em combate 5v5 com destruição de ambiente. Cada operador possui gadgets únicos e a estratégia é tão importante quanto a precisão de tiro.',
        caracteristicas: [
            'Combate 5v5 com ataque e defesa',
            'Destruição total de paredes e pisos',
            'Mais de 60 operadores com gadgets únicos',
            'Sistema de câmeras e drones de reconhecimento',
            'Mapas com múltiplos pontos de entrada'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox'],
        tags: ['Estratégia', 'Tático', 'Destruição']
    }
};

// ===== NAVEGAÇÃO =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// Menu mobile
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Efeito de scroll na navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    highlightNavLink();
});

// Destacar link ativo na navegação
function highlightNavLink() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const link = document.querySelector(`.nav-menu a[href="#${section.id}"]`);

        if (link && scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// ===== MODAL DE JOGOS =====
const modal = document.getElementById('gameModal');
const modalBody = document.getElementById('modalBody');

function openGameModal(gameId) {
    const game = gamesData[gameId];
    if (!game) return;

    modalBody.innerHTML = `
        <h2>${game.titulo}</h2>
        <p>${game.descricao}</p>
        <h3>Características Principais</h3>
        <ul>
            ${game.caracteristicas.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <h3>Plataformas</h3>
        <p>${game.plataformas.join(' • ')}</p>
        <div class="modal-tags">
            ${game.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGameModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fechar modal ao clicar fora
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeGameModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeGameModal();
    }
});

// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !email || !mensagem) {
        showFormMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFormMessage('Por favor, insira um e-mail válido.', 'error');
        return;
    }

    // Simulação de envio
    showFormMessage(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`, 'success');
    contactForm.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ===== ANIMAÇÃO DE ENTRADA =====
// Revelar elementos ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.game-card, .news-card, .tip-card').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(element);
});

// Classe para elementos visíveis
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .game-card.visible,
        .news-card.visible,
        .tip-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// ===== CONTADOR ANIMADO =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Easing cúbico
        const current = Math.floor(easedProgress * target);

        element.textContent = current.toLocaleString('pt-BR');

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString('pt-BR');
        }
    }

    requestAnimationFrame(update);
}

// Iniciar contadores quando a seção hero for visível
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = document.querySelectorAll('.stat h3');
            const targets = [100, 50, 24];
            stats.forEach((stat, index) => {
                const target = targets[index];
                if (target === 24) {
                    stat.textContent = '24/7';
                } else {
                    animateCounter(stat, target);
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));