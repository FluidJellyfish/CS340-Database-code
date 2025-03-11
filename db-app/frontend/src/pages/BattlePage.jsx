import NewBattleField from "../components/battle/NewBattleField"; 
import BattleTable from "../components/battle/BattleTable";
import axios from "axios";
import { useEffect, useState } from "react";



function BattlePage() {
    const [battleData, setBattleData] = useState([]);

    const fetchBattleData = async() => {
        console.log("fetching battle data");
        try{
            const url = import.meta.env.VITE_API_URL + 'battles/';
            console.log("Fetching data from: ", url);
            const response = await axios.get(url);
            setBattleData(response.data);
            console.log("Battle Data: ", response.data);
        } catch(error){
            console.error('Error Fetching battle data: ', error);
            if(error.response){
                console.error('Error response: ', error.response);
            }
        };
    };

    useEffect(() => {
        fetchBattleData();
    },[]);

    //const fetchBattleData
    return (
        <div>
            <h2>Battles</h2>
            <BattleTable battles={battleData}/>
            <h2>Add a New Battle</h2>
            <NewBattleField />
        </div>
    );
}

export default BattlePage;