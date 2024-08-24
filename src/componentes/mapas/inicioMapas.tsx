import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export interface Root {
    status: number
    data: Mtype[]
}

export interface Mtype {
    uuid: string
    displayName: string
    narrativeDescription: any
    tacticalDescription?: string
    coordinates?: string
    displayIcon?: string
    listViewIcon: string
    listViewIconTall?: string
    splash: string
    stylizedBackgroundImage?: string
    premierBackgroundImage?: string
    assetPath: string
    mapUrl: string
    xMultiplier: number
    yMultiplier: number
    xScalarToAdd: number
    yScalarToAdd: number
    callouts?: Callout[]
}

export interface Callout {
    regionName: string
    superRegionName: string
    location: Location
}

export interface Location {
    x: number
    y: number
}

const ListaDeMapas = () => {
    const [mapas, setMapas] = useState<Mtype[]>([]);
    const [page, setPage] = useState(1); // Controla a página atual
    const pageSize = 3; // Quantos mapas exibir por página

    useEffect(() => {
        fetch('https://valorant-api.com/v1/maps')
            .then((response) => response.json())
            .then((data) => {
                setMapas(data.data); // Supondo que os mapas vêm em 'data'
            })
            .catch((error) => console.log(error));
    }, []);

    const page_max = Math.ceil(mapas.length / pageSize);

    const handlePreviousPage = () => {
        setPage(page === 1 ? page_max : page - 1);
    };

    const handleNextPage = () => {
        setPage(page === page_max ? 1 : page + 1);
    };

    const displayedMaps = mapas.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className="space-y-20 bg-red-400 w-screen h-screen">
            <div className="flex flex-col items-center gap-20">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-700 mt-20 ">Explore os Mapas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {displayedMaps.map((mapa) => (
                        <div key={mapa.uuid} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-3xl hover:shadow-white">
                            <h4 className="text-2xl font-bold mb-4">{mapa.displayName}</h4>
                            <img
                                src={mapa.splash}
                                alt={`Imagem do mapa ${mapa.displayName}`}
                                className="w-full h-80 object-cover mb-4 rounded-lg"
                            />
                            <p className="text-sm">{mapa.tacticalDescription || "Sem descrição disponível."}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-14">
                <button
                    className="flex items-center justify-center p-4 text-white bg-blue-950 rounded-full dark:bg-gray-50 dark:text-gray-900 font-mono "
                    onClick={handlePreviousPage}
                >
                    <span className="material-symbols-outlined text-2xl">Mapas anteriores</span>
                </button>
                <span className="text-sm font-light">{page} de {page_max}</span>
                <button
                    className="flex items-center justify-center p-4 text-white bg-blue-950 rounded-full dark:bg-gray-50 dark:text-gray-900 font-mono"
                    onClick={handleNextPage}
                >
                    <span className="material-symbols-outlined text-2xl">Mais mapas</span>
                </button>
            </div>
        </div>
    );
};

export default ListaDeMapas;