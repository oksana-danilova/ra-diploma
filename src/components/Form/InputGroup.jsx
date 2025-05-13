import PropTypes from 'prop-types'; 

import './Form.css';

// поле ввода для формы заказа
export function InputGroup(props) {
    const { htmlFor, text, inputId, placeholder } = props;
   
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{text}</label>
            <input
                className="form-control"
                id={inputId}
                placeholder={placeholder}
                required
            />
        </div>        
    );
}

InputGroup.propTypes = {
    htmlFor: PropTypes.string,
    text: PropTypes.string,
    inputId: PropTypes.string,
    placeholder: PropTypes.string
}