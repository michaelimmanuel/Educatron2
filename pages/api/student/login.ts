
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import * as z from 'zod'


const prisma = new PrismaClient();

const schema = z.object({
    email: z.string().email(),
    password: z.string().
        min(8, {message: "Password must be at least 8 characters long"}),
})

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const {email, password} = schema.parse(req.body)

    const student = await prisma.student.findFirst({
        where: {
            email: email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true
        }
    })

    if(!student) {
        return res.status(400).json({message: "Invalid email or password"})
    }

    if(student && bcrypt.compareSync(password, student.password)) {
        const {password, ...rest} = student
        return res.status(200).json(rest)
    } else {
        return res.status(400).json({message: "Invalid email or password"})
    }
    
}
