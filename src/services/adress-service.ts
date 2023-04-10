import { conflictError, unauthorizedError, forbidden } from "@/errors";
import { Adress } from "@/protocols";
import adressRepository from "@/repositories/adress-repository";

async function createAdress(adress: Adress, userid: number) {

    const adressUser = await adressRepository.createAdress(adress, userid);

}

async function findUserAdress(userid: number) {

    const existAdress = await adressRepository.findAdress(userid);

    if (existAdress != null) {
       return false;
    }

    return true;
}

async function findAllAdress() {
    const allAdress = await adressRepository.findAllCeps();

    console.log("allAdres", allAdress);

    return allAdress;
}

const adressService = {
    createAdress,
    findUserAdress,
    findAllAdress
}

export default adressService;