import { ColaboratorRepository } from "../Model/Colaborator";
class Colaborator {
    constructor(
        public id: string,
        public name: string | null,
        public register: string | null,
        public email: string | null,
        public password: string | null,
        public phone: string | null,
        public image: string | null,
        public birthdate: string | null,
        public office: string | null,
        public created_at: string | null) { }
}

export class ColaboratorController {
    constructor(private colaboratorRepository: ColaboratorRepository = new ColaboratorRepository()) { }
    async signin(email: string, password: string) {
        let userData: Colaborator = await this.colaboratorRepository.getColaboratorByEmail(email)
        if (userData.password == password) {
            return ({ "signup": true, "id": userData.id, "name": userData.name, "birthdate": userData.birthdate })
        }
        return { "signup": false }
    }
    async signup() {
        
    }
    async updatePassword() {

    }
}

// const a = new ColaboratorController()
// const test = async () => {
//     console.log(await a.signin('new@email.com', 'adminie45'))
// }

// test()