
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import {hash} from '../../../lib/hash';
import * as z from 'zod'
import { registerData } from '@/validator';

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().
        min(8, {message: "Password must be at least 8 characters long"}),
    bio: z.string()

})


const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const body = await req.body
    const {name, email, password, bio} = schema.parse(body)

    const existed = await prisma.student.findFirst({
        where: {
            email: email
        }
    })

    if(existed) {
        return res.status(400).json({message: "Email already exists"})
    }

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
