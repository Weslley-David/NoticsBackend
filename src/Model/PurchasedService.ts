import { supabase } from "./supabase"

export class PurchasedServiceRepository {
    findPuchasedService = async (field: string, content: string) => {
        const { data, error } = await supabase
            .from('purchased_service')
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
//     let a = new PurchasedServiceRepository()
//     console.log( await a.getPurchasedServiceByField('id', '186c3f69-5e96-41c6-b5b7-24b5f7c3c1d2'))
// }

// teste()