
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
    //    generate token 
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // put token in cookies
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict; Secure`);
        return res.status(200).json(student)
    } else {
        return res.status(400).json({message: "Invalid email or password"})
    }
    
}
