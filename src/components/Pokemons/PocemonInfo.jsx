import { Component, useState, useEffect } from "react";
import { RotatingSquare } from 'react-loader-spinner';





export const PokemonInfo = ({name}) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!name) {
      return
    }
    setStatus('pending')

        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res =>{
          if (res.status === 200) {
           res.json()
          }
          return Promise.reject(new Error(`Pokemon "${name}" does not exist`))
        })
          .then(newPokemon => {
            setPokemon(newPokemon)
            setStatus('resolved')
          })
          .catch((error) => { 
            setError(error)
            setStatus('rejected')
          })
  }, [name])
  
  switch (status) {
        case 'idle':
          return <p>Name pls</p>
          
        case 'pending':
          return <RotatingSquare
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="rotating-square-loading"
  strokeWidth="4"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

        case 'resolved':
          return <div>
           <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={pokemon.name}
    /> 
      <h2>{pokemon.name}</h2> 
      <ul>
          { pokemon.stats.map(entry => {
        return  <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
          }
                )
        } 
      </ul>
          </div>
        
        case 'rejected': 
          return <p>{error.message}</p>
      
        default:
          break;
      }

}

export class OldPokemonInfo extends Component{

    state = {
      pokemon: null,
      status: 'idle',
      error: null
    }

  

    componentDidUpdate(prevP) {
      if (prevP.name !== this.props.name)
          this.setState({status: 'pending'})

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
        .then(res =>{
          if (res.status === 200) {
           res.json()
          }
          return Promise.reject(new Error(`Pokemon "${this.props.name}"does not exis`))
        })
        .then(pokemon => { this.setState({ pokemon, status: 'resolved'}) })
        .catch((error)=> this.setState({error, status: 'rejected'}))
      
    }

  render() {
      const {pokemon, status, error} = this.state

      switch (status) {
        case 'idle':
          return <p>Name pls</p>
          
        case 'pending':
          return <RotatingSquare
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="rotating-square-loading"
  strokeWidth="4"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

        case 'resolved':
          return <div>
           <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={pokemon.name}
    /> 
      <h2>{pokemon.name}</h2> 
      <ul>
          { pokemon.stats.map(entry => {
        return  <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
          }
                )
        } 
      </ul>
          </div>
        
        case 'rejected': 
          return <p>{error.message}</p>
      
        default:
          break;
      }
    }
}