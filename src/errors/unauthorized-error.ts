import { ApplicationError } from "../protocols"

export function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "Sem acesso a esse recurso",
  };
}

//401
