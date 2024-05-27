import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-white shadow-lg border-2 border-black p-3 rounded-lg flex flex-col justify-center items-center'>
            <h2 className='text-center'>
                <span className='lg:text-6xl font-bold'>{price}</span>
                <span>/mon</span>
            </h2>
            <h2 className='text-2xl font-semibold text-center my-2'>{name}</h2>
            <div className='p-2 mx-auto flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='p-3 bg-green-500 w-full rounded-xl'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;