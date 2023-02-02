import { supabase } from "./supabase"

export class PurchasedProductRepository {
    findPurchasedProduct = async (field: string, content: string) => {
        const { data, error } = await supabase
            .from('purchased_product')
            .select()
            .eq(field, content)
            .single()
        if (error) {
            console.log(error)
            throw new Error("not fetched")
        }
        return data
    }
}

// let teste = async () => {
//     let a = new PurchasedProductRepository()
//     console.log( await a.getPurchasedProductByField('id', '10124b39-6509-4d3b-a8d3-2be27b7742df'))
// }

// teste()