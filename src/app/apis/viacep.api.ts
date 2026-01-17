import type { ViaCepResponse } from "./models/responses/viacep.response";

export class ViaCepApi {
  
  private static BASE_URL = 'https://viacep.com.br/ws';


  public static getAddressByCep(cep: string): Promise<ViaCepResponse> {
   return fetch(`${this.BASE_URL}/${cep}/json`)
      .then((response) => {response
         return response.json();
      }).then((data) => {
         return this.toViaCepResponse(data);
      })
      .catch((error) => {
         return Promise.reject(error);
      });
  }

  private static toViaCepResponse(data: any): ViaCepResponse {
    return {
      cep: data.cep,
      logradouro: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,
      ibge: data.ibge,
      ddd: data.ddd,
    };
  }
}