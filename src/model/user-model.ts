export type RegisterRequest = {
    name: string;
    number: number;
}

export type RegisterResponse = {
    id: string;
    name: string;
    number: number | null;
    createdAt: string;
}