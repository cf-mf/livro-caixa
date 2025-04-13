// components/NovoLancamento.tsx

export function NovoLancamento(){
    return(
        <section>
            <h2>Novo Lançamento</h2>
            <form action="">
                <label htmlFor="">Descrição</label>
                <input type="text" placeholder="Descrição" />
                <label htmlFor="">Data</label>
                <input type="text" placeholder="dd/mm/aaaa" />
                <label htmlFor="">Hora</label>
                <input type="text" placeholder="Hora" />
                
                <label htmlFor="">Valor</label>
            </form>
        </section>
    )
}