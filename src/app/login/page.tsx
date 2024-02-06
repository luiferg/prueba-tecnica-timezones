import LoginForm from '@/components/login-form'

const LoginPage = () => {
  return (
    <main className='flex min-h-[100dvh] max-w-screen-xl justify-center flex-col gap-2 items-center p-4 mx-auto'>
      <h1 className='text-3xl font-bold'>Login</h1>
      <LoginForm />
    </main>
  )
}

export default LoginPage
