// Write your code here
import {Component} from 'react'

import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {status: true}

  onStatusChange = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <Message status={status} />
          {status ? (
            <Login onStatusChange={this.onStatusChange} />
          ) : (
            <Logout onStatusChange={this.onStatusChange} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
