import { ToDoEditor } from "./ToDoEditor/ToDoEditor";
import { ToDoList } from "./ToDoList/ToDoList";
import { GlobalStyle } from "./GlobalStyles";
import { Component } from 'react';
import toDoItems from '../toDoListData.json';
import { nanoid } from 'nanoid';
import { MoreInfo } from "./MoreInfo/MoreInfo";

export class App extends Component {

  state = {
    tasks: toDoItems,
  }

  calcTotal = () => {
    console.log(this.state.tasks.length)
    return this.state.tasks.length
  }

  calcCompleted = () => {
    const comp = this.state.tasks.filter(({completed}) => {
      return completed
    })

    return comp.length
  }

  getNewTask = (task) => {
    const newTask = {
      id: nanoid(),
      text: task,
      completed: false
    }
    this.setState((prev) => {
      return {
      tasks: [newTask, ...prev.tasks]
    }})
  }

   handleDeleteItem = (task) => {
        const updateItems = this.state.tasks.filter((item, index) => {
            const result = task === index
            return !result
        });
        this.setState({
            tasks: updateItems,
        })
    }

   handleCompleteTask = (currentId, e)=> {
    const change = this.state.tasks.map((item) => {

            if (currentId === item.id) {
                item.completed = e.currentTarget.checked
       }
       
            return item
    })
     
     this.setState( {
        tasks: change
      }
     )


    }

  render() {
    return (
      <>
        <GlobalStyle />
        <MoreInfo total={this.calcTotal()} completed={this.calcCompleted()}/>
        <ToDoEditor addNewTask={ this.getNewTask} />
        <ToDoList justItems={this.state.tasks} handleDeleteItem={ this.handleDeleteItem}  handleCompleteTask={ this.handleCompleteTask} />
      </>
)
  }
    
}
