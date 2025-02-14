import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import NewPokemonPage from "./pages/NewPokemonPage";
import Navbar from "./components/navbar/NavBar";
import TrainerPage from "./pages/TrainerPage";
import NewTrainerPage from "./pages/NewTrainerPage";
import MovePage from "./pages/MovePage";
import NewMovePage from "./pages/NewMovePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/pokemon/new" element={<NewPokemonPage />} />
        <Route path="/trainers" element={<TrainerPage />} />
        <Route path="/trainers/new" element={<NewTrainerPage />} />
        <Route path="/moves" element={<MovePage />} />
        <Route path="/moves/new" element={<NewMovePage />} />
      </Routes>
    </>
  );
}

export default App;
