'use client'

import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detalhes_agentes from "../detalhes_agentes/detalhes_agentes";


export interface Atype { //A type é o tipo dos agentes
    uuid: string
    displayName: string
    description: string
    developerName: string
    characterTags?: string[]
    displayIcon: string
    displayIconSmall: string
    bustPortrait?: string
    fullPortrait?: string
    fullPortraitV2?: string
    killfeedPortrait: string
    background?: string
    backgroundGradientColors: string[]
    assetPath: string
    isFullPortraitRightFacing: boolean
    isPlayableCharacter: boolean
    isAvailableForTest: boolean
    isBaseContent: boolean
    role?: Role
    recruitmentData?: RecruitmentData
    abilities: Ability[]
    voiceLine: any
}

export interface Role {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    assetPath: string
}

export interface RecruitmentData {
    counterId: string
    milestoneId: string
    milestoneThreshold: number
    useLevelVpCostOverride: boolean
    levelVpCostOverride: number
    startDate: string
    endDate: string
}

export interface Ability {
    slot: string
    displayName: string
    description: string
    displayIcon?: string
}

const ListaDeAgentes = () => { //função de lista dos agentes

    const [data, setData] = useState<Atype[]>([]); //hook de use state para salvar data (inicia vazio)
    const [search, setSearch] = useState(''); //(hook de use state para search) ainda nao implemtado
    const navigate = useNavigate(); //navigate da biblioteca router

    useEffect(() => { //user Effect é um hook para salvar a api em "data"
        fetch('https://valorant-api.com/v1/agents/')
            .then((response) => response.json())
            .then((data) => {

                setData(data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleAgentClick = (id: string) => { //handle para navegar
        navigate(`/detalhes_agentes/${id}`);
    };

    return (
        <div className={"grid grid-cols-3 gap-8 bg-red-400"}> {/* grid para os agentes (dividir em 3 e criar o botao de detalhes*/}
            {data.map(agente => (
                <div key={agente.uuid} className={"flex flex-col  justify-between mb-4 border " +
                    "border-spacing-4 border-black mt-4 rounded-xl text-3xl bg-black w-1/2" +
                    " text-white font-mono ml-20 shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-3xl hover:shadow-white"}>
                    <div className={"flex flex-row justify-center"}>{agente.displayName}</div>

                    <img className={"w-1/2"} src={agente.displayIcon} alt="Icone do agente" />
                    <button
                        onClick={() => handleAgentClick(agente.uuid)} // Chama a função para redirecionar
                        className={"p-4 rounded-xl text-white bg-red-600"}
                    >
                        Ver detalhes
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListaDeAgentes;