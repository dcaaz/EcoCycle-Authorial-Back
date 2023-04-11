import { Request } from "express";

export type ApplicationError = {
    name: string;
    message: string;
  };
  
export type User = {
    id: number
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
}

export type Adress = {
    userid: number,
    name: string,
    cep: number,
    street: string,
    number: number,
    complement: string,
    reference: string,
    city: string,
    state: string,
    neighborhood: string,
    profile: boolean
}