import React, { useState } from "react";
import axios from "axios";

export default function DitailCardForPokemon({ url }) {
    const [pokemon, setpokemon] = useState();
    async function createCard() {
        try {
            const { data } = await axios.get(url);
            setpokemon({
                id: data.id,
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
    }
    createCard();
    return (
        <>
            {pokemon && <img alt={"pokemon"} src={pokemon.frontPic}></img>}
            {pokemon && <span>{pokemon.id}</span>}
        </>
    );
}




// {arryOfPokemonsByType.map((elemnt) => {
//     return (
//         <Button
//             key={elemnt.pokemon.name}
//             variant="contained"
//             onClick={() => fncSetPokemon(elemnt.pokemon.url)}
//         >
//             <div>{elemnt.pokemon.name}</div>
//             <div>{createCard(elemnt.pokemon.url).weight}</div>
//             {/* {/* <DitailCardForPokemon url={elemnt.pokemon.url}/> */}
//         </Button>
//     );
// })} */}