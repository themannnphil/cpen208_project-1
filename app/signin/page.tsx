'use client'

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import {signIn} from 'next-auth/react';
const FormSchema = z.
  object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .max(5, 'Password must have  5 characters'),
  });
const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: '', 
        password: ''
      },
    });
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
      const signInData = await signIn('credentials',{
        email : values.email,
        password : values.password,
        redirect : false,
      });
      if(signInData?.error){
        console.log(signInData.error)
      } else{
        router.push('/home')

      }
      console.log(signInData)
  }



  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
     
      <div className="z-20 w-full max-w-5xl items-center justify-center   lg:flex">
        
        <div className="rounded-2xl  bg-red w-2/3 max-w-4xl fixed left-0 top-0  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 py-24">
          <p className="text-left  font-bold mb-12">
            CPEN DEPARMENT <span className="font-bold text-2xl font-mono">.SES</span>
          </p>
          
         <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
           <p className="text-3xl font-bold mb-8 mx-10">Welcome Back!  Sign In</p>
            <div className="w-70 flex items-center  mb-8 ">
              <input type="text" id="email" placeholder="Student Email" className="outline-none flex-1 rounded-xl px-8 py-3 text-black" {...register('email')}/>
            </div>
            <div className="w-70 flex items-center  mb-12 ">
              <input type="password" id="password" placeholder="Student Pin" className="outline-none flex-1 rounded-xl px-8 py-3 text-black" {...register('password')}/>
            </div> 
              {/* The link below is to the 404 error */}
              <button type="submit" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black mb-8">
                Sign in
              </button>
              <a href="/api/auth/register" className="text font-semibold text-gray-40  0 inline-block ">
                New User?Register here <span aria-hidden="true">&rarr;</span>
              </a>
            

         </form>
        </div>
        
      </div>
     

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        
      </div>

     
    </main>
  );
}

export default  SignInForm;