import NextAuth from "next-auth"

declare module "next-auth" {
    interface User{
        fname : string,
        lname : string,
        studentId : number
    }
  interface Session {
    user: User & {
        fname : string ,
        lname : string ,
        studentId : number 
    
    }
    token: {
        fname : string,
        lname : string,
        studentId : number
    }
  }
}