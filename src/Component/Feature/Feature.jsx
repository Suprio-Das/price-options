import PropTypes from 'prop-types';
import { MdVerifiedUser } from "react-icons/md";

const Feature = ({ feature }) => {
    return (
        <div className='text-wrap my-3'>
            <p><MdVerifiedUser className='inline mr-2'></MdVerifiedUser>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;