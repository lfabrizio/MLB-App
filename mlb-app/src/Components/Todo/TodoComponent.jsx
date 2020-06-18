import React, {Component} from 'react'
import moment from 'moment'
import { Formik } from 'formik';

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            desription : 'Learn forms',
            targetDate : moment (new Date()).format('YYYY-MM-DD')
        }
    }
    render() {
        return <div>
            <H1>Todo</H1>
            <div class="container">
                <Formik>

                </Formik>
            </div>
            </div>
    }
}

export default TodoComponent