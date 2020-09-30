import React from 'react';
import PropTypes from 'prop-types';



const SmallCard = (props) => {

    return(
            <div key={props.key} className="col-md-4 mb-4">
				<div className={`card border-left-${props.colorBorde} shadow h-100 py-2`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.titulo}</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
							</div>
							<div className="col-auto">
								<i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
							</div>
						</div>
					</div>
				</div>
			</div>

	

    );
}

SmallCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    colorBorde: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    icono: PropTypes.oneOf(['fa-clipboard-list', 'fa-dollar-sign', 'fa-user-check'])
}

SmallCard.defaultProps ={
    titulo: 'Sin Título',
    colorBorde: 'orangered',
    cifra: 0,
    icono: 'fa-clipboard-list'
}

export default SmallCard;