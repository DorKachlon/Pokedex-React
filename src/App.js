import React, { useRef, useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import axios from "axios";
import PokemonsByType from "./PokemonsByType";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

export default function App() {
    let searchInput = useRef();
    const [pokemon, setpokemon] = useState();
    const [pokemonsByType, setpokemonsByType] = useState();

    async function eventClick() {
        try {
            const { data } = await axios.get(
                `http://pokeapi.co/api/v2/pokemon/${searchInput.current.value}`
            );
            setpokemon({
                name: data.name,
                height: data.height,
                weight: data.weight,
                frontPic: data.sprites.front_default,
                backPic: data.sprites.back_default,
                types: data.types,
            });
        } catch (e) {
            alert(e);
        }
        searchInput.current.value = "";
    }

    function fncPokemonsByType(arryOfPokemonsByType) {
        setpokemonsByType(arryOfPokemonsByType);
    }
    return (
        <>
            <input
                ref={searchInput}
                id="search"
                placeholder="search"
                onKeyUp={(event) => {
                    if (event.keyCode === 13) {
                        eventClick();
                    }
                }}
            />
            <Button
                variant="contained"
                color="primary"
                id="searchButton"
                onClick={() => {
                    eventClick();
                }}
            >
                <SearchIcon />
            </Button>
            {pokemon ? (
                <Pokemon
                    pokemon={pokemon}
                    fncPokemonsByType={fncPokemonsByType}
                />
            ) : (
                <div>empty</div>
            )}
            {pokemonsByType && (
                <PokemonsByType arryOfPokemonsByType={pokemonsByType} />
            )}
        </>
    );
}
