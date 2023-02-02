import { ProductRepository } from "../Model/Product";
class Product {
    constructor(
        public id: string,
        public name: string | null,
        public description: string | null,
        public quantity: string | null,
        public image: string | null,
        public price: string | null,
        public created_at: string | null,
        public colaborator_fk: string | null
    ) { }
}

export class ProductController {
    constructor(private productRepository: ProductRepository = new ProductRepository()) { }

    async FindProduct(field: string, value: string) {
        let userData: Product = await this.productRepository.findProduct(field, value)

        return (userData)
    }
    async GetProducts() { }

}

// const a = new ProductController()
// const test = async () => {
//     console.log(await a.FindProduct('name', 'placa mãe Asus TX500'))
// }

// test()