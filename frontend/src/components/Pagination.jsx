function Pagination({ paginaAtual, totalPaginas, onChange }) {
  return (
    <div style={styles.pagination}>
      <button
        style={styles.button}
        disabled={paginaAtual === 1}
        onClick={() => onChange(paginaAtual - 1)}
      >
        ⬅️ Anterior
      </button>

      <span style={styles.pageInfo}>
        Página {paginaAtual} de {totalPaginas}
      </span>

      <button
        style={styles.button}
        disabled={paginaAtual === totalPaginas}
        onClick={() => onChange(paginaAtual + 1)}
      >
        Próxima ➡️
      </button>
    </div>
  );
}

const styles = {
  pagination: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  pageInfo: {
    fontWeight: "bold",
  },
};

export default Pagination;
