

import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/db'



export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {
    if(req.method === 'GET') {
        const students = await db.student.findMany()
        return res.status(200).json(students)

    }else {
        return res.status(400).json({message: 'Method not allowed'})
    }
}
