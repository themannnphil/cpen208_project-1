import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from 'zod';

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 200000000) + 100000000;
} 
//I created this function in here and my db too...I have to find out why?



  


  export async function POST(req:Request){ 
    // return NextResponse.json({success:true})
    try{
        const body = await req.json();
        const { email, fname, lname, password} = body;
        // checking if email exist already
        const Existingemail = await db.user.findUnique({
            where: {email : email}
        });
        if (Existingemail) {
            return NextResponse.json({user: null, message : 'User with this mail already exists'}, {status : 409})
        }
        const Hashedpassword = await hash(password, 10);
        
        
       
        const newUser = await db.user.create({
            data:{ 
              fname,
              lname,              
              email, 
              studentId :generateRandomNumber() ,                            
              password : Hashedpassword
            }
        });
        // it is not safe to return password to database
        const{password: newUserpass, ...rest} = newUser
        return NextResponse.json({  message:'User registered sucessfully'}, {status:200});
    }catch(error){
         return NextResponse.json({ message:'Something went wrong'}, {status:200});

    }
}
// When we register its a post request, I will test for post requests when working on these kinds woks
// mpm i bcrypt to hash password