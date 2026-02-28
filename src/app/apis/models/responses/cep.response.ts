import type { Location } from "./location.reponse";

export interface Cep {
  zipCode: string
  city: string
  district: string
  state: string
  ibge: string
  provider: number
  location: Location
}


export interface CepPost extends Cep {
  id: string
  createdAt: string
}
