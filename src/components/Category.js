import React from 'react';
import PropTypes from 'prop-types';



const Category = (props) => {

    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                {props.catTitulo}
                </div>
        </div>
        </div>

	

    );
}

Category.propTypes = {
    titulo: PropTypes.string.isRequired,
}

Category.defaultProps ={
    titulo: 'Sin Título',
}

export default Category;