import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import NewPokemonPage from "./pages/NewPokemonPage";
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/pokemon/new" element={<NewPokemonPage />} />
      </Routes>
    </>
  );
}

export default App;
