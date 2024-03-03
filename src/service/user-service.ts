import {PrismaClient} from "@prisma/client";
import {Express} from "express";
import {RegisterRequest, RegisterResponse} from "../model/user-model";
import {randomUUID} from "node:crypto";

const prisma = new PrismaClient();

export const UserServices = (app: Express) => {
    async function register(req: RegisterRequest): Promise<RegisterResponse> {
        const findByNumber = await prisma.user.count({
            where: {
                number: req.number
            }
        })

        if (findByNumber != 0) {
            app.response.status(500);
            throw new Error("number already used");
        }

        const data = await prisma.user.create({
            data: {
                id: randomUUID().toString(),
                name: req.name,
                number: req.number
            }
        })

        const response: RegisterResponse = {
            id: data.id,
            name: data.name,
            number: data.number,
            createdAt: new Date(Date.now()).toLocaleString()
        };

        app.response.status(200)
        return response;
    }

    return {
        register
    }
}