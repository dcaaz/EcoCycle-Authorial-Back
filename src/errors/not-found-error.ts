import { ApplicationError } from "../protocols"

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "Recurso solicitado não existe",
  };
}

//404
