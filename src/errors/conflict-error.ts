import { ApplicationError } from "../protocols"

export function conflictError(): ApplicationError {
  return {
    name: "ConflictError",
    message: "Conflito"
  };
}

//409
