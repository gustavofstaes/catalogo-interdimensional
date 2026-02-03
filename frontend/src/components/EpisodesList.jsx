function EpisodesList({ episodios }) {
  if (!episodios || episodios.length === 0) {
    return <li>Sem episódios registrados</li>;
  }

  return (
    <>
      {episodios.map((e, index) => (
        <li key={index}>
          {e.nome} - {e.data_exibicao}
        </li>
      ))}
    </>
  );
}

export default EpisodesList;
