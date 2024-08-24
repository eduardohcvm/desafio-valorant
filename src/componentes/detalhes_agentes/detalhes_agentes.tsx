import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Atype } from "../agentes/agentes";

const DetalhesAgentes = () => {
    const { id } = useParams<{ id: string }>(); // Pega o parâmetro 'id' da URL
    const [agente, setAgente] = useState<Atype | null>(null);

    useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setAgente(data.data); // Supondo que o agente específico vem em 'data'
            })
            .catch((error) => console.log(error));
    }, [id]);

    if (!agente) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="flex flex-row bg-red-400 justify-center items-start p-8 rounded-lg gap-8 w-screen h-screen ">
            {/* Imagem do agente */}
            <div className="flex-1 flex justify-center items-center ">
                <img
                    src={agente.fullPortrait}
                    alt={`Imagem do agente ${agente.displayName}`}
                    className="w-3/4 h-auto rounded-lg shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-3xl hover:shadow-white"
                 />
            </div>


            <div className="flex-1 bg-gray-700 p-6 rounded-lg shadow-lg text-white transition-shadow duration-500 ease-in-out hover:shadow-3xl hover:shadow-white">
                <h2 className="text-4xl font-bold mb-4">{agente.displayName}</h2>
                <p className="text-lg mb-4">{agente.description}</p>

                {agente.role && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold">Função: {agente.role.displayName}</h3>
                        <img src={agente.role.displayIcon} alt={agente.role.displayName} className="w-12 h-12 mt-2" />
                        <p className="mt-2">{agente.role.description}</p>
                    </div>
                )}

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold">Habilidades:</h3>
                    <ul className="mt-2">
                        {agente.abilities.map((ability, index) => (
                            <li key={index} className="mb-4">
                                <strong>{ability.displayName}:</strong> {ability.description}
                                {ability.displayIcon && (
                                    <img src={ability.displayIcon} alt={ability.displayName} className="w-8 h-8 ml-2 inline" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DetalhesAgentes;
