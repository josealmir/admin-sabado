import { useCallback, useState, type FormEvent } from "react";
import { AuthApi } from "../../app/apis/auth.api";
import { ApiMessage, type ApiMessageProps } from "../../app/components/api-message";
import { Spinner } from "react-bootstrap";

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>("");
    const [response, setResponse] = useState<ApiMessageProps | null>(null);
    const [pending, setPending] = useState<boolean>(false);

    const onSumitForgotPassword = useCallback(((e: FormEvent<HTMLFormElement>) => {
        setPending(true);
        e.preventDefault();
            AuthApi.forgotPassword(email).
            then((reponse) => {
                setResponse({ message: reponse.message, isSuccess: true });
            }).catch((error:Error) => {
                setResponse({ message: error.message, isSuccess: false });
            }).finally(() => {
                setPending(false);
            });
    }), [email]);

    return (   
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{maxWidth: '400px', width: '100%'}}>
                <img src="logo_bw_64x64.png" alt="Logo" className="mb-4 mx-auto d-block" style={{width: '64px'}} /> 
                <h2 className="mb-4 text-center">Esqueceu a senha?</h2> 
                <form onSubmit={(e) => onSumitForgotPassword(e)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Digite seu email" required />
                        <ApiMessage message={response?.message} isSuccess={response?.isSuccess} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100"> {pending ? <span> <Spinner animation="border" size="sm" /> Enviando link de recuperação </span> : "Enviar link de recuperação"} </button>
                </form>
                <div className="mt-3 text-center">
                    <a href="/login">Voltar ao login</a>
                </div>
            </div>
        </div>
    );
}