import blueFolder from './285658_blue_folder_icon.png'
import Image from 'next/image'
import check from './checkmark.png'
import Link from 'next/link'
export default function register() {
  return (
        <main className="  bg-gray-50 flex flex-row h-screen justify-center items-center lg:p-20  ">
          <section className="  gap-12 h-5/6 w-5/6 bg-white flex flex-col lg:basis-1/2 container justify-center items-center">
          <Image src={blueFolder}
          width={32} 
          height={32}
          alt='blue folder logo icon'
          />
            <h1 className=' text-3xl tracking-widest'>Jobly</h1>
            <form className='flex flex-col gap-4 w-4/6 pt-10'>
              <input placeholder='email' className='border-2 p-2 border-blue-200  rounded-md focus:outline-blue-500' type='email' />
              <input placeholder='password' className=' border-2 p-2 border-blue-200 rounded-md focus:outline-blue-500' type='password' />
              <a className=' pt-4 text-sm cursor-pointer hover:text-blue-400'>Forgot Password</a>
              <input className=' text-gray-300 bg-jobly p-2 rounded cursor-pointer' type='submit' value='Sign In' />
            </form>
            <p>Don't have an account? <Link href='/register'>Register</Link> </p>
          </section>
          <section className="hidden lg:flex flex-1 basis-1/2 content-center gap-12 h-5/6  w-5/6 bg-jobly flex-col container justify-center items-center ">
            <ul className='text-white gap-5 flex flex-col text-sm'>
              <li className='flex flex-row '><Image className='mr-6' src={check} width={20} height={24} /><p>Find the <b>best</b> candidate</p></li>
              <li className='flex flex-row '><Image className='mr-6' src={check} width={20} height={24} /><p><b>Filter</b> by experience, skill and education</p></li>              
              <li className='flex flex-row '><Image className='mr-6' src={check} width={20} height={24} /><p><b>Notifications</b> for every applicant</p></li>              
              <li className='flex flex-row '><Image className='mr-6' src={check} width={20} height={24} /><p>Find the <b>best</b> candidate</p></li>         
              <li className='flex flex-row '><Image className='mr-6' src={check} width={20} height={24} /><p><b>Filter</b> by experience, skill and education</p></li> 
              <li className='flex flex-row '><Image className='mr-6' src={check} width={20} height={24} /><p><b>Notifications</b> for every applicant</p></li>    
            </ul>
          </section>
        </main>
  )
}
