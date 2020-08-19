import React from "react";

export default function PokemonsByType({ arryOfPokemonsByType }) {
    return (
        <div>
            {arryOfPokemonsByType.map((elemnt) => (
                <div key={elemnt.pokemon.name}>{elemnt.pokemon.name}</div>
            ))}
        </div>
    );
}
