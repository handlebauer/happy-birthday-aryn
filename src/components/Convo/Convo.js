import React, { Component } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import './Convo.scss'

import InfiniteScroll from 'react-infinite-scroller'

class Convo extends Component {
  state = {
    exchanges: []
  }

  componentDidMount() {
    this.loadExchanges()
  }

  loadExchanges = async () => {
    const url = 'https://api.donaldgeddes.ca/v1/space-date'
    const exchanges = await axios.get(url)
      .then(({ data }) => data)
      .catch(console.error)
    this.setState(({ exchanges: e }) => ({ exchanges: [...exchanges, ...e] }))
  }

  render() {
    const { exchanges } = this.state
    if (!exchanges.length) return <p>Loading...</p>
    return (
      <section className='convo'>
        <main className='frame'>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadExchanges}
            hasMore={true}
            threshold={5}
            loader={<div className='loading'>Loading</div>}
          >
          <ul className='exchange__list'>
            {
              exchanges.map(({ direction, lines }) => (
                <li className='exchange'>
                    {
                      direction
                        &&
                          <aside className='exchange__direction-container'>
                            <p className='exchange__direction'>
                              {direction}
                            </p>
                          </aside>
                    }
                    {
                      lines.map(line => {
                        const name = Object.keys(line).join()
                        const lineControlClasses = classnames(
                          'line__control',
                          `line__control--${name}`
                        )
                      return (
                          <ul className={lineControlClasses}>
                            <li className='line'>
                              <p className='line__name'>{name}</p>
                              <p className='line__content'>{line[name]}</p>
                            </li>
                          </ul>
                        )
                      })
                    }
                </li>
              ))
            }
          </ul>
          </InfiniteScroll>
        </main>
      </section>
    )
  }
}

export default Convo
