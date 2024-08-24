'use client'

import {Atype} from "../agentes/agentes";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom"; // Importa useParams para pegar o ID da URL

export default function Detalhes_agentes() {
    const { id } = useParams(); // Pega o ID da URL
    const [data, setData] = useState<Atype | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://valorant-api.com/v1/agents/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.data);
                })
                .catch((error) => console.log(error));
        }
    }, [id]);

    return (
        <div>
            {data ? (
                <div key={data.uuid} className={"flex flex-col items-center gap-4 bg-slate-400 text-slate-200 font-semibold text-xl p-8 rounded-2xl"}>
                    <h1>{data.displayName}</h1>
                    <img src={data.fullPortrait} alt="imagem completa do agente" className={"w-80 h-80 rounded-2xl object-contain"} />
                    <p>{data.description}</p>
                </div>
            ) : (
                <p>Carregando detalhes do agente...</p>
            )}
        </div>
    );
}
