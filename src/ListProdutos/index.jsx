import "bootstrap/dist/css/bootstrap.min.css";

export default function ListagemProdutos({ categorias }) {
  async function patchCategoria(categoryName) {
    try {
      const response = await fetch(`http://localhost:8080/api/categories/${categoryName}/vote`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      var textResult = await response.text();
      if (!response.ok) throw Error(textResult);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }
  
  // Ordenar a array de categorias com base no número de votos (decrescente)
  categorias.sort((a, b) => b.votes - a.votes);

  return (
    <table className="table table-responsive table-bordered" style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
      <tbody>
        {categorias.map((produto) => {
          return (
            <tr key={produto._id} style={{ backgroundColor: "white" }}>
              <td style={{ display: "flex", alignItems: "center", backgroundColor: "#17202A", border: "3px solid white" }}>
                <span style={{ flexBasis: "70%" }}>
                  <span style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>{produto.name}</span>
                </span>
                <span style={{ flexBasis: "70px", fontWeight: "bold", fontSize: "20px", color: "white" }}>{produto.votes}</span>
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: "10px", backgroundColor: "white", color: "#17202A", fontWeight: "bold", borderColor: "#17202A", marginLeft: "10px" }}
                  onClick={() => patchCategoria(produto.name)}
                >
                  Votar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
