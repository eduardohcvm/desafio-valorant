import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={"flex flex-row justify-center bg-gray-800 w-screen"}>
        <div className="flex items-center  border-6 p-6 px-40 gap-14">
            <Link to="/" className="text-white hover:bg-red-600 px-4 py-2 rounded text-2xl font-sans">
                Home
            </Link>
            <Link to="/agentes" className="text-white hover:bg-red-600 px-4 py-2 rounded font-sans text-2xl">
                Agentes
            </Link>
            <Link to="/mapas" className="text-white hover:bg-red-600 px-4 py-2 rounded font-sans text-2xl">
                Mapas
            </Link>
            <Link to="/tiers" className="text-white hover:bg-red-600 px-4 py-2 rounded font-sans mr-3 text-2xl">
                Tiers Competitivos
            </Link>
        </div>
        </div>
    );
};

export default Header;
