import { ModalBackdrop, ModalContent } from "./Modal.styled";
import { Component } from "react";

export class Modal extends Component{


    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
            if (e.code === "Escape") {
                this.props.isClose()
            }
            
    }
    
    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.isClose()
            
        }
    }

    render() {
        return <ModalBackdrop onClick={this.handleBackdropClick}>
            <ModalContent>
                <img src={this.props.image} alt={this.props.alt} />
            </ModalContent>
        </ModalBackdrop>
    }
}