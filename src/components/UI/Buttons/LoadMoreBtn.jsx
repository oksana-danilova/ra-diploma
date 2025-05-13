import PropTypes from 'prop-types'; 

import { CustomButton } from "./CustomButton";

// кнопка "Загрузить еще"
export function LoadMoreBtn(props) {
    const {
        btnStyle,
        onButtonClick: handleLoadMoreBtnClick,
    } = props;

    return (
        <div 
            className="text-center"
            style={btnStyle}
        >
            <CustomButton           
                type='btn' 
                className="btn btn-outline-primary"
                onButtonClick={handleLoadMoreBtnClick}
            >
                Загрузить ещё
            </CustomButton>
        </div>
    );
}


LoadMoreBtn.propTypes = {    
    btnStyle: PropTypes.object,
    onButtonClick: PropTypes.func,
}
