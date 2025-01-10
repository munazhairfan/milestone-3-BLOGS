<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-white shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <Image src={'/logo.jpg'} alt='logo' width={100} height={180}></Image>
      <span className="ml-3 text-4xl font-extrabold font-dancing">Whisk & Wonder</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-2xl justify-center font-dancing">
      <Link href={'./'} className="mr-16 hover:text-gray-900">Home</Link>
      <Link href={'/recipes'} className="mr-16 hover:text-gray-900">Recipes</Link>
      <Link href={'/comments'} className="mr-16 hover:text-gray-900">Reviews</Link>
      <Link href={'/about'} className="mr-16 hover:text-gray-900">About</Link>
    </nav>
  </div>
</header>
  )
}

export default Header
=======
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-white shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <Image src={'/logo.jpg'} alt='logo' width={100} height={180}></Image>
      <span className="ml-3 text-4xl font-extrabold font-dancing">Whisk & Wonder</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-2xl justify-center font-dancing">
      <Link href={'./'} className="mr-16 hover:text-gray-900">Home</Link>
      <Link href={'/recipes'} className="mr-16 hover:text-gray-900">Recipes</Link>
      <Link href={'/comments'} className="mr-16 hover:text-gray-900">Reviews</Link>
      <Link href={'/about'} className="mr-16 hover:text-gray-900">About</Link>
    </nav>
  </div>
</header>
  )
}

export default Header

>>>>>>> 6865bc71177856998400ac204b551de6417b1b0a
