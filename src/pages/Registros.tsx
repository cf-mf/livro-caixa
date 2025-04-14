// pages/Registros.tsx

import { useState } from "react";

export function Registros() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
  
  const abrirModalExcluir = ()=> {
    setModalExcluirVisivel(true);
  };
  
  const fecharModalExcluir = () => {
    setModalExcluirVisivel(false);
  };

  const abrirModal = () => {
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
  };

  const salvarModal = () => {
    alert("Salvo com sucesso!");
    setModalVisivel(false);
  }
  

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
                    <td><button onClick={abrirModal}>Editar</button> | <span onClick={abrirModalExcluir} style={{ cursor: 'pointer' }}>Deletar</span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Recebimento de cliente</td>
                    <td>08/12/2024</td>
                    <td>12:23</td>
                    <td>1500,00</td>
                    <td>Recebido</td>
                    <td><button onClick={abrirModal}>Editar</button> | <span onClick={abrirModalExcluir} style={{ cursor: 'pointer' }}>Deletar</span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pagamento de serviços</td>
                    <td>07/05/2024</td>
                    <td>10:30</td>
                    <td>750,00</td>
                    <td>Pago</td>
                    <td><button onClick={abrirModal}>Editar</button> | <span onClick={abrirModalExcluir} style={{ cursor: 'pointer' }}>Deletar</span></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Recebimento de cliente</td>
                    <td>07/05/2024</td>
                    <td>9:45</td>
                    <td>650,00</td>
                    <td>Recebido</td>
                    <td><button onClick={abrirModal}>Editar</button> | <span onClick={abrirModalExcluir} style={{ cursor: 'pointer' }}>Deletar</span></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Pagamento de impostos</td>
                    <td>06/05/2024</td>
                    <td>15:27</td>
                    <td>1345,23</td>
                    <td>Pago</td>
                    <td><button onClick={abrirModal}>Editar</button> | <span onClick={abrirModalExcluir} style={{ cursor: 'pointer' }}>Deletar</span></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Recebimento de emolumentos</td>
                    <td>06/05/2024</td>
                    <td>12:30</td>
                    <td>850,00</td>
                    <td>Pago</td>
                    <td><button onClick={abrirModal}>Editar</button> | <span onClick={abrirModalExcluir} style={{ cursor: 'pointer' }}>Deletar</span></td>
                </tr>
            </table>
            <div className="resumo-financeiro">
                <div>
                    <h3>Total de pagos</h3>
                    <input type="text" placeholder="Pagos..." />
                </div>
                <div>
                    <h3>Total recebidos</h3>
                    <input type="text" placeholder="Recebidos..." />
                </div>
                <div>
                    <h3>Saldo</h3>
                    <input type="text" placeholder="Saldo..." />
                </div>
                <input type="button" value="Novo lançamento" onClick={abrirModal} />
            </div>

            {modalExcluirVisivel && (
                <section className="modal">
                    <div className="modalPopUp">
                    <h2>Excluir</h2>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ fontSize: '1.2em', marginTop: '2em' }}>Você tem certeza de excluir esse registro?</p>
                        <form>
                            <div className="d6">
                                <input type="button" value="Sim" onClick={(confirmarExclusao) => { alert('Registro excluído com sucesso!'); setModalExcluirVisivel(false); }} />
                                <input type="button" value="Cancelar" onClick={fecharModalExcluir} />
                            </div>
                        </form>
                        </div>
                    </div>
                    
                </section>
                )}


            {modalVisivel && (
        <section className="modal">
            <div className="modalPopUp">
                <h2>Novo Lançamento</h2>
                <form>
                <div className="d1">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Descrição" />
                </div>
                <div className="dt">
                    <div className="d2">
                    <label htmlFor="">Data</label>
                    <input type="text" placeholder="dd/mm/aaaa" />
                    </div>
                    <div className="d3">
                    <label htmlFor="">Hora</label>
                    <input type="text" placeholder="Hora" />
                    </div>
                </div>
                <div className="vpr">
                    <div className="d4">
                    <label htmlFor="">Valor</label>
                    <input type="text" placeholder="Valor" />
                    </div>
                    <div className="d5">
                    <input type="checkbox" name="" id="pago" />
                    <label htmlFor="pago">Pago</label>
                    <input type="checkbox" name="" id="recebido" />
                    <label htmlFor="recebido">Recebido</label>
                    </div>
                </div>
                <div className="d6">
                    <input type="button" value="Salvar" onClick={salvarModal} />
                    <input type="button" value="Cancelar" onClick={fecharModal} />
                </div>
                </form>
            </div>
        </section>
      )}
    </section>
  );
}