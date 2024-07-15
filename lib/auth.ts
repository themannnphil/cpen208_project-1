import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret : process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages:{
        signIn:'/signin'

    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Student email", type: "text", placeholder: "cpen@sesmail.com" },
            password: { label: "Pin", type: "password" }
          },
          async authorize(credentials ) {
            if (!credentials?.email || !credentials?.password){
                return null;
            }
            const  existingUser = await db.user.findUnique({
                where: { email : credentials?.email}
            });
            if(!existingUser){
                return null;
            }
            const passwordMatch = await compare(credentials.password, `${existingUser.password}`);//if i get an error then it's from the exixting.pass
            if(!passwordMatch){
                return null;
            }
            return{
                studentId : existingUser.studentId,
                fname : existingUser.fname,
                lname : existingUser.lname,
                email : existingUser.email,
                id : existingUser.id + '',
            }
          }
        })
    ],
    callbacks: {
       async jwt({token, user}){
        if (user){
            return {
                ...token,
                fname: user.fname,
                lname: user.lname,
                studentId: user.studentId
            }
        } 
        return token
       },
       async session ({token, user, session}){
        return{
            ...session,
            user:{
                ...session.user,
                fname: token.fname,
                lname: token.lname,
                studentId: token.studentId
            }
        }
       }
    }
 
}
// npm i @next-auth/prisma-adapter