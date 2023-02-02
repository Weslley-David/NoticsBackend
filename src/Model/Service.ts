import { supabase } from "./supabase"

export class ServiceRepository {
    findService = async (field: string, value: string) => {
        const { data, error } = await supabase
            .from('service')
            .select()
            .eq(field, value)
            .single()
        if (error) {
            throw new Error("not fetched")
        }
        return data
    }
}