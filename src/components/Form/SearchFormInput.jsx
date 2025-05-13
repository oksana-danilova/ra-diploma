import PropTypes from 'prop-types'; 

import './Form.css';

// строка ввода формы поиска в каталоге
export function SearchFormInput(props) {
    const { initialValue, onChange: handleInputChange } = props;
   
    return (
        <input
            className="form-control"
            type="text"
            name="query"
            value={initialValue}
            placeholder="Поиск"
            onChange={handleInputChange}
        />
    );
}

SearchFormInput.propTypes = {
    initialValue: PropTypes.string,
    onChange: PropTypes.func,
}