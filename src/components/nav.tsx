'use client'
import { Github } from 'lucide-react'
import { useCookies } from 'next-client-cookies'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  // Get the session token from the cookies
  const cookies = useCookies()
  const router = useRouter()
  const handleLogout = () => {
    try {
      // Remove the session token from the cookies
      cookies.remove('sessionToken')
      // Redirect to the login page
      router.push('/login')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }
  return (
    <div className='w-full flex justify-center mx-auto'>
      <nav className='max-w-screen-xl w-full py-4'>
        <ul className='flex flex-row gap-6 justify-end items-center'>
          <li>
            <a
              href='https://github.com/luiferg/prueba-tecnica-timezones'
              aria-label='Github repository'
              target='_blank'
            >
              <Github />
            </a>
          </li>

          <li>
            <button
              aria-label='Logout'
              className='bg-red-500 p-2 rounded-lg text-slate-200'
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
