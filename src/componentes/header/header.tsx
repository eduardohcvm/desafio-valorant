import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center w-screen border-6 bg-gray-800 p-4">
            <Link to="/" className="text-white hover:bg-red-600 px-4 py-2 rounded text-2xl font-sans text-2xl">
                Home
            </Link>
            <Link to="/agentes" className="text-white hover:bg-red-600 px-4 py-2 rounded text-2xl font-sans text-2xl">
                Agentes
            </Link>
            <Link to="/mapas" className="text-white hover:bg-red-600 px-4 py-2 rounded text-2xl font-sans text-2xl">
                Mapas
            </Link>
            <Link to="/tiers" className="text-white hover:bg-red-600 px-4 py-2 rounded text-2xl font-sans mr-3 text-2xl">
                Tiers Competitivos
            </Link>
        </div>
    );
};

export default Header;
