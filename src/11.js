import React, { useRef, useState } from "react";
import './App.css';
import Pokemon from './Pokemon';

export default function Pokemon() {
    let searchInput = useRef();
    const [Id, setId] = useState();
    function eventClick(){
        console.log(searchInput.current.value);
        setId(searchInput.current.value)
    }
    return (
        <>
            <input ref={searchInput} id="search" placeholder="search" />
            <button
                id="searchButton"
                onClick={() => {
                    eventClick();
                }}
            >
                searchButton
            </button>
        </>
    );
}
