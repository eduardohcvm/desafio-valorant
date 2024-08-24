const Header = () => {
    return (
        <div className={"flex justify-between items-center w-screen border-6 bg-gray-800 p-4"}>
            <a href="/" className="text-white hover:bg-red-600 px-4 py-2 rounded text-lg font-sans text-2xl">
                Home
            </a>
            <a href="/agentes" className="text-white hover:bg-red-600 px-4 py-2 rounded text-lg font-sans text-2xl">
                Agentes
            </a>
            <a href="/mapas" className="text-white hover:bg-red-600 px-4 py-2 rounded text-lg font-sans text-2xl">
                Mapas
            </a>
            <a href="/tiers" className="text-white hover:bg-red-600 px-4 py-2 rounded text-lg font-sans mr-3 text-2xl">
                Tiers Competitivos
            </a>
        </div>
    );
};
export default Header;