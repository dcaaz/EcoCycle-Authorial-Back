import userRepository from "../repositories/user-repository";
import { conflictError, unauthorizedError, forbidden } from "@/errors";
import { Adress } from "@/protocols";

async function createAdress(adress: Adress, userId: number) {

    const adressUser = userRepository.createAdress(adress, userId);

}

const adressService = {
    createAdress
}

export default adressService;