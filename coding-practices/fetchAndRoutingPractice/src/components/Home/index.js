import './index.css'
import {Component} from 'react'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

class Home extends Component {
  state = {status: true, storeData: []}

  componentDidMount() {
    this.details()
  }

  details = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const position = {
      method: 'GET',
    }
    const response = await fetch(url, position)

    const data = await response.json()
    if (response.ok) {
      this.setState({status: false})
      const updateData = data.map(each => ({
        author: each.author,
        avatarUrl: each.avatar_url,
        id: each.id,
        imageUrl: each.image_url,
        title: each.title,
        topic: each.topic,
      }))
      this.setState({storeData: updateData})
    }
  }

  render() {
    const {storeData} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        <BlogList updateData={storeData} />
      </div>
    )
  }
}

export default Home
