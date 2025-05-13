import PropTypes from 'prop-types'; 

import './StaticPage.css'; 

// статичная страница
// (о магазине, контакты, 404)
export function StaticPage(props) {   

    return (          
        <section className="top-sales">                
            <h2 className="text-center">{props.header}</h2>
            {props.children}
        </section>        
    );
}

StaticPage.propTypes = {
    header: PropTypes.string,
    children: PropTypes.object,
}