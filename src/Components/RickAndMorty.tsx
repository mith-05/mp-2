import styled from "styled-components";
import type {Character} from "../interfaces/Character.ts";

const AllCharsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: navy;
`;

const SingleCharDiv = styled.div<{ status: string }>`
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
    background-color: aliceblue;
    color: black;
    border: 2px solid steelblue;
    font-family: Arial, sans-serif;
    text-align: left;

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
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <img src={char.image} alt={char.name} />

                        <div>
                            <h2>{char.name}</h2>
                            <p><strong>Status:</strong> {char.status}</p>
                            <p><strong>Species:</strong> {char.species}</p>
                            <p><strong>Gender:</strong> {char.gender}</p>
                            <p><strong>Origin:</strong> {char.origin.name}</p>
                            <p><strong>Location:</strong> {char.location.name}</p>
                        </div>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}