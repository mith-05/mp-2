import RickAndMorty from "./Components/RickAndMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Character} from "./interfaces/Character.ts";

const OuterDes=styled.div`
  margin: auto;
  width: 90vw;
  border: 50px black dashed;
`;

export default function App(){

  const [item, setData] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const raw = await fetch("https://rickandmortyapi.com/api/character");
      const {results} : {results: Character[]} = await raw.json();
      setData(results);
    }
    fetchData()
        .then(() => console.log("Everything is good"))
        .catch((e: Error) => console.log("This error: " + e + "occurred"));
  }, [item.length]);

  return(
      <OuterDes>
        <RickAndMorty data={item}/>
      </OuterDes>
  )
}