import PropTypes from 'prop-types';

const Link = ({ route }) => {
    const { name, path } = route;
    return (
        <div className=''>
            <li className='mr-12 font-semibold hover:bg-black px-3 py-1 hover:text-white hover:rounded-md'><a href={path}>{name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;