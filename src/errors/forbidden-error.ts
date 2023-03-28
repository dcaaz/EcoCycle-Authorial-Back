import { ApplicationError } from "../protocols"

export function Forbidden(): ApplicationError {
  return {
    name: "Forbidden",
    message: "Você não tem permissão para acessar",
  };
}

//403
