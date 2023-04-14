import { conflictError, unauthorizedError, forbidden, notFoundError } from "@/errors";
import { Adress } from "@/protocols";
import adressRepository from "@/repositories/adress-repository";

async function createAdress(adress: Adress, userid: number) {
    console.log("entrei na function createAdress")
    const adressUser = await adressRepository.createAdress(adress, userid);
    console.log("AdressUser", adressUser);
    return adressUser
}

async function findUserAdress(userid: number) {

    const existAdress = await adressRepository.findAdress(userid);

    if (existAdress != null) {
       return false;
    }

    return true;
}

async function findAllAdress(userid: number) {
    const user = await adressRepository.findAdress(userid);
    
    const users = await adressRepository.findAllCeps();

    if(!user || !users){
        throw notFoundError();
    }

    return ({User: user, Users: users});
}

const adressService = {
    createAdress,
    findUserAdress,
    findAllAdress
}

export default adressService;