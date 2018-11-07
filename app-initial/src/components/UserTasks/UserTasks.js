import React, { Component } from 'react'
import * as api from '../../api'
import Spinner from '../Spinner'
import './UserTasks.css'

class UserTasks extends Component {
  state = {
    isLoading: true,
    tasks: []
  }

  async componentDidMount() {
    const tasks = await api.getUserTasks(this.props.id)
    this.setState({
      isLoading: false,
      tasks
    })
  }

  render() {
    const { isLoading, tasks } = this.state

    return (
      <div className="user-tasks">
        {isLoading ? (
          <Spinner centered={false} />
        ) : (
          <>
            <h3 className="tasks-label">Tasks</h3>
            <p className="tasks-value">{tasks.length}</p>
          </>
        )}
      </div>
    )
  }
}

export default UserTasks
