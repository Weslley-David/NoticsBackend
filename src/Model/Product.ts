import { supabase, getPagination } from "./supabase"

// const getPagination = async (page: number, quantity: number) => {
//         quantity = quantity
//         let start = (page * quantity), final = (page * quantity + quantity - 1)
//         return { start, final }
// }
export class ProductRepository {
    findProduct = async (field: string, value: string) => {
        const { data, error } = await supabase
            .from('product')
            .select()
            .eq(field, value)
            .single()
        if (error) {
            throw new Error("not fetched")
        }
        return data
    }

    listProducts = async (page: number) => {
        const [start, final] = await getPagination(page, 4)

        const { data, error } = await supabase
            .from('product')
            .select()
            //.order("id", { ascending: true })
            .range(start, final)
        if (error) {
            throw new Error("not fetched")
        }
        return data
    }
}

async function teste() {

    let a = new ProductRepository()
    console.log(await a.listProducts(1))
}
teste()



