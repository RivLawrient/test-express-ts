import e, {Response, Request} from "express";

// export type ErrorResponse={
//     error: string
// }
type data = {
    errors: string
}

export const ErrorResponse = (message: string) => {

    const hasil: data = {
        errors: message
    }
    return hasil;
}
export const DataResponses = <T>(message: String,
                                 data: T,
                                 req: Request,
                                 res: Response) => {
    return res.json({
        "status_code": res.statusCode,
        "message": message,
        "data": data,
        "path": req.path
    })
}