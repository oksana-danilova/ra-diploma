import PropTypes from 'prop-types';

import './CustomButton.css';

// отрисовка пользовательской кнопки
export function CustomButton(props) {
    const {
        type,
        className,
        onButtonClick: handleButtonClick,
        children,
    } = props;

    return (
        <button
            type={type}
            className={className}
            onClick={handleButtonClick}
        >
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onButtonClick: PropTypes.func,
    children: PropTypes.string,
}