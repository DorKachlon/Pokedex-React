import React, { useState } from "react";
import axios from "axios";

export default function Pokemon({ pokemon, fncPokemonsByType }) {
    const [over, setover] = useState(false);
    async function typeClicked(url) {
        try {
            const { data } = await axios.get(url);
            fncPokemonsByType(data.pokemon);
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
                <div
                    key={type.type.name}
                    onClick={() => typeClicked(type.type.url)}
                >
                    {type.type.name}
                </div>
            ))}
        </div>
    );
}
