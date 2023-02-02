import { supabase } from "./supabase"

export class ColaboratorRepository {
    getColaboratorByEmail = async (email: string) => {
        const { data, error } = await supabase
            .from('colaborator')
            .select()
            .eq('email', email)
            .single()
        if (error) {
            throw new Error("not fetched")
        }
        return data
    }
}