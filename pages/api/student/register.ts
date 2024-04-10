
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import {hash} from '../../../lib/hash';


const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const name = req.body.name;
    const email = req.body.email;
    const password = hash(req.body.password);
    const bio = req.body.bio;

    const student = await prisma.student.create({
        data: {
            name: name,
            email: email,
            password: password,
            bio: bio
        }
    })

    return res.status(200).json(student)
    
}
