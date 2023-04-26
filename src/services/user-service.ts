import userRepository from "../repositories/user-repository";
import { conflictError, unauthorizedError, forbidden } from "../errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(email: string, password: string) {
    const userExist = await userRepository.findeUserByEmail(email);

    if (userExist != null) {
        throw conflictError();
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createNewUser = await userRepository.createUser(email, hashedPassword);

    return createNewUser;
}

async function createSession(email: string, password: string) {
    const user = await userRepository.findeUserByEmail(email);

    if (!user) {
        throw forbidden();
    }

    const validePassword = await bcrypt.compare(password, user.password);

    if (validePassword != true) {
        throw unauthorizedError();
    }

    const userId = user.id

    const userToken = jwt.sign({ userId }, process.env.JWT_SECRET);

    const { token } = await userRepository.createSessionUser(userId, userToken);

    return ({token, userId});
}

const userService = {
    createUser,
    createSession
}

export default userService;