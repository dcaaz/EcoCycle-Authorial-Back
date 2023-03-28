import { ApplicationError } from "../protocols"

export function unprocessableEntity(): ApplicationError {
  return {
    name: "unprocessableEntitr",
    message: "Requisição enviada no formato incorreto",
  };
}

//422
