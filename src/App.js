import './index.css'
import Header from "./componentes/header/header.tsx";
import ListaDeAgentes from "./componentes/agentes/agentes.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (


        <Router> {/* Certifique-se de envolver suas rotas com Router */}
            <Header/>
            <Routes>
                <Route path="/" element={<ListaDeAgentes />} />
                <Route path="/detalhes_agentes/:id" element={<ListaDeAgentes/>} />
            </Routes>
        </Router>
    );
}

export default App;
