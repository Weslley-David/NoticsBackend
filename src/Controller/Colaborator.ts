import { ColaboratorRepository } from "../Model/Colaborator";
class Colaborator{
    constructor(public id: string | null){}
}

export class ColaboratorController {
    constructor(private colaboratorRepository: ColaboratorRepository = new ColaboratorRepository()) { }

    async getColaboratorsByEmail(email: string) {
        let userData: Colaborator = await this.colaboratorRepository.getColaboratorByEmail(email)
        if(userData.id == '69083a71-03a4-41d8-8209-0f08c00bdb1f'){
            return(userData)
        }
        return {error: 'old'}
        
    }
    async signin() {
        
    }
    async signup() {
        
    }
    async updatePassword(){

    }
}

const a = new ColaboratorController()
const test = async () => {
    console.log( await a.getColaboratorsByEmail('fake email2'))
}

test()