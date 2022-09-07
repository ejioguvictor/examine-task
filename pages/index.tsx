import type { NextPage } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <>
    <Navbar />
    <div className='px-8'>
      <main className='flex py-60 min-h-100% flex-col justify-center contents-center'>
        <h1 className='m-0 leading-5 text-6xl flex justify-center gap-2'>
          Welcome to {" "}
          <span className='text-[#562E69]'>
          EXAMINE 
          </span>
        </h1>
        <p className='my-16 text-lg leading-6 flex justify-center'>
          Kindly navigate to the login and signup pages by clicking the buttons above ...
        </p>
      </main>
    </div>
    </>
  )
}

export default Home


