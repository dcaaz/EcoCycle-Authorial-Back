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