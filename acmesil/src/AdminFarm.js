import React from 'react';
import './AdminFarm.css'

const initialList = [ //aqui es donde esperaria que se solicitara la info de los medicamanetos que posee la farmacia
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];

const farmaList = [//aqui es donde esperaria que se solicitara la info de las farmacias activas 
    {id: '1', name: 'Farmacia1'},
    {id: '2', name: 'Farmacia2'},
    {id: '3', name: 'Farmacia3'},
    {id: '4', name: 'Farmacia4'},
    {id: '5', name: 'Farmacia5'},
    {id: '6', name: 'Farmacia6'},
];

function AdminFarmacia(){
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

return (
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3>
				Nombre la farmacia
			</h3>
			<div class="row">
            <div class="col-md-8">
					<h3>
						Medicamentos 
					</h3>
					<div id="card-485932">
                    {list.map(item => (
                            <li key={item.id} class="card" >
                                <a class="card-link" data-toggle="collapse" data-parent="#card-485932" href={item.id}>{item.name}</a>
                                <div id={item.id} class="collapse show">
								<div class="card-body">
									Precio del medicamento
								</div>
							</div>
                            </li>
                        ))}
					</div>
				</div>
				<div class="col-md-4">
					<h3>
						Transferir a farmacia.
					</h3>
					<div class="btn-group btn-group-vertical" role="group">
                    {farmaList.map(item => (
                        <button key = {item.id} class="btn btn-secondary" type="button">
                        {item.name}
                        </button>
                        ))}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  );
};

export default AdminFarmacia