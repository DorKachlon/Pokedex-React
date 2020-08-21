import React, { useState, useEffect } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import axios from "axios";
import PokemonsByType from "./PokemonsByType";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

export default function App() {
    const [pokemon, setpokemon] = useState();
    // const [pokemonsByType, setpokemonsByType] = useState();
    const [dataOfpokemonsByType, setdataOfpokemonsByType] = useState([]);
    const [arryOfPokemonsByType, setarryOfPokemonsByType] = useState([]);
    const [searchInput, setsearchInput] = useState();

    async function eventClick() {
        try {
            const { data } = await axios.get(
                `http://pokeapi.co/api/v2/pokemon/${searchInput}`
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
        setsearchInput();
    }

    //turn on from component Pokemon
    // async function fncPokemonsByType(arryOfPokemonsByType) {
    useEffect(() => {
        async function fncPo() {
            debugger;
            console.log(arryOfPokemonsByType);
            const pokemonImg = await Promise.all(
                arryOfPokemonsByType.map(async (pokemon) => {
                    try {
                        const { data } = await axios.get(pokemon.pokemon.url);
                        const newObj = {
                            name: data.name,
                            id: data.id,
                            frontPic: data.sprites.front_default,
                        };
                        console.log(newObj);
                        return newObj;
                    } catch (e) {
                        alert(e);
                    }
                })
            );
            debugger;
            setdataOfpokemonsByType(pokemonImg);
        }
        if (arryOfPokemonsByType) {
            fncPo();
        }
    }, [arryOfPokemonsByType]);
    // await setpokemonsByType(arryOfPokemonsByType);

    //turn on from component PokemonsByType
    async function fncSetPokemon(id) {
        try {
            const { data } = await axios.get(
                `http://pokeapi.co/api/v2/pokemon/${id}`
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
        // await setdataOfpokemonsByType();
    }

    return (
        <>
            <TextField
                id="outlined-basic"
                label="Search"
                // value={searchInput}
                variant="outlined"
                placeholder="search"
                onChange={(e) => {
                    debugger;
                    setsearchInput(e.target.value);
                }}
                onKeyUp={(event) => {
                    if (event.keyCode === 13) {
                        debugger;
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
            {pokemon && (
                <Pokemon
                    pokemon={pokemon}
                    // fncPokemonsByType={fncPokemonsByType}
                    setdataOfpokemonsByType={setdataOfpokemonsByType}
                    setarryOfPokemonsByType={setarryOfPokemonsByType}
                />
            )}
            <PokemonsByType
                // arryOfPokemonsByType={pokemonsByType}
                fncSetPokemon={fncSetPokemon}
                dataOfpokemonsByType={dataOfpokemonsByType}
            />
        </>
    );
}
