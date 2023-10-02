import { Component } from "react";
import { SearchBar } from "./Searchbar";
import { ImgGallery } from "./ImagGallery";
import { Modal } from "components/Modal/ImgModal";
import { SearchContainer } from "./SerchImages.styled";

export class SearchImg extends Component{
    state = {
        keyWord: null,
        isOpenModal: false,
        image: '',
        alt: ''
    }

    handleSearch = (keyWord) => {
        this.setState({keyWord})

    }

    toggleModal = (image, alt) => {
        this.setState((prev) => ({ isOpenModal: !prev.isOpenModal }))
        if (!this.setState.isOpenModal) {
            this.setState({image, alt})
        }
    }

    render() {
        return <SearchContainer>
            <SearchBar getKeyWord={this.handleSearch} />
            <ImgGallery keyWord={this.state.keyWord} onClick={this.toggleModal} />
            {this.state.isOpenModal && <Modal isClose={this.toggleModal} image={this.state.image} alt={this.state.alt} />}
            
           
        
        </SearchContainer>
    }
}