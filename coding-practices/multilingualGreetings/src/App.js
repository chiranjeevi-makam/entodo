import './App.css'

import {Component} from 'react'

import Button from './components/Buttons'

import Card from './components/card'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {list: languageGreetingsList}

  change = id => {
    this.setState({
      list: languageGreetingsList.filter(each => each.id === id),
    })
  }

  render() {
    const {list} = this.state
    console.log(list)
    return (
      <div className="background">
        <h1>Multilingual Greetings</h1>
        <div>
          {languageGreetingsList.map(each => (
            <Button details={each} change={this.change} key={each.id} />
          ))}
        </div>
        <ul>
          {list.map(object => (
            <Card object={object} key={object.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
