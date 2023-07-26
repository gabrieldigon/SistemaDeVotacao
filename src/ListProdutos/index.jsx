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
  

  return (
    <table className="table table-responsive table-bordered" style={{ borderSpacing: "15px", borderCollapse: "separate" }}>
      <tbody>
        {categorias.map((produto) => {
          return (
            <tr key={produto._id} style={{ backgroundColor: "white" }}>
              <td style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#17202A", border: "3px solid white"}}>
                <span style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>{produto.name}</span>
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: "10px", backgroundColor: "white", color: "#17202A", fontWeight: "bold", borderColor: "#17202A" }}
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
