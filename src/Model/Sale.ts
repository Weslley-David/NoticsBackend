import { supabase } from "./supabase"

export class SaleRepository {
    findSale = async (field: string, content: string) => {
        const { data, error } = await supabase
            .from('sale')
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
//     let a = new SaleRepository()
//     console.log( await a.findSale('id', '1ff024e0-f476-4d44-a7bd-2f20c791fbbd'))
// }

// teste()