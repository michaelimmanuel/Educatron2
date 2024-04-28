
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import {hash} from '../../../lib/hash';
import * as z from 'zod'

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().
        min(6, {message: "Password must be at least 8 characters long"}),
    bio: z.string()

})


const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const body = await req.body
    const {name, email, password, bio} = schema.parse(body)

    const student = await prisma.student.create({
        data: {
            name: name,
            email: email,
            password: hash(password),
            bio: bio
        }
    })

    return res.status(200).json(student)
    
}
