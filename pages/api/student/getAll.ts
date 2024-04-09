
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function GET(req: NextApiRequest,
    res: NextApiResponse) {
    const students = await prisma.student.findMany()

    return res.status(200).json(students)
}
