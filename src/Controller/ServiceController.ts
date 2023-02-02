import { ServiceRepository } from "../Model/Service";
class Service {
    constructor(
        public id: string,
        public name: string | null,
        public description: string | null,
        public image: string | null,
        public price: string | null,
        public created_at: string | null,
        public colaborator_fk: string | null
    ) { }
}

export class ProductController {
    constructor(private serviceRepository: ServiceRepository = new ServiceRepository()) { }

    async FindService(field: string, value: string) {
        let userData: Service = await this.serviceRepository.findService(field, value)

        return (userData)
    }
    async GetServices() { }

}

// const a = new ProductController()
// const test = async () => {
//     console.log(await a.FindService('name', 'manutenção preventiva'))
// }

// test()