import { supabase } from "./supabase"

export class ProductRepository {
    getPagination(page: number, quantity: number) {
        quantity = quantity
        let start = (page * quantity), final = (page * quantity + quantity - 1)
        return { start, final }
    }
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
        const { start, final } = this.getPagination(page, 3);
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
    // console.log(a.getPagination(0, 3))
    // console.log(a.getPagination(1, 3))
    // console.log(a.getPagination(2, 3))
    console.log(await a.listProducts(2))
}
teste()



