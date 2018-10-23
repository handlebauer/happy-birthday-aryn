import React, { Component, createRef } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import './Login.scss'
import balloons from './balloons.gif'

class Login extends Component {
  username = React.createRef()
  password = React.createRef()

  state = {
    username: '',
    password: '',
    error: false,
  }

  handleSubmit = async event => {
    event.preventDefault()
    const url = 'https://api.donaldgeddes.ca/v1/space-date/login'
    const { username, password } = this.state
    const { so } = await axios.post(url, { username: username.toLowerCase(), password: password.toLowerCase()  })
      .then(({ data }) => data)
      .catch(console.error())
    console.log(so)
    if (so === 'ok') {
      this.props.history.push('/it-is-your-birthday')
    } else {
      this.setState({ error: 'nope; try again' })
      this.username.current.value = ''
      this.password.current.value = ''
      this.username.current.focus()
    }
  }

  handleChange = ({ target }) => this.setState(
    ({ error }) => ({
      [target.name]: target.value,
      error: error && ''
    }))

  render() {
    const { username, password, error } = this.state
    const submitClassnames = classnames(
      'login-form__submit',
      { 'login-form__submit--active': username && password }
    )
    return (
      <section className='login'>
        <div className='happy'>
          <img
            alt='hi'
            className='birthday__gif'
            src={balloons}
          />
        </div>
        <form
          className='login-form'
          onSubmit={this.handleSubmit}
        >
          <aside className='login-form__error'>
            {error}
          </aside>
          <input
            ref={this.username}
            className='login-form__input login-form__input--username'
            onChange={this.handleChange}
            placeholder='Your (first) name'
            name='username'
          />
          <input
            ref={this.password}
            className='login-form__input login-form__input--password'
            onChange={this.handleChange}
            placeholder="Password (your last name)"
            name='password'
            type='password'
          />
          <input
            className={submitClassnames}
            value='GO'
            type='submit'
          />
        </form>
      </section>
    )
  }
}

export default Login
