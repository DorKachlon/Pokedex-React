import React from "react";
// import axios from "axios";
import Button from "@material-ui/core/Button";
// import DitailCardForPokemon from './DitailCardForPokemon'

function PokemonsByType({
    // arryOfPokemonsByType,
    fncSetPokemon,
    dataOfpokemonsByType,
}) {
    // const [dataOfpokemonsByType, setdataOfpokemonsByType] = useState([]);

    // useEffect(() => {
    //     if (arryOfPokemonsByType) {
    //         console.log(arryOfPokemonsByType);
    //         console.log(dataOfpokemonsByType);
    //         // setdataOfpokemonsByType([]);
    //         arryOfPokemonsByType.map(async (pokemon) => {
    //             try {
    //                 const { data } = await axios.get(pokemon.pokemon.url);
    //                 debugger
    //                 const newObj = {
    //                     name: data.name,
    //                     id: data.id,
    //                     frontPic: data.sprites.front_default,
    //                 };
    //                 let newArr = dataOfpokemonsByType;
    //                 newArr.push(newObj);
    //                 await setdataOfpokemonsByType(newArr);
    //             } catch (e) {
    //                 alert(e);
    //             }
    //         });
    //     }
    // }, [arryOfPokemonsByType, dataOfpokemonsByType]);

    console.log("render");
    return dataOfpokemonsByType.map((elemnt) => {
        console.log(elemnt);
        return (
            <Button
                key={elemnt.id}
                variant="contained"
                onClick={() => fncSetPokemon(elemnt.id)}
            >
                <div>{elemnt.name}</div>
                <span> {elemnt.id}</span>
                <img src={elemnt.frontPic} alt={"pokemon"}></img>
            </Button>
        );
    });
}
// return <>{dataOfpokemonsByType.length}</>;

export default PokemonsByType;
