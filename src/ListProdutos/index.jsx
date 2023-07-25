import "bootstrap/dist/css/bootstrap.min.css";

export default function ListagemProdutos({ categorias }) {
  return (
    <table className="table table-responsive table-bordered">
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((produto) => {
          return (
            <tr key={produto._id}>
              <td>{produto.name}</td>
              <td>
                <button className="btn btn-primary">Botão</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
