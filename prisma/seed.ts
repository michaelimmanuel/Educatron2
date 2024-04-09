const { PrismaClient } = require('@prisma/client');
import {hash} from "../lib/hash";



const prisma = new PrismaClient();

const main = async () => {
    try {
        const user = await prisma.student.create({
            data: {
                name: "John",
                email: "john@example.com",
                password: hash("password"),
                bio: "hello world"
            }
        });
        console.log("student created:", user);
    } catch (error) {
        console.error("Error creating user:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

main();

export {};
