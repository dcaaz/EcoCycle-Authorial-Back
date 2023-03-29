import { ApplicationError } from "../protocols"

export function forbidden(): ApplicationError {
  return {
    name: "Forbidden",
    message: "Você não tem permissão para acessar",
  };
}

//403
