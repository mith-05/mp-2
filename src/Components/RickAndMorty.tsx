import styled from "styled-components";
import type {Character} from "../interfaces/Character.ts";
import spaceImage from "./outer-space-background.jpg";

const AllFields = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: midnightblue;
`;

const SingleField = styled.div<{ status: string }>`
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
    border: 2px solid steelblue;
    font-family: Arial, sans-serif;
    text-align: left;
    background-color: gray;
    background-image: url(${spaceImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: black;

    img {
        width: 150px;
        height: auto;
        margin-right: 25px;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 15px;
    }

    p {
        font-size: 16px;
        margin: 8px 0;
    }
    
    .character-info {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 15px;
        border-radius: 10px;
        width: 100%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;

        img {
            margin-right: 0;
            margin-bottom: 15px;
        }
    }
`;
export default function RickAndMorty(props : { data:Character[] } ){
    return (
        <AllFields>
            {
                props.data.map((char: Character) =>
                    <SingleField key={char.id} status={char.status}>
                        <img src={char.image} alt={char.name} />

                        <div className={"character-info"}>
                            <h2>{char.name}</h2>
                            <p><strong>Status:</strong> {char.status}</p>
                            <p><strong>Species:</strong> {char.species}</p>
                            <p><strong>Gender:</strong> {char.gender}</p>
                            <p><strong>Origin:</strong> {char.origin.name}</p>
                            <p><strong>Location:</strong> {char.location.name}</p>
                        </div>
                    </SingleField>
                )
            }
        </AllFields>
    );
}