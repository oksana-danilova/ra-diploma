import PropTypes from 'prop-types';

// возвращает пустой div (напр., фоновые картинки платежных систем)
export function EmptyDiv(props) {
    return (
        <div className={props.className}></div>
    );
};

EmptyDiv.propTypes = {
    className: PropTypes.string,
}
