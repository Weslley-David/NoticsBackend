import { ProductRepository } from "../Model/Product";
export class Product {
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
    async GetProducts(page: number) { 
        let products: Product[] = await this.productRepository.listProducts(page)
        return products

    }

}

// const a = new ProductController()
// const test = async () => {
//     console.log(await a.GetProducts(1))
// }

// test()