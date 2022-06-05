import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });
  
  
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex itens-center space-x-2 md:space-x-10">
            <img  
                src="https://rb.gy/ulxxee"
                width={100} 
                height={100} 
            />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerlink">Home</li>
                <li className="headerlink">TV Shows</li>
                <li className="headerlink">Movies</li>
                <li className="headerlink">New & Pupolar</li>
                <li className="headerlink">My List</li>
            </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
          <SearchIcon className="hidden sm:inline w-6 h-6"/>
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className='h-6 w-6'/>
          {/* <Link href="/account"> */}
            <img onClick={logout} src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded'/>
          {/* </Link> */}
        </div>
    </header>
  )
}

export default Header;