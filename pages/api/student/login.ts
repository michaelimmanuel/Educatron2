
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const email = req.body.email;
    const password = req.body.password;

    const student = await prisma.student.findFirst({
        where: {
            email: email,
        }
    })

    if(student && bcrypt.compareSync(password, student.password)) {
        return res.status(200).json(student)
    } else {
        return res.status(400).json({message: "Invalid email or password"})
    }
    
}
