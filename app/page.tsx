import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Uglogo from '@/components/uglogo';
import { Check } from 'lucide-react';


export default function Home() {
    return(
  <div className="">
    <section>
    <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-24 left-0 -top-10 hidden lg:block'>
                <div className='absolute inset-x-0 bottom-0' />
                {/* <img src='/uglogo.png' className='w-full mt-6 ' /> */}
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-2 font-bold  !leading-tight  text-gray-200 text-5xl md:text-6xl lg:text-7xl'>
                School of  {' '}
                <span className='bg-blue-950 px-2 text-white'>Engineering</span>{' '}
                Sciences                
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              Streamline Your Education Journey - Register and Access Courses Today!,{' '}
                <span className='font-semibold'>Simplify</span> your education journey with our user-friendly platform.
                
              </p>
              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-blue-600' />
                    Seamless Registration: Sign up in minutes and start exploring courses right away.
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-blue-600' />Extensive Course Catalog: Discover a wide range of subjects to meet your academic goals.
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-blue-600' />
                    Flexible Learning: Access course materials and complete assignments at your own pace.
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-blue-600' />
                    Track Your Progress: Monitor your grades and stay on top of deadlines with ease.
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-blue-600' />
                    Mobile-Friendly: Learn on the go with our convenient mobile app (optional, if applicable).
                  </li>
                </div>
              </ul>
            </div>
          </div>

      <Uglogo className='w-90 lg:-ml-5 lg:mt-5' imgSrc='' />
      </MaxWidthWrapper> {/* ReUsable component to use  across the project */}

    </section>
  </div>)
}
