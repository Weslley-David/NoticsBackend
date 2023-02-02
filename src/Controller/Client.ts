import { ClientRepository } from "../Model/Client";
class Client {
    constructor(
        public id: string,
        public name: string | null,
        public address: string | null,
        public register: string | null,
        public general_record: string | null,
        public email: string | null,
        public phone: string | null,
        public image: string | null,
        public birthdate: string | null,
        public occupation: string | null,
        public created_at: string | null,
        public colaborator_fk: string | null) { }
}

export class ClientController {
    constructor(private clientRepository: ClientRepository = new ClientRepository()) { }

    async FindClient(field: string, value: string) {
        let userData: Client = await this.clientRepository.findClient(field, value)
    
        return (userData)
    }
    async CreateClient() {

    }

    async DeleteClient() {

    }
    async UpdateClient() {

    }
    
}

// const a = new ClientController()
// const test = async () => {
//     console.log(await a.FindClient('email','Email Fake 4'))
// }

// test()