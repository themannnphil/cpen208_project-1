'use client'

import { FormEvent } from "react"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';


const FormSchema = z.
object({
  fname: z.string().min(1, 'fname is required'),
  lname: z.string().min(1, 'lname is required'),
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
          fname: '',
          lname: '',
          email: '', 
          password: '',
        },
      });

  

      const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        // console.log(values);
      
        const response = await fetch("/api/auth/user", {
            method: 'POST',
            headers:{
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                fname : values.fname,
                lname : values.lname,
                email : values.email,
                password : values.password
            })
        });
        console.log({response}) 
        if(response.ok){
          console.log("Data has been pushed to apppi")
          router.push('./signin')
        }else{
          console.error('Could Not register')
        }
      };
    
  
    
  

    return (
        //     <form action="" className=" flex flex-col gap-2">
        //     <input type="email" />
        //     <input type="password" className="outline-none flex-1 rounded-xl px-8 py-3 text-black" />
        //     <button type="submit">Register</button>
        // </form>
        <main className="flex min-h-screen flex-col items-center justify-center  lg:mt--10  lg:p-24 text-center">
         
          <div className="z-20 w-full max-w-5xll items-center justify-center  mt-0 lg:flex">
            
            <div className="rounded-2xl  bg-red w-2/3 max-w-4xl fixed left-0 -top-20  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 py-2">
              <p className="text-left  font-bold my-6">
                CPEN DEPARMENT <span className="font-bold text-2xl font-mono">.SES</span>
              </p>
              
             <form   className="grid flex-col items-center"  onSubmit={handleSubmit(onSubmit)} >
               <p className="text-3xl font-bold mb-9 mx-10">Hello there!  Register Here</p>
               <div className=" grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                    <div className=" items-center sm:col-span-3 mb-3 ">
                        <input type="text" id="fname" placeholder="First Name" className="outline-none  rounded-xl px-8 py-3 text-black" {...register('fname')}/>
                        {errors.fname && <p>{errors.fname.message}</p>}
                    </div>
                    <div className=" sm:col-span-3 items-center  mb-3">
                        <input type="text" id="lname" placeholder="Last Name" className="outline-none  rounded-xl px-8 py-3 text-black" {...register('lname')}/>
                        {errors.lname && <p>{errors.lname.message}</p>}
                    </div>
                    <div className=" items-center sm:col-span-3 mb-4">
                    <input type="text"  id="email" {...register('email')} placeholder="Student Email" className="outline-none flex-1 rounded-xl px-8 py-3 text-black"/>
                    {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className=" sm:col-span-3  items-center  mb-4 ">
                    <input type="password" id="pin" maxLength={5} {...register('password')} placeholder="Student Pin" className="outline-none flex-1 rounded-xl px-8 py-3 text-black"/>
                    {errors.password && <p>{errors.password.message}</p>}
                    </div>
                </div>
               
                <button type="submit"   className="border-2 border-white rounded-full px-12 lg:col-span-1 mt-6 py-3 inline-block font-semibold hover:bg-white hover:text-black mb-5">
                 Sign up
                </button>
              </form>
             <div className="flex flex-col items-center">
                <a href="./signin" className="text  font-semibold text-gray-40  0 inline-block ">
                Already Registered?  
                </a>
                {/* <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black mb-8">Sign In</a> */}
             </div>
    
            </div>
            
          </div>
         
    
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            
          </div>
    
         
        </main>
        )
      
};



export default  SignInForm;
// function useForm<T>(arg0: { resolver: any; defaultValues: { email: string; password: string; }; }) {
//   throw new Error("Function not implemented.");
// }
