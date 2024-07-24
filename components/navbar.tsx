import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import UserAccountNav from '@/components/UserAccountNav'

const NavBar = async() => {
    
const session = await getServerSession(authOptions);
    const user = undefined
    const isAdmin = false
    return(
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-slate-600 mb-0">
                <Link href='/' className="flex z-10 font-bold">
                    <span className="text-blue-600 ">SES</span>
                </Link>
                <div className="h-14 items-center space-x-1 py-2 ">
                    {/* I will do a conditoinal chec here basede on login state of users */}
                    {session?.user ? (                       
                       <UserAccountNav />        
                    ) : (
                        <>
                            {/* if user is logged in I will aloow for this to show, A react Fragment that allows for multiple children    */}
                            <Link href='/api/auth/register' className={buttonVariants({
                                    size:'sm', variant : 'ghost', 
                            })}>
                                    Register
                            </Link> {/* //if user is logged in we will offer an option to log out */} 
                            <Link href='/api/auth/signin' className={buttonVariants({
                                    size:'sm', variant : 'ghost', 
                            })}>
                                    Sign In <ArrowRight className="ml-1.5 h-5 w-5"/>
                            </Link>  
                                                      
                        </>)
                }
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
    )

}
export default NavBar