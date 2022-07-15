import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormRow, Alert, Logo } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/RegisterPage'

export const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext()

  console.log(user)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values

    if (!email || !password || (!isMember && !name)) return displayAlert()

    const currentUser = { name, email, password }
    if (isMember) {
      setupUser(currentUser, 'login', 'Login Successful. Thou Shalt Enter...')
    } else {
      setupUser(currentUser, 'register', 'Sign up successful! Loading...')
    }
    console.log(values)
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* NAME INPUT */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* EMAIL INPUT */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* PASSWORD INPUT */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {values.isMember ? 'Login' : 'Sign up'}
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
