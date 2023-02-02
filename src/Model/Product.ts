import { supabase } from "./supabase"

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
}