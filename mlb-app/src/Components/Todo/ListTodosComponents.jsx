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
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map (
                        todo =>
                    <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    }
}

export default ListTodosComponent