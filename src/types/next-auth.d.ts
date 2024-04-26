import 'next-auth'
import { DefaultSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';

declare module 'next-auth'{
    interface User{
        _id?: string;
        isVerified?: boolean;
        username?: string
    }
    interface Session{
        user:{
            _id?: string;
            isVerified?: boolean;
            username?: string
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt'{
    interface JWT {
        _id?: string;
        isVerified?: boolean;
        username?: string
    }
}

