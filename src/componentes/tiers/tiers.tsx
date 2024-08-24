import { useEffect, useState } from "react";

export interface Root {
    status: number;
    data: Ttype[];
}

export interface Ttype {
    uuid: string;
    assetObjectName: string;
    tiers: Tier[];
    assetPath: string;
}

export interface Tier {
    tier: number;
    tierName: string;
    division: string;
    divisionName: string;
    color: string;
    backgroundColor: string;
    smallIcon?: string;
    largeIcon?: string;
    rankTriangleDownIcon?: string;
    rankTriangleUpIcon?: string;
}

const ListaDeTiers = () => {
    const [tiers, setTiers] = useState<Ttype[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://valorant-api.com/v1/competitivetiers')
            .then((response) => response.json())
            .then((data) => {
                const allEpisodes = data.data;
                const lastEpisode = allEpisodes[allEpisodes.length - 1];
                setTiers([lastEpisode]);
            })
            .catch((error) => console.log(error));
    }, []);

    const filterTiers = tiers[0]?.tiers.filter((t) =>
        t.tierName.toLowerCase().includes(search.toLowerCase())
    ) || [];

    return (
        <div className="bg-red-400 min-h-screen p-10  align-baseline min-w-screen flex flex-col items-center ">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Procure por um tier"
                className="p-2 border rounded mb-6"
            />
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-2  w-1/2 h-1/2">
                {tiers.length > 0 && (
                    <div key={tiers[0].uuid} className="p-6 bg-cyan-950 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 flex justify-center text-white ">Lista dos tiers do Valorant</h2>
                        <div className="flex flex-wrap gap-4 justify-center ">
                            {filterTiers.map((t) => (
                                <div
                                    key={t.tier}
                                    className="flex flex-col items-center p-4 bg-gray-300 rounded-lg w-32"
                                >
                                    <img src={t.smallIcon} alt={t.tierName} className="w-12 h-12" />
                                    <p className="mt-2 text-center">{t.tierName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <img src="" alt=""/>
        </div>
    );
};

export default ListaDeTiers;
