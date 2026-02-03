import { useEffect, useState } from "react";
import { buscarPersonagensApi } from "./services/personagensApi";
import CharacterCard from "./components/CharacterCard";
import Pagination from "./components/Pagination";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        setLoading(true);
        setErro(null);

        const data = await buscarPersonagensApi(busca, paginaAtual);

        setPersonagens(data.resultados || []);
        setPaginaAtual(data.pagina_atual);
        setTotalPaginas(data.total_paginas);
      } catch (err) {
        setPersonagens([]);
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [busca, paginaAtual]);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🛸 Catálogo Interdimensional</h1>

      <input
        style={styles.input}
        placeholder="Buscar personagem..."
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
          setPaginaAtual(1);
        }}
      />

      {loading && <p>Carregando...</p>}
      {erro && <p style={styles.error}>{erro}</p>}

      <div style={styles.grid}>
        {personagens.map((p, index) => (
          <CharacterCard key={index} personagem={p} />
        ))}
      </div>

      <Pagination
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        onChange={setPaginaAtual}
      />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    padding: "40px",
    textAlign: "center",
  },
  title: { marginBottom: "20px" },
  input: {
    padding: "12px",
    width: "300px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  error: { color: "#ffb3b3" },
};

export default App;
