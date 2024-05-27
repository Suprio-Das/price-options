import { useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const [options, setOptions] = useState([])
    fetch('priceOptions.json')
        .then(res => res.json())
        .then(data => setOptions(data));
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-36">
            {
                options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;