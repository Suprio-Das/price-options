import PropTypes from 'prop-types';

const Feature = ({ feature }) => {
    return (
        <div className='text-wrap my-3'>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;