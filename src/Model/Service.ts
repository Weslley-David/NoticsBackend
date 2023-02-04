import { supabase, getPagination } from "./supabase"

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

    listServices = async (page: number) => {
        const [start, final] = await getPagination(page, 4)//4 é o número de elementos

        const { data, error } = await supabase
            .from('service')
            .select()
            //.order("id", { ascending: true })
            .range(start, final)
        if (error) {
            throw new Error("not fetched")
        }
        return data
    }
}

// async function teste() {

//     let a = new ServiceRepository()
//     console.log(await a.listServices(0))
// }
// teste()
