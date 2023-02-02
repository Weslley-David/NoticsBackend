import { supabase } from "./supabase"

export class ClientRepository {
    findClient = async (field: string, content: string) => {
        const { data, error } = await supabase
            .from('product')
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