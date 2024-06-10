import  { React, useState, useEffect } from 'react';
import "./style.scss";
import { capitalizeFirstLetter } from "../../helper/helper";

const Weaknesses = ({pokemon}) => {
    const [weaknesses, setWeaknesses] = useState([]);


    useEffect(() => {
        const fetchWeaknesses = async () => {
            const promises = pokemon.types.map(async (type) => {
                const typeResponse = await fetch(type.type.url);
                const typeData = await typeResponse.json();
                return typeData.damage_relations.double_damage_from.map((type) => type.name);
            });
        
            const results = await Promise.all(promises);
            const uniqueWeaknesses = [...new Set(results.flat())];
            setWeaknesses(uniqueWeaknesses);
        };

        fetchWeaknesses();
    }, [pokemon]);

    return (
        <div className="weaknesses">
            {weaknesses.map((weakness, index) => (
                <span key={index} className={`weakness-tag ${weakness}`}>
                    {capitalizeFirstLetter(weakness)}
                </span>
            ))}
        </div>
    );
};

export default Weaknesses;