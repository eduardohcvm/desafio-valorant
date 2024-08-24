import './index.css';
import Header from "./componentes/header/header.tsx";
import ListaDeAgentes from "./componentes/agentes/agentes.tsx";
import DetalhesAgentes from "./componentes/detalhes_agentes/detalhes_agentes.tsx";
import Home from "./componentes/home/home.tsx";
import ListaDeMapas from "./componentes/mapas/inicioMapas.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Página Home */}
                <Route path="/agentes" element={<ListaDeAgentes />} /> {/* Página de Agentes */}
                <Route path="/detalhes_agentes/:id" element={<DetalhesAgentes />} /> {/* Detalhes de Agente */}
                <Route path="/mapas" element={<ListaDeMapas />} /> {/* Página de Mapas */}
            </Routes>
        </Router>
    );
}

export default App;
