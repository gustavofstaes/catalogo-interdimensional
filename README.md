# 🛸 Catálogo Interdimensional

Projeto web que consome uma API de personagens e exibe um catálogo interativo, permitindo busca por nome, paginação, visualização de episódios e imagens dos personagens.

O objetivo do projeto é praticar conceitos de **React**, **consumo de API REST**, **componentização**, **estado**, **efeitos colaterais** e **organização de código frontend**.

---

## 🚀 Funcionalidades

- 🔍 Busca de personagens por nome
- 📄 Paginação de resultados
- 🧬 Exibição de informações detalhadas do personagem
- 🎬 Lista de episódios em que o personagem aparece
- ⬇️ Abrir e fechar episódios sem prejudicar a experiência visual
- 🖼️ Imagens dos personagens carregadas via API
- ⏳ Feedback visual de carregamento
- ❌ Tratamento de erros (nenhum personagem encontrado)

---

## 🧰 Tecnologias Utilizadas

### Frontend
- React
- Vite
- JavaScript (ES6+)
- CSS (inline styles / modularização por componentes)
- Fetch API

### Backend
- API REST (Node / outro backend local)
- Consumo via `http://localhost:8000/api/personagens`

---

## 📂 Estrutura do Projeto

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterList.jsx
│   │   ├── EpisodesList.jsx
│   │   ├── Pagination.jsx
│   │   └── SearchInput.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── styles.js
│   ├── App.jsx
│   └── main.jsx
└── index.html
