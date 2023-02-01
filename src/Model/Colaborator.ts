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

// class UserModel {
//     constructor(
//         public id: string | null,
//         public name: string | null,
//         public register: string | null,
//         public email: string | null,
//         public password: string | null,
//         public phone: string | null,
//         public image: string | null,
//         public birthdate: Date | null,
//         public office: string | null,
//         public created_at: string | null,
//     ){}

// }



// const test_of_fetch = async () => {
//     const data: UserModel[] = await test()
//     console.log()

//     const a = new UserModel(await test())
//     console.log(a.id)
// }   


// test_of_fetch()