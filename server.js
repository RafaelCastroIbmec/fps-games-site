const express = require('express');
const cors = require('cors');
const path = require('path');
const { jogos, noticias, dicas, estatisticas } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ===== LOG DE REQUISIÇÕES =====
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// ===== ROTAS DA API =====

// Rota raiz - serve o site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString(), servico: 'FPS Online API' });
});

// Estatísticas gerais
app.get('/api/estatisticas', (req, res) => {
    res.json(estatisticas);
});

// ===== ROTAS DE JOGOS =====

// Listar todos os jogos (resumo)
app.get('/api/jogos', (req, res) => {
    const resumoJogos = jogos.map(({ id, titulo, resumo, badge, cor, meta }) => ({
        id, titulo, resumo, badge, cor, meta
    }));
    res.json(resumoJogos);
});

// Detalhes de um jogo específico
app.get('/api/jogos/:id', (req, res) => {
    const jogo = jogos.find(j => j.id === req.params.id);
    if (!jogo) {
        return res.status(404).json({ erro: 'Jogo não encontrado' });
    }
    res.json(jogo);
});

// Filtrar jogos por tag
app.get('/api/jogos/categoria/:tag', (req, res) => {
    const tag = req.params.tag.toLowerCase();
    const jogosFiltrados = jogos.filter(j =>
        j.tags.some(t => t.toLowerCase() === tag)
    );
    res.json(jogosFiltrados);
});

// ===== ROTAS DE NOTÍCIAS =====

// Listar todas as notícias
app.get('/api/noticias', (req, res) => {
    res.json(noticias);
});

// Notícia específica
app.get('/api/noticias/:id', (req, res) => {
    const noticia = noticias.find(n => n.id === parseInt(req.params.id));
    if (!noticia) {
        return res.status(404).json({ erro: 'Notícia não encontrada' });
    }
    res.json(noticia);
});

// ===== ROTAS DE DICAS =====

// Listar todas as dicas
app.get('/api/dicas', (req, res) => {
    res.json(dicas);
});

// Dica específica
app.get('/api/dicas/:id', (req, res) => {
    const dica = dicas.find(d => d.id === parseInt(req.params.id));
    if (!dica) {
        return res.status(404).json({ erro: 'Dica não encontrada' });
    }
    res.json(dica);
});

// ===== ROTA DE CONTATO =====

// Enviar mensagem de contato
app.post('/api/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Validação
    if (!nome || !email || !mensagem) {
        return res.status(400).json({
            erro: 'Todos os campos são obrigatórios',
            campos: { nome: !!nome, email: !!email, mensagem: !!mensagem }
        });
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ erro: 'E-mail inválido' });
    }

    // Simulação de envio (aqui poderia integrar com nodemailer, banco de dados, etc.)
    const contato = {
        id: Date.now(),
        nome,
        email,
        mensagem,
        recebidoEm: new Date().toISOString()
    };

    console.log('📩 Nova mensagem de contato:', contato);

    res.status(201).json({
        sucesso: true,
        mensagem: `Obrigado, ${nome}! Sua mensagem foi recebida com sucesso.`,
        dados: contato
    });
});

// ===== GESTÃO DE ERROS =====

// Rota 404 para API
app.use('/api', (req, res) => {
    res.status(404).json({ erro: 'Endpoint não encontrado' });
});

// Middleware de erro genérico
app.use((err, req, res, next) => {
    console.error('Erro no servidor:', err);
    res.status(500).json({ erro: 'Erro interno do servidor' });
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
    console.log('===================================');
    console.log('🎮 FPS Online - Servidor rodando!');
    console.log('===================================');
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🔗 API: http://localhost:${PORT}/api/jogos`);
    console.log('===================================');
});