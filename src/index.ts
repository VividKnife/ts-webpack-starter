import { Context } from 'aws-lambda';

interface Request {
    name: string;
}

interface Response {
    id: string;
    name: string;
}

export const handler = async (request: Request, context: Context | undefined): Promise< Response> =>
    ({
        id: 'UUID',
        name: request.name
    });
