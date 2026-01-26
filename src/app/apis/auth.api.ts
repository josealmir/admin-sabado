import type { ForgotPasswordResponse } from "./models/responses/forgot-password.response";
import  { isValidEmail } from "../shared/valid-string";

export class AuthApi { 

    /**
     * Forgot password API call.
     * 
     * @param {string} email - Email to send forgot password link.
     * @returns {Promise<ForgotPasswordResponse>} - Promise with forgot password response.
     * @throws {ForgotPasswordResponse} - If email is invalid.
     */
    public static forgotPassword(email: string) : Promise<ForgotPasswordResponse> {
        
        if (!isValidEmail(email)) {
            return new Promise((resolve, reject) =>  { setInterval(() => reject(new Error("Email inválido")), 1000); });
        }
        return new Promise (resolve => { setTimeout(() => resolve({ message: "Email enviado com sucesso" } as ForgotPasswordResponse), 1000); });
    }
}

