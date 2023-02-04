import { createClient } from '@supabase/supabase-js'
require('dotenv').config()
export const supabase = createClient(
    `${process.env.DOMAIN}`,
    `${process.env.SECRET_KEY}`)

export const getPagination = async (page: number, quantity: number) => {
    let start = (page * quantity), final = (page * quantity + quantity - 1)
    return [ start, final ]
}

