// pages/Login.tsx

export function Login(){
    return(
        <section className="page">
            <div className="card">
                <div className="card-login">
                    <h2 id="login-title" className="page-title">Login</h2>
                    <form action="">
                        <h3>E-mail</h3>
                        <input type="text" placeholder="Insira seu e-mail..." />
                        <h3>Senha</h3>
                        <input type="text" placeholder="Insira sua senha..." />
                        <br /><br />
                        <button id="btn-enviar-login">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}