import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiFetch = () => {
    const [pokemon, setPokemon] = useState({});

    const getResult = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then(res => {
                console.log(res.data);
                setPokemon(res.data)
            })
    }
    
    return(
        <div>
            <h1>Hello From Pokemon API Component!</h1>
            <button onClick={getResult}>Click me!</button>
            <h2>Name: {pokemon ? pokemon.name : "nothing here"}</h2>
            <p>Pokemon ID: {pokemon ? pokemon.id : "nothing to see!"}</p>
            <p>Weight: {pokemon.weight} lbs</p>
            <p>Types</p>
            <ul>
                {
                    pokemon.types ?
                    pokemon.types.map((type, i)=> {
                        console.log(type.type.name);
                        return <li>Type #{i+1}: <em>{ type.type.name }</em></li>
                    })
                    :
                    ""
                }
            </ul>
            <p>Abilities</p>
            <ul>
                {
                    pokemon.abilities ?
                    pokemon.abilities.map((ability, i)=> {
                        console.log(ability.ability.name);
                        return <li>Ability #{i+1}: <em>{ ability.ability.name }</em></li>
                    })
                    :
                    ""
                }
            </ul>
            <p>Pokemon Experience: {pokemon.base_experience}</p>
        </div>
    );

}

export default ApiFetch;