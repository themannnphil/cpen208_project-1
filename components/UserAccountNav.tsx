'use client'

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const UserAccountNav = () => {
  return (
    <Button onClick={() => signOut()} variant='destructive' >SignOut
    </Button> //if user is logged in we will offer an option to log out    
  );
}

export default UserAccountNav;
