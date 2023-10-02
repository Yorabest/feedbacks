import { Component } from "react";
import { SearchBarContainer, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from "./SerchImages.styled";
import { ImSearch } from 'react-icons/im';

export class SearchBar extends Component{

    state = {
        value: ''
    }

    onInputChange = (e) => {
        const {value} = e.currentTarget
        this.setState({value})
    }
    
    onSubmit = (e) => {
        e.preventDefault();
          if(this.state.value === ''){
            return window.alert('write something')
        }
        this.props.getKeyWord(this.state.value)
        this.setState({
            value: ''
        })


    }


    render() {
        return < SearchBarContainer>
            <SearchForm onSubmit={this.onSubmit}>
            <SearchFormBtn type="submit">
                <SearchFormBtnLabel><ImSearch style={{ marginRight: 8 }} /></SearchFormBtnLabel>
            </SearchFormBtn> 

            <SearchFormInput
                type="text"
                value={this.state.value}
                onChange={this.onInputChange}
            />
        </SearchForm>
            </ SearchBarContainer>
    }
}