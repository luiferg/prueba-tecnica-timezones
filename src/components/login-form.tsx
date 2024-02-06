'use client'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { Formik, FormikHelpers, Form, Field } from 'formik'
import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCookies } from 'next-client-cookies'
import { useRouter } from 'next/navigation'
import UseAnimations from 'react-useanimations'
import loading from 'react-useanimations/lib/loading'
import { ErrorResponse, LoginForm } from '@/types'

const LoginForm = () => {
  // Get the session token from the cookies
  const cookies = useCookies()
  const router = useRouter()

  // Create a mutation from react-query
  const mutation = useMutation({
    mutationFn: async (values: LoginForm) => {
      // Send a POST request to the server, check the next.config.mjs file for the proxy
      return axios.post('/api/login', values)
    },
  })
  // Local state to manage the password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  // Local state to manage the error message visibility
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  // Local state to manage the loading state BECAUSE mutation.isLoading seems to be broken for this version of react-query
  const [isLoading, setIsLoading] = useState(false)
  // Local state to manage the error message
  const [errorMessage, setErrorMessage] = useState('')
  // Initial form values, to be honest i'm most get used to React Hook Form
  const initialValues: LoginForm = { email: '', password: '' }
  // Handle the password visibility
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  // Handle the form submission
  const handleSubmit = async (
    values: LoginForm,
    { setSubmitting }: FormikHelpers<LoginForm>
  ) => {
    try {
      setIsLoading(true)
      // Send the mutation
      const data = await mutation.mutateAsync(values)
      // Set the session token in the cookies
      cookies.set('sessionToken', data.data.token)
      setSubmitting(false)
      // Redirect to the test-1 page
      router.push('/test-1')
    } catch (error) {
      setIsLoading(false)
      console.error('Failed to log in', error)
    }
  }

  // Handle the error message visibility
  useEffect(() => {
    if (mutation.error) {
      const axiosError = mutation.error as AxiosError
      const errorData = axiosError.response?.data as ErrorResponse
      setIsMessageVisible(true)
      setErrorMessage(errorData?.error)
    }
  }, [mutation.error])
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className='flex flex-col gap-2 p-4 bg-slate-900 rounded-lg border border-slate-600'>
        <label htmlFor='email'>Email</label>
        <Field
          id='email'
          name='email'
          placeholder='email'
          type='email'
          required
          className='p-2 rounded-lg bg-slate-900 border border-slate-600'
        />
        <label htmlFor='password'>Password</label>
        <div className='relative'>
          <Field
            id='password'
            name='password'
            placeholder='password'
            type={isPasswordVisible ? 'text' : 'password'}
            required
            className='p-2 rounded-lg bg-slate-900 border border-slate-600 w-full'
          />
          <button
            type='button'
            className='absolute top-2 right-2 p-1 bg-slate-900 rounded-full'
            onClick={handlePasswordVisibility}
          >
            {isPasswordVisible ? (
              <Eye className='h-4 w-4 text-slate-200' />
            ) : (
              <EyeOff className='h-4 w-4 text-slate-200' />
            )}
          </button>
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className='p-2 rounded-lg bg-slate-200 text-slate-950 font-bold hover:bg-slate-300 transition-colors flex justify-center duration-300 ease-in-out mt-2'
        >
          {isLoading ? (
            <UseAnimations
              animation={loading}
              size={30}
              className='sefl-center'
            />
          ) : (
            'Login'
          )}
        </button>
        {isMessageVisible && (
          <span className='p-2 text-sm text-red-500 self-center capitalize'>
            {errorMessage}
          </span>
        )}
      </Form>
    </Formik>
  )
}

export default LoginForm
