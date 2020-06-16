import React, {Component} from 'react'
import TodoDataService from '../../API/Todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: 
            [
            ]
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
    }


    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true;

    }


    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                // console.log(response)
                this.setState({todos : response.data})
            }
        )
        console.log(this.state)
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();
        console.log(id + " " + username);
    }
    render() {
        return <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Target Date</th>
                        <th>Is Completed?</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map (
                        todo =>
                    <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                    <td><button className="btn btn-warning" onCLick={() => this.deleteTodoClicked(todo.id)}> Delete</button></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    }
}

export default ListTodosComponent