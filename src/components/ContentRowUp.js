import React from 'react';
import SmallCard from './SmallCard';

let productDB = {
	titulo: 'Products in Data Base',
	cifra: 135,
	colorBorde: 'primary',
	icono: 'fa-clipboard-list'
}

let amount = {
	titulo: 'Amount in products',
	cifra: 546.456,
	colorBorde: 'success',
	icono: 'fa-dollar-sign'
}

let userQ = {
	titulo: 'Users quantity',
	cifra: 38,
	colorBorde: 'warning',
	icono: 'fa-user-check'
}

let cards = [ productDB, amount, userQ];


const ContentRowUp = () => {
    return(
        <div className="row">
			{cards.map((card,i)=>{
				return <SmallCard titulo={card.titulo} cifra={card.cifra} colorBorde={card.colorBorde} icono={card.icono} key={"card" + i}/>
			})}
			

		</div>

    );
}


export default ContentRowUp;