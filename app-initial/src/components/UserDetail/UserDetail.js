import React, { Component } from 'react'
import * as api from '../../api'
import Spinner from '../Spinner'
import './UserDetail.css'

class UserDetail extends Component {
  state = {
    isLoading: true,
    items: []
  }

  async componentDidMount() {
    const items = await this.props.fetchFn(this.props.id)
    this.setState({
      isLoading: false,
      items
    })
  }

  render() {
    const { isLoading, items } = this.state
    const { label } = this.props

    return (
      <div className="user-detail">
        {isLoading ? (
          <Spinner centered={false} />
        ) : (
          <>
            <h3 className="user-detail-label">{label}</h3>
            <p className="user-detail-value">{items.length}</p>
          </>
        )}
      </div>
    )
  }
}

export default UserDetail
