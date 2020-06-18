import React, {Component} from 'react'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 1,
            desription : 'Learn forms',
            targetDate : new Date()
        }
    }
    render() {
        return <div>
            Todo Component for id - {this.props.match.params.id} </div>
    }
}

export default TodoComponent