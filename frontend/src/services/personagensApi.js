export async function buscarPersonagensApi(nomeBusca, pagina) {
  const response = await fetch(
    `http://localhost:8000/api/personagens?name=${nomeBusca}&page=${pagina}`
  );

  if (!response.ok) {
    throw new Error("Nenhum personagem encontrado");
  }

  return response.json();
}
