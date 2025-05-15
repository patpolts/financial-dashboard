import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@libs/env";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user){
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if(session?.user && token?.id) {
                session.user.id = token.id;
            }

            return session;
        },
    },
    secret: env.NEXT_AUTH_SECRET,
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };