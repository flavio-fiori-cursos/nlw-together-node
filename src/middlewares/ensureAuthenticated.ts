import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;

    if(!authToken) {

        return response.status(401).end();

    }

    const [,token] = authToken.split(' ');

    try {
        
        const { sub } = verify(token, "ce9f68c304c31c8f109c7dc00871936b") as IPayload;

        request.user_id = sub;

        return next(); 

    } catch (error) {
        
        return response.status(401).end();

    }

    
};