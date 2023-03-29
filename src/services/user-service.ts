import userRepository from "../repositories/user-repository";
import { conflictError, unauthorizedError } from "../errors";
import bcrypt from "bcrypt";

async function createUser(email: string, password: string) {
    const userExist = await userRepository.findeUser(email);

    if (userExist != null) {
        throw conflictError();
    }

    const hashedPassword = await bcrypt.hash(password, 12); //DO

    const createNewUser = await userRepository.createUser(email, password);

    return createNewUser;
}

async function createSession(email: string, password: string) {
    const userExist = await userRepository.findeUser(email);

    if(!userExist){
        throw unauthorizedError();
    }

    const validePassword = await 


}

const userService = {
    createUser,
    createSession
}

export default userService;