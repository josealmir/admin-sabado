import { ViaCepResponse } from "@/models/responses/viacep.response";

export class ViaCepApi {
  
  private static BASE_URL = 'https://viacep.com.br/ws';

  public static async getAddressByCep(cep: string): Promise<ViaCepResponse> {
    const response = await fetch(`${this.BASE_URL}/${cep}/json/`);
    if (!response.ok) {
      throw new Error('Failed to fetch address data');
    }
    return response.json();
  }

}