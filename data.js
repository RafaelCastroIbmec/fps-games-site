// ===== DADOS DOS JOGOS E NOTÍCIAS =====

const jogos = [
    {
        id: 'cs2',
        titulo: 'Counter-Strike 2',
        descricao: 'O sucessor do lendário CS:GO, desenvolvido pela Valve. Combina o clássico gameplay tático 5v5 com a nova engine Source 2, trazendo gráficos aprimorados, física de fumaça revolucionária e mapas reformulados.',
        resumo: 'O clássico dos FPS táticos. Bombas, economia e precisão em cada rodada.',
        caracteristicas: [
            'Modo competitivo 5v5 com sistema de ranking',
            'Economia de armas e equipamentos por rodada',
            'Mapas clássicos reformulados (Dust2, Mirage, Inferno)',
            'Sistema de fumaça dinâmica com a Source 2',
            'Modo Premier com mapas em rotação competitiva'
        ],
        plataformas: ['PC', 'Steam'],
        tags: ['Tático', 'Competitivo', 'F2P'],
        badge: 'Tático',
        cor: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)',
        meta: { gratuitos: 'F2P', avaliacao: 4.9, jogadores: '1.5M+' }
    },
    {
        id: 'valorant',
        titulo: 'Valorant',
        descricao: 'O FPS tático da Riot Games que combina precisão de tiro com habilidades únicas de agentes. Cada agente possui habilidades especiais que podem mudar o rumo da partida, criando um meta estratégico profundo.',
        resumo: 'Precisão de tiro combinada com habilidades únicas de agentes.',
        caracteristicas: [
            'Partidas 5v5 no formato melhor de 25 rodadas',
            'Sistema de agentes com 4 habilidades únicas cada',
            'Economia de créditos para compra de armas',
            'Mapas com zonas de plantio de spike',
            'Cenário competitivo com torneios mundiais'
        ],
        plataformas: ['PC'],
        tags: ['Competitivo', 'Habilidades', 'F2P'],
        badge: 'Competitivo',
        cor: 'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
        meta: { gratuitos: 'F2P', avaliacao: 4.8, jogadores: '900K+' }
    },
    {
        id: 'cod',
        titulo: 'Call of Duty',
        descricao: 'A franquia mais famosa dos FPS de ação. Com campanhas cinematográficas, multiplayer frenético e o gigantesco modo Warzone battle royale, CoD oferece ação intensa para todos os estilos de jogo.',
        resumo: 'Ação frenética, multiplayer intenso e o famoso modo Warzone.',
        caracteristicas: [
            'Modo Warzone battle royale com até 150 jogadores',
            'Multiplayer com killstreaks e loadouts personalizados',
            'Campanhas cinematográficas de tirar o fôlego',
            'Modo Zombies cooperativo',
            'Crossplay entre plataformas'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox'],
        tags: ['Ação', 'Battle Royale', 'Multiplayer'],
        badge: 'Ação',
        cor: 'linear-gradient(135deg, #2d2d2d 0%, #ff6b35 100%)',
        meta: { gratuitos: 'Pago', avaliacao: 4.7, jogadores: '2M+' }
    },
    {
        id: 'overwatch',
        titulo: 'Overwatch 2',
        descricao: 'O hero shooter da Blizzard que revolucionou o gênero. Escolha entre mais de 35 heróis com habilidades únicas e trabalhe em equipe para dominar os objetivos em partidas 5v5 dinâmicas.',
        resumo: 'Combate em equipe com heróis únicos e habilidades especiais.',
        caracteristicas: [
            'Mais de 35 heróis divididos em 3 classes',
            'Partidas 5v5 com objetivos variados',
            'Modo PvE com missões cooperativas',
            'Sistema de roles: Tanque, Dano e Suporte',
            'Visual vibrante e estilo artístico único'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox', 'Switch'],
        tags: ['Heróis', 'Equipe', 'F2P'],
        badge: 'Heróis',
        cor: 'linear-gradient(135deg, #ff9a00 0%, #ffd700 100%)',
        meta: { gratuitos: 'F2P', avaliacao: 4.6, jogadores: '700K+' }
    },
    {
        id: 'apex',
        titulo: 'Apex Legends',
        descricao: 'O battle royale da Respawn Entertainment que combina tiroteio veloz com lendas que possuem habilidades únicas. A movimentação fluida e o sistema de ping revolucionaram o gênero.',
        resumo: 'Battle royale veloz com lendas e movimentação fluida.',
        caracteristicas: [
            'Esquadrões de 3 jogadores com lendas únicas',
            'Sistema de ping para comunicação sem voz',
            'Movimentação avançada: deslizamentos e saltos',
            'Sistema de respawn de companheiros de equipe',
            'Mapas dinâmicos com eventos em tempo real'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox', 'Switch'],
        tags: ['Battle Royale', 'Lendas', 'F2P'],
        badge: 'Battle Royale',
        cor: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
        meta: { gratuitos: 'F2P', avaliacao: 4.8, jogadores: '800K+' }
    },
    {
        id: 'r6',
        titulo: 'Rainbow Six Siege',
        descricao: 'O FPS tático da Ubisoft focado em combate 5v5 com destruição de ambiente. Cada operador possui gadgets únicos e a estratégia é tão importante quanto a precisão de tiro.',
        resumo: 'Combate tático 5v5 com destruição de ambiente e estratégia.',
        caracteristicas: [
            'Combate 5v5 com ataque e defesa',
            'Destruição total de paredes e pisos',
            'Mais de 60 operadores com gadgets únicos',
            'Sistema de câmeras e drones de reconhecimento',
            'Mapas com múltiplos pontos de entrada'
        ],
        plataformas: ['PC', 'PlayStation', 'Xbox'],
        tags: ['Estratégia', 'Tático', 'Destruição'],
        badge: 'Estratégia',
        cor: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
        meta: { gratuitos: 'Pago', avaliacao: 4.7, jogadores: '600K+' }
    }
];

const noticias = [
    {
        id: 1,
        data: '12 Nov 2026',
        titulo: 'CS2 recebe nova atualização com mapa reformulado',
        descricao: 'A Valve anunciou mudanças significativas no mapa Dust2, incluindo novas rotas e melhorias visuais.',
        link: 'https://www.counter-strike.net/news'
    },
    {
        id: 2,
        data: '10 Nov 2026',
        titulo: 'Valorant anuncia novo agente para a próxima temporada',
        descricao: 'A Riot Games revelou teasers do novo agente que promete revolucionar o meta competitivo.',
        link: 'https://playvalorant.com/pt-br/news/'
    },
    {
        id: 3,
        data: '08 Nov 2026',
        titulo: 'Campeonato Mundial de FPS acontece em São Paulo',
        descricao: 'O maior evento de esports do Brasil reunirá os melhores times do mundo em uma semana de disputas.',
        link: 'https://www.esports.com.br'
    }
];

const dicas = [
    {
        id: 1,
        icone: '🎯',
        titulo: 'Mire na Cabeça',
        descricao: 'Treine sua mira no nível da cabeça dos inimigos. Isso reduz o tempo de reação e aumenta seu dano por segundo.'
    },
    {
        id: 2,
        icone: '🎧',
        titulo: 'Use o Áudio',
        descricao: 'Passos, recargas e trocas de arma são audíveis. Use fones de ouvido para detectar inimigos antes que eles te vejam.'
    },
    {
        id: 3,
        icone: '⚙️',
        titulo: 'Ajuste a Sensibilidade',
        descricao: 'Encontre a sensibilidade ideal do mouse. Uma configuração consistente melhora sua precisão em longas distâncias.'
    },
    {
        id: 4,
        icone: '🧠',
        titulo: 'Conheça os Mapas',
        descricao: 'Estude os mapas: rotas, pontos de emboscada e posições de vantagem. Conhecimento do mapa é metade da vitória.'
    },
    {
        id: 5,
        icone: '🤝',
        titulo: 'Comunique-se',
        descricao: 'Informações em tempo real sobre posições inimigas são cruciais. Comunique-se de forma clara e objetiva com seu time.'
    },
    {
        id: 6,
        icone: '🏋️',
        titulo: 'Pratique Diariamente',
        descricao: 'Dedique 30 minutos diários ao treino de mira e reflexos. A consistência supera sessões longas e esporádicas.'
    }
];

const estatisticas = {
    jogosAnalisados: 100,
    jogadoresAtivos: 50,
    cobertura: '24/7'
};

module.exports = { jogos, noticias, dicas, estatisticas };