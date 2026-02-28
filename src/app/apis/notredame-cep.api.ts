import type { ErroApi } from "./models/erro.api";
import type { CepCreate } from "./models/requests/cep.request";
import type { Cep, CepPost } from "./models/responses/cep.response";

export class NotredameCepApi {
    
    private static baseUrl = 'https://notredame-api.onrender.com/api/v1/ceps/';

    public static getCep(cep: string): Promise<Cep> {
        return fetch(`${this.baseUrl}${cep}`)
            .then(async (response) => {
                if (!response.ok) {
                    throw await response.json(); 
                }
                return await response.json();
            }).then((data) => {
                return this.toCep(data);
            }).catch((error) => {
                throw error;
             });
    }

    public static postCep(body: CepCreate): Promise<CepPost> {
        return new Promise<CepPost>(resolve =>{
            resolve({
                id: "1",
                createdAt: new Date().toISOString(),
                zipCode: body.zipCode,
                city: "Cidade Exemplo",
                district: "Bairro Exemplo",
                state: "EX",
                ibge: "1234567",
                provider: 1,
                location: { lat: 0, lon: 0 }
            } as CepPost);
        });
    }

    public static deleteCep(id: string): Promise<void> {
        return new Promise<void>(resolve => {
            resolve();
        });
    }

    private static toCep(data: any): Cep {
        return {
          zipCode: data.zipCode,
          city: data.city,
          district: data.district,
          state: data.state,
          ibge: data.ibge,
          provider: data.provider,
          location: data.location
        };
      }

}