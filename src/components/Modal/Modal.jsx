import { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

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
                 <h1>Modal</h1>
          <p>Modal is cool. I like it</p>
        <button onClick={this.props.isClose}>Get it!</button>

            </ModalContent>
        </ModalBackdrop>
    }
}