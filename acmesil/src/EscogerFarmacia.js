import React from 'react';
import './EscogerFarmacia.css'

const initialList = [ //aqui es donde esperaria que se solicitara la info de las farmacia
  { id: 'a', name: 'Farmacia1' },
  { id: 'b', name: 'Farmacia2' },
  { id: 'c', name: 'Farmacia3' },
];



function EscogerFarmacia(){
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

return (
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3>
				Escoger una farmacia
			</h3>
			<div class="row">
            <div class="col-md-8">
					<h3>
					</h3>
					<div id="card-485932">
                    {list.map(item => (
                            <li key={item.id} class="card" >
                                <a class="card-link" data-toggle="collapse" data-parent="#card-485932" href={item.id}>{item.name}</a>
                                <div id={item.id} class="collapse show">
							</div>
                            </li>
                        ))}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  );
};

export default EscogerFarmacia
