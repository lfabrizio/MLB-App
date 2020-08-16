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
        this.addTodoClicked = this.addTodoClicked.bind(this)
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

    
    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
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
            
<div class="hanger">
    <div class="hook">
			<div class="cap js">
				<div class="head">
					<div class="logo">
						<div>Java</div>
					</div>
					<div class="shade">
						<div></div>
					</div>
				</div>
			</div>
		</div>
    <div class="hook">
			<div class="cap css">
				<div class="head">
					<div class="logo">
						<div>MySQL</div>
					</div>
					<div class="shade">
						<div></div>
					</div>
				</div>
			</div>
		</div>
    <div class="hook">
			<div class="cap html">
				<div class="head">
					<div class="logo">
						<div>Java</div>
					</div>
					<div class="shade">
						<div></div>
					</div>
				</div>
			</div>
		</div>
    <div class="hook"></div>
    <div class="hook">
			<div class="cap php">
				<div class="head">
					<div class="logo">
						<div>React</div>
						
					</div>
					<div class="shade">
						<div>Spring Boot</div>
					</div>
				</div>
			</div>
		</div>
</div>
            <h1>List Todos</h1>
           {this.state.mesage && <div className="alert alert-success">{this.state.message}</div>}
            <table>
                <thead>
                    <tr>
                        <th>unique id</th>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is task Completed?</th>
                        <th>Delete1</th>
                        <th>Delete2</th>
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
            <div className="row">
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
            </div>
        </div>
    }
}

export default ListTodosComponent