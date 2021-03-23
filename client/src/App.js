import { Component } from 'react';
import  TodoForm from './components/todos/TodoForm';
import axios from 'axios';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // make an api call to our rails end to get all todos
    // set the todos on to state
  }

  addTodo = (todo) => {
    //make an api call to add in our rails server and our db
    axios.post('/api/todos', { todo })
      .then( res => {
        // add the new todo to the front end
        const { todos } = this.state
        this.setState({ todos: [ ...todos, res.data ] })
      })
      .catch( err => console.log(err))
  }

  updateTodo = (id, updatedTodo) => {
    //update in our backend and db with api call
    //update the todo in the front end
  }

  deleteTodo = (id) => {
    // make api call to delete in the backend and db
    // delete the todo in the front end
  }

  render() {
    return (
      <>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
      </>
    )
  }
}

export default App;