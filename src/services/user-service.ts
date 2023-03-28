import userRepository from "../repositories/user.repository";

async function createUser(email: string, password: string) {
    try {
        const userExist = await userRepository.findeUser(email);

        if (userExist != null) {
            throw new Error("Usuário existente");
        }

        const createNewUser = await userRepository.createUser(email, password);

        return createNewUser;

    } catch (error) {
        console.log("createUserService", error);
        return error;
    }
}

const userService = {
    createUser
}

export default userService;