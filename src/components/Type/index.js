import {capitalizeFirstLetter} from "../../helper/helper"
import "./style.scss";

const Type = ({pokemon}) => {
    return (
        <div className="type">
           {pokemon.types.map(type => (
                <span key={type.type.name} className={type.type.name}>{capitalizeFirstLetter(type.type.name)}</span>
            ))}
        </div>
    );
}


export default Type;