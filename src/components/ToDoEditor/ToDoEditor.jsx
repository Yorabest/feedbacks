import { Component } from "react";
import {Form, Label, Button} from './ToDOEditor.styled'

export class ToDoEditor extends Component { 

    state = {
        text: '',
        lavel: 'junior',
        license: false
    
    }


    handleChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }

    handleRadioChange = (e) => {
        this.setState({
            lavel: e.currentTarget.name
        })
    }

    handleChecked = (e) => {
        this.setState({
            license: e.currentTarget.checked
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if ( this.state.text === ''){
            return
        }
        this.props.addNewTask(this.state.text);
        this.setState({
            text: ''
        })

    }

    render() {
        const { text, lavel, license } = this.state;
        const { handleChange, handleSubmit, handleRadioChange, handleChecked } = this;
        return <Form onSubmit={handleSubmit}>
            <Label htmlFor="put here">
                Put your task
                <textarea id="put here"  value={text}  onChange={handleChange}/>
            </Label>
            <Button type="submit">Create</Button>
        </Form>
    }
}