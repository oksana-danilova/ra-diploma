import PropTypes from 'prop-types'; 

import './Form.css';

// универсальная форма
export function Form(props) {
    const { dataId, formClass, visibilityClass, onFormSubmit: handleSubmit, children } = props;
    
    return (
        <form
            data-id={dataId}
            className={`${formClass} ${visibilityClass}`}
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    );
}

Form.propTypes = {
    dataId: PropTypes.string,
    formClass: PropTypes.string,
    visibilityClass: PropTypes.string,
    onFormSubmit: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
}
