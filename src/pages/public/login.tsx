import { useNavigate } from 'react-router-dom';




export const LoginPage = () => {

    const navigate = useNavigate();
    const onSubmitLogin = () => {
        navigate("/dashboard");
    }

    return (   
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{maxWidth: '400px', width: '100%'}}>
                <img src="logo_bw_64x64.png" alt="Logo" className="mb-4 mx-auto d-block" style={{width: '64px'}} />

                <h2 className="mb-4 text-center">Login</h2>
                <form onSubmit={onSubmitLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite seu email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="password" placeholder="Digite sua senha" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Entrar</button>
                </form>
                <div className="mt-3 text-center">
                    <a href="#">Esqueceu a senha?</a>
                </div>
            </div>
        </div>
    );
} 
