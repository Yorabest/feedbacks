import { ToDoItem } from "./ToDoItem";
import { Component } from "react";
import { List, Item } from "./ToDo.styled";

export class ToDoList extends Component {

    // state = {
    //     items: this.props.justItems,
    // }

    // handleDeleteItem = (idx) => {
        
    //     const updateItems = this.state.items.filter((item, index) => {
    //         const result = idx === index
    //         return !result
    //     });
    //     this.setState({
    //         items: updateItems,
    //     })
    // }


    render() {
        return <List>
            {this.props.justItems.map(({text, id, completed}, idx) => {
                return <Item key={id}>
                    <ToDoItem
                        id={id}
                        text={text}
                        handlerDeleteItem={() => { this.props.handleDeleteItem(idx) }}
                        completed={completed}
                        onChange={this.props.handleCompleteTask}
                    />
                    </Item>
            })}
        </List>
    }
}