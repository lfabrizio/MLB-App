import React, {Component} from 'react'
import TodoDataService from '../../API/Todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.deleteTodoClicked.bind(this)
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
       this.refreshTodos();
        console.log(this.state)
    }


refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username)
    .then(
        response => {
            // console.log(response)
            this.setState({todos : response.data})
        }
    )
}


    updateTodoClicked(id) {
        console.log('update' + id)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName();
        // // console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        // .then(
        //     response => {
        //         this.setState({message : `Delete of todo ${id} successful`});
        //         this.refreshTodos();
        //     }
        // )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();
        // console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message : `Delete of todo ${id} successful`});
                this.refreshTodos();
            }
        )
    }

    render() {
        return <div>
            <h1>List Todos</h1>
           {this.state.mesage && <div className="alert alert-success">{this.state.message}</div>}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Target Date</th>
                        <th>Is Completed?</th>
                        <th>Delete</th>
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
                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                    <td><button className="btn btn-success" onCLick={() => this.updateTodoClicked(todo.id)}> Update</button></td>
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