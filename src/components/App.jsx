import { ToDoEditor } from "./ToDoEditor/ToDoEditor";
import { ToDoList } from "./ToDoList/ToDoList";
import { GlobalStyle } from "./GlobalStyles";
import { Component } from 'react';
import toDoItems from '../toDoListData.json';
import { nanoid } from 'nanoid';
import { MoreInfo } from "./MoreInfo/MoreInfo";
import { Filter } from "./Filter/Filter"
import { Modal } from "./Modal/Modal";
import {createPortal } from 'react';
import { PokemonForm } from './Pokemons/FormForPocemon'
import { PokemonInfo } from "./Pokemons/PocemonInfo";

const modalRoot = document.querySelector('#modal-root')

export class App extends Component {

  state = {
    tasks: toDoItems,
    filter: '',
    isOpen: false,
    pokemon: null,
    pokeName: '',
    loading: false,
  }

  componentDidMount() {
     this.setState({loading: true})
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(pokemon => (this.setState({ pokemon })))
    .finally(()=>( this.setState({loading:false})))
  }

  getPokemonName = (pokeName) => {
    this.setState({pokeName})
    
  }

  calcTotal = () => {
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
  
  FilterChange = e => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  getVisibleTodos = () => {
    const { filter,  tasks } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return  tasks.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  toggleModal = () => {
    document.activeElement.blur();
    this.setState((prev) => {
      return {
        isOpen: !prev.isOpen
      }
    })
}

  render() {
    const { toggleModal,getPokemonName, calcTotal, calcCompleted, getNewTask, handleDeleteItem, handleCompleteTask, FilterChange, getVisibleTodos } = this;
    const { tasks, filter, isOpen, loading, pokemon, pokeName } = this.state
    const visibleToDos = getVisibleTodos();
    return (
      <>
        <GlobalStyle />
        <button type='button' onClick={toggleModal}>Click there</button>
        {isOpen && <Modal isClose={toggleModal}/>}
        {loading && <p>Loading...</p>}
        {pokemon && <p>Take your pokemon!</p>}
        <PokemonForm getName={getPokemonName} />
        <PokemonInfo name={pokeName} />
        {/* <MoreInfo total={calcTotal()} completed={calcCompleted()}/>
        <ToDoEditor addNewTask={getNewTask} />
        <Filter value={filter} onChange={FilterChange} />
        <ToDoList justItems={visibleToDos} handleDeleteItem={ handleDeleteItem}  handleCompleteTask={handleCompleteTask} /> */}
      </>
)
  }
    
}
