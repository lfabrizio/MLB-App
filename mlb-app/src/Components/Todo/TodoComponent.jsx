import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../API/Todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            desription : '',
            targetDate : moment (new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate: moment (response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.desription.length<5) {
            errors.description = 'Enter Description AT least 5 characters'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate ='Enter valid'
        }
        return errors;
    }
    onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.updateTodo(username, this.state.id, {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }).then(
            () => this.props.history.push('/todos'))

        console.log(values);
    }

    render() {
        let {description, targetDate} =  this.state
        //let targetDate =  this.state.targetDate
        return (
             <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                intialValues={{ description, targetDate }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={this.onSubmit}
                validate={this.validate}
                enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div"
                                 className="alert alert-warning"/>
                                 <ErrorMessage name="targetDate" component="div"
                                 className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button className="btn btn-succ" type="submit"> Save </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            </div>
        )
    }
}

export default TodoComponent