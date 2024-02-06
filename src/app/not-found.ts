import { redirect } from 'next/navigation'
// Redirect to the login page if page is not found
export default function NotFound() {
  redirect('/login')
}
