import {Express, Response, Request} from "express";
import {UserServices} from "../service/user-service";
import {RegisterRequest, RegisterResponse} from "../model/user-model";
import {DataResponses, ErrorResponse} from "../model/response-model";
import bodyParser from 'body-parser';

const userService = UserServices;
export const UserRoutes = (app: Express) => {
    app.use(bodyParser.json())
    app.post("/user/register", async (req: Request, res: Response) => {
        const body = req.body as RegisterRequest;
        try {
            const register = await userService(app).register(body);
            DataResponses("success register", register, req, res);
        } catch (e: any) {
            DataResponses("failed register", ErrorResponse(e.message), req, res);
        }
    })
}