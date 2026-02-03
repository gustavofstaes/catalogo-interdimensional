import { useState } from "react";
import EpisodesList from "./EpisodesList";

function CharacterCard({ personagem }) {
  const [showEpisodes, setShowEpisodes] = useState(false);

  return (
    <div style={styles.card}>
        <img
           src={personagem.imagem}
           alt={personagem.nome}
           style={styles.image}
        />

      <h3 style={styles.cardTitle}>{personagem.nome}</h3>

      <p><strong>Status:</strong> {personagem.status}</p>
      <p><strong>Espécie:</strong> {personagem.especie}</p>
      <p><strong>Origem:</strong> {personagem.origem}</p>
      <p><strong>Dimensão:</strong> {personagem.dimensao}</p>

      <button
        style={{ ...styles.button, marginTop: "10px" }}
        onClick={() => setShowEpisodes(!showEpisodes)}
      >
        {showEpisodes ? "⬆️ Ocultar episódios" : "⬇️ Mostrar episódios"}
      </button>

      <div
        style={{
          ...styles.episodesContainer,
          maxHeight: showEpisodes ? "300px" : "0px",
          opacity: showEpisodes ? 1 : 0,
        }}
      >
        <ul style={styles.episodesList}>
          <EpisodesList episodios={personagem.episodios} />
        </ul>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    color: "#333",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    textAlign: "left",
    overflow: "hidden",
  },

  image: {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px",
  },

  cardTitle: {
    marginBottom: "10px",
    color: "#2c5364",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  episodesContainer: {
    transition: "all 0.3s ease",
    overflow: "hidden",
  },
  episodesList: {
    marginTop: "10px",
    paddingLeft: "20px",
    maxHeight: "150px",
    overflowY: "auto",
  },
};

export default CharacterCard;
