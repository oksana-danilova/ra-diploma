import PropTypes from 'prop-types'; 

import { CustomButton } from "../Buttons/CustomButton";

// вывод сообщения
export function Alert({ type, text, btnText, btnOnClick }) {
    const btnView = !!btnText && 
        <CustomButton           
            type='btn' 
            className="btn btn-outline-primary"
            onButtonClick={btnOnClick}
        >
            {btnText}
        </CustomButton>

    return (
        <div className="text-center">
            <div className={`alert text-center alert-${type}`} role="alert">
                {text}
            </div>
            {btnView}
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    btnText: PropTypes.string,
    btnOnClick: PropTypes.func,
}