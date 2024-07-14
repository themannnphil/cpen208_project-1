import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface UGlogoprops extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Uglogo = ({ imgSrc, className, dark = false, ...props }: UGlogoprops) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={
          dark
            ? '/uglogo.png'
            : '/uglogo.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='University Of Ghana image'
      />

      
      
    </div>
  )
}

export default Uglogo