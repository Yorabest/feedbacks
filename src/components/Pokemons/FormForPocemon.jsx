import {Component, useState} from 'react';
import { ImSearch } from 'react-icons/im';

export const PokemonForm = ({getName}) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue( e.currentTarget.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(value === ''){
            return window.alert('write something')
        }
        getName(value.toLowerCase())
       setValue('')
    }

    return <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">
            <ImSearch style={{ marginRight: 8 }} /> Submit</button>
        </form>
}

export class OldPokemonForm extends Component{

    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({
            value: e.currentTarget.value.toLowerCase()
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.value === ''){
            return window.alert('write something')
        }
        this.props.getName(this.state.value)
        this.setState({
            value: ''
        })

    }
    render(){
        return <form onSubmit={this.onSubmit}>
            <input type="text" value={this.state.value} onChange={this.onChange} />
            <button type="submit">
            <ImSearch style={{ marginRight: 8 }} /> Submit</button>
        </form>

    }
}