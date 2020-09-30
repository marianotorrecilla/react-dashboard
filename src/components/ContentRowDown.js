import React from 'react';
import Category from './Category';
const paste = require ('../assets/images/product_dummy.svg')

let cat1 = {
	catTitulo: 'Category 01',
}

let cat2 = {
	catTitulo: 'Category 02',
}

let cat3 = {
	catTitulo: 'Category 03',
}

let cat4 = {
	catTitulo: 'Category 04',
}

let cat5 = {
	catTitulo: 'Category 05',
}

let cat6 = {
	catTitulo: 'Category 06',
}

let categorias = [ cat1, cat2, cat3, cat4, cat5, cat6]

const ContentRowDown = () => {
    return(
        <div className="row">
						
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
					</div>
					<div className="card-body">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" width="100%" src={paste} alt="image dummy"/>
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
						<a target="_blank" rel="nofollow" href="/">View product detail</a>
					</div>
				</div>
			</div>

						
			<div className="col-lg-6 mb-4">						
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
					</div>
				    <div className="card-body">
						<div className="row">
							{categorias.map((categoria,i)=>{
								return <Category catTitulo={categoria.catTitulo}/>
							})}
							
							
                            
                            
										
						</div>
					</div>
				</div>
			</div>
	    </div>

    );
}


export default ContentRowDown;