// pages/Login.tsx

export function Login(){
    return(
        <section className="page">
            <div className="card">
                <div className="card-login">
                    <h2 id="login-title" className="page-title">Login</h2>  
                     
                    <form action="">
                    <h3>E-mail</h3>
                    <input type="text" />
                    <h3>Senha</h3>
                    <input type="text" />
                    <br /><br />
                    <input id="btn-enviar-login" type="button" value="Enviar" />
                    </form>
                </div>
            </div>
        </section>
    );
}