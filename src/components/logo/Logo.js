import PropTypes from 'prop-types';  

const Logo = ({ title, tagLine }) => {
    
    return ( 
        <div className="logo">
            <h2>{title}</h2>
            <p>{tagLine}</p>
        </div>
     );
}

Logo.propTypes = {
    title: PropTypes.string.isRequired,
    tagLine: PropTypes.string.isRequired 
} 
 
export default Logo;