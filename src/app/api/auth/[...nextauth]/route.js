import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptons = {
    secret: process.env.NEXT_AUTH_PUBLIC_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text', required: true, placeholder: 'Your Email' },
                password: { label: 'Password', type: 'password', required: true, placeholder: 'Enter Password' }
            },

            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                if (credentials.email) {
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({ email: credentials.email })
                    if (currentUser && currentUser.password === credentials.password) {

                        return currentUser;
                    }
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user.type = token.type
            return session
        }
    }

}
const handler = NextAuth(authOptons)
const users = [
    {
        id: 1,
        name: 'mihad',
        email: 'm@gmail.com',
        type: 'admin',
        password: 'password',
        image: 'image'
    },
    {
        id: 2,
        name: 'zihad',
        email: 'z@gmail.com',
        type: 'moderator',
        password: 'password',
        image: 'image'
    },
]

export { handler as GET, handler as POST }