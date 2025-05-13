import PropTypes from 'prop-types';

import './Banner.css';

// статичный баннер
export function Banner(props) {
    const { src, text } = props;

    return (
        <div className="banner">
            <img src={src} className="img-fluid" alt={text} />
            <h2 className="banner-header">{text}</h2>
        </div>
    );
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
}