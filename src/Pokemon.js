import React, { useState } from "react";
import axios from "axios";
import "./pokemon.css";
export default function Pokemon({
    pokemon,
    // fncPokemonsByType,
    setdataOfpokemonsByType,
    setarryOfPokemonsByType,
}) {
    const [over, setover] = useState(false);
    async function typeClicked(url) {
        try {
            const { data } = await axios.get(url);
            setarryOfPokemonsByType(data.pokemon);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <div>name: {pokemon.name}</div>
            <div>height: {pokemon.height}</div>
            <div>weight:{pokemon.weight}</div>
            <img
                src={over ? pokemon.backPic : pokemon.frontPic}
                alt={"pokemon"}
                onMouseOver={() => setover(true)}
                onMouseOut={() => setover(false)}
            ></img>
            {pokemon.types.map((type) => (
                <button
                    className={type.type.name}
                    key={type.type.name}
                    onClick={() => typeClicked(type.type.url)}
                >
                    {type.type.name}
                </button>
            ))}
        </div>
    );
}
