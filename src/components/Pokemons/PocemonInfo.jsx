import { Component } from "react";

export class PokemonInfo extends Component{

    state = {
        pokemon: null
    }

  

    componentDidUpdate(prevP) {
        if(prevP.name !== this.props.name)

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
        .then(res => res.json())
          .then(pokemon => { this.setState({ pokemon });  console.log(pokemon)})
    }

  render() {
      const {pokemon} = this.state
        return <> {pokemon && <div>
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
    </div>} </>
    }
}