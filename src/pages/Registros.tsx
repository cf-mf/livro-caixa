// pages/Registros.tsx

export function Registros(){
    return(
        <section className="tbl-registros">
            <table className="table-registros">
                <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Ações</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Compra de material de escritório</td>
                    <td>08/12/2024</td>
                    <td>14:00</td>
                    <td>200,00</td>
                    <td>Pago</td>
                    <td>Editar | Deletar</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Recebimento de cliente</td>
                    <td>08/12/2024</td>
                    <td>14:00</td>
                    <td>200,00</td>
                    <td>Pago</td>
                    <td>Editar | Deletar</td>
                </tr>
            </table>
            <div className="resumo-financeiro">
                <div>
                    <h3>Total de pagos</h3>
                    <input type="text" placeholder="pagos" />
                </div>
                <div>
                    <h3>Total recebidos</h3>
                    <input type="text" placeholder="recebidos" />
                </div>
                <div>
                    <h3>Saldo</h3>
                    <input type="text" placeholder="saldo" />
                </div>
                <input type="button" value="Novo lançamento" />
            </div>
        </section>
    )
}