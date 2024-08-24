import { useEffect, useState } from "react";

export interface Root {
    status: number
    data: Ttype[]
}

export interface Ttype {
    uuid: string
    assetObjectName: string
    tiers: Tier[]
    assetPath: string
}

export interface Tier {
    tier: number
    tierName: string
    division: string
    divisionName: string
    color: string
    backgroundColor: string
    smallIcon?: string
    largeIcon?: string
    rankTriangleDownIcon?: string
    rankTriangleUpIcon?: string
}

const ListaDeTiers = () => {
    const [tiers, setTiers] = useState<Ttype[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://valorant-api.com/v1/competitivetiers')
            .then((response) => response.json())
            .then((data) => setTiers(data.data))
            .catch((error) => console.log(error));
    }, []);

    const filterTiers = tiers.filter((tier) =>
        tier.tiers.some((t) => t.tierName.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Procure por um tier"
                className="p-2 border rounded"
            />
            <div className="grid grid-cols-3 gap-10">
                {filterTiers.map((tier) => (
                    <div key={tier.uuid} className="flex flex-col gap-4 p-4 border rounded">
                        <h2>{tier.assetObjectName}</h2>
                        {tier.tiers.map((t) => (
                            <div key={t.tier} className="flex flex-col items-center">
                                <img src={t.smallIcon} alt={t.tierName} className="w-10 h-10" />
                                <p>{t.tierName}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaDeTiers;
