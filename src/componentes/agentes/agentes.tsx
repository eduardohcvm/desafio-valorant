'use client'

import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Detalhes_agentes from "../detalhes_agentes/detalhes_agentes";

export interface Atype {
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

const ListaDeAgentes = () => {

    const [data, setData] = useState<Atype[]>([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents/')
            .then((response) => response.json())
            .then((data) => {
                // A API retorna os agentes dentro do campo "data"
                setData(data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleAgentClick = (id:string) =>{
        navigate(`/detalhes_agentes/${id}`)
    }

    return (
        <div className={"grid grid-cols-3 gap-10"}>
            {data.map(agente => (
                <div key={agente.uuid} className={"flex flex-col gap-9 justify-between mb-4 border border-spacing-4 border-black mt-6 rounded-xl text-3xl bg-black w-1/2 text-white font-mono"}>
                    Agente: {agente.displayName}
                    <img className={"w-1/2"} src={agente.displayIcon} alt="Icone do agente" />
                    <button
                        onClick={() => handleAgentClick(agente.uuid)} // Chama a função para redirecionar
                        className={"p-4 rounded-xl text-white bg-red-600"}
                    >
                        <Detalhes_agentes/>
                        Ver detalhes
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListaDeAgentes;