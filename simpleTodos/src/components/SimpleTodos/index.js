import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoDetails: initialTodosList}

  deleteUser = id => {
    const {todoDetails} = this.state

    const filteredDetails = todoDetails.filter(each => each.id !== id)
    this.setState({todoDetails: filteredDetails})
  }

  render() {
    const {todoDetails} = this.state

    return (
      <div className="background-container">
        <div className="container">
          <h1>Simple Todos</h1>
          <ul>
            {todoDetails.map(each => (
              <TodoItem
                deleteUser={this.deleteUser}
                userDetails={each}
                key={each.id}
                id={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
