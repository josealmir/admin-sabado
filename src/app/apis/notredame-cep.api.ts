import type { ErroApi } from "./models/erro.api";
import type { CepCreate } from "./models/requests/cep.request";
import type { Cep, CepPost, PageResponse } from "./models/responses/cep.response";

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
            }).catch((error: ErroApi) => {
                throw error as ErroApi;
             });
    }

    public static getPage(): Promise<PageResponse<Cep>> {
        const query = '?PageNumber=1&PageSize=10';
        return fetch(`${this.baseUrl}${query}`)
            .then(async (response) => {
                if (!response.ok) {
                    throw await response.json(); 
                }
                return await response.json();
            }).then((data) => {
                return this.toPageCep(data);
            }).catch((error: ErroApi) => {
                throw error as ErroApi;
             });
    }

    public static postCep(body: CepCreate): Promise<CepPost> {
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(async (response) => {
            if (!response.ok) {
                throw await response.json(); 
            }
            return await response.json();
        }).catch((error: ErroApi) => {
            throw error as ErroApi;
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

    private static toPageCep(data: any): PageResponse<Cep> {
        return {
            page: data.page,
            data: data.data.map((item: any) => this.toCep(item))
        };
    }

}