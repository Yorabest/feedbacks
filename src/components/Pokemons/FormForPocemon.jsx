import {Component} from 'react';
import { ImSearch } from 'react-icons/im';

export class PokemonForm extends Component{

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
            <ImSearch style={{ marginRight: 8 }} />
            <button type="submit">Submit</button>
        </form>

    }
}