import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Describe from '../des'

class Card extends Component {
  state = {list: [], status: true}

  componentDidMount() {
    this.details()
  }

  details = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const position = {
      method: 'GET',
    }

    const response = await fetch(url, position)

    const data = await response.json()
    console.log(data)
    const {packages} = data
    if (response.ok) {
      const update = packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))

      this.setState({list: update, status: false})
    }
  }

  render() {
    const {list, status} = this.state
    console.log(list)
    return (
      <div className="background">
        <h1>Travel Guide</h1>
        {status ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="order">
            {list.map(each => (
              <Describe details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Card
