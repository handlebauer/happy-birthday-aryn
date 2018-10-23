import React, { Component } from 'react'
import './Explain.scss'
import predictiveText from './predictive-text.jpg'

class Explain extends Component {
  handleClick = () => this.props.history.push('/space-date')

  render() {
    return (
      <section className='birthday'>
        <main className='party'>
          <h1 className='hi'>
            <span role="img" aria-label="balloon">🎈</span>
            <span role="img" aria-label="balloon">🎈</span>
            <span role="img" aria-label="balloon">🎈</span>
          </h1>
          <p className='explanation'>
            It's your birthday.
          </p>
          <p className='explanation'>
            You're older now. That's great.
          </p>
          <p className='explanation'>
            I made you something kind of dumb...
          </p>
          <p className='explanation'>
            ... Markov Chains work by generating new words probabilistically based
            on existing text; the original word sequencing is used to (hopefully)
            generate meaningful sentences.
          </p>
          <img alt='predictttt' className='explain__img' src={predictiveText} />
          <p className='explain__caption'>
            FWIW: under the hood, "predictive text" is powered by markov chains
          </p>
          <div className='see-why-container'>
            <button className='see-why' onClick={this.handleClick}>
              <span role="img" aria-label="balloon">➗</span>
              <span role="img" aria-label="balloon">✖️</span>
              <span role="img" aria-label="balloon">➖</span>
              <span role="img" aria-label="balloon">➕</span>
              {' '}
              ready
              {' '}
              <span role="img" aria-label="balloon">➕</span>
              <span role="img" aria-label="balloon">➖</span>
              <span role="img" aria-label="balloon">✖️</span>
              <span role="img" aria-label="balloon">➗</span>
            </button>
          </div>
        </main>
      </section>
    )
  }
}

export default Explain
