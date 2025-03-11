import TrainerTable from "../components/trainer/TrainerTable";
import PokemonTrainerTable from "../components/trainer/PokemonTrainerTable";
import axios from "axios";
import { useEffect, useState } from "react";

// Sample data

function TrainerPage() {
    
    const [trainerData, setTrainerdata] = useState([]);
    const [pokemonTrainerdata, setPokemonTrainerData] = useState([]);
    //'http://flip1.engr.oregonstate.edu:58675/api/pokemon/trainers'
    
    const fetchTrainerData = async() => {
        console.log("Fetching trainer data");
        try {
            const url = import.meta.env.VITE_API_URL + 'pokemon/trainers/'
            console.log("Fetching data from:", url);
            const response = await axios.get(url);
            setTrainerdata(response.data);
            console.log("response data:", response.data);
            //alert(JSON.stringify(response.data));

        } catch (error) {
            console.error('Error fetching trainer data:', error);
            if(error.response){
                console.error('Error response:', error.response);
            } else if(error.request){
                console.error('Error request:', error.request);
            }
            else{
                console.error('Error Message:', error.message);
            }
        };
    };

    //gets pokemonTrainerData
    const fetchPokemonTrainerdata = async() => {
        try{
            const response = await axios.get(import.meta.env.VITE_API_URL + 'trainers/pokemon/');
            setPokemonTrainerData(response.data);
        } catch(error){
            console.error('Error fetching pokemonTrainer data: ', error);
        }
    }

    useEffect(() => {
        fetchTrainerData();
        fetchPokemonTrainerdata();
    }, []);


    return (
        <div>
        <h1>Trainer Page</h1>
            <TrainerTable trainers={trainerData} />
            <PokemonTrainerTable />
        </div>
    );
}

export default TrainerPage;