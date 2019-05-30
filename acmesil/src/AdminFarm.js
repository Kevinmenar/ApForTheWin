import React from 'react';
import './AdminFarm.css'

const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];

function AdminFarmacia(){
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };
/*{list.map(item => (
                            <li key={item.id}>
                            <label margin={30} padding={30}>{item.name}</label>
                            <button margin={30} padding={30} type="button" onClick={() => handleClick(item.id)}>
                                Remove
                            </button>
                            </li>
                        ))}*/
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
						 
						<button class="btn btn-secondary" type="button">
							Left
						</button> 
						<button class="btn btn-secondary" type="button">
							Center
						</button> 
						<button class="btn btn-secondary" type="button">
							Right
						</button> 
						<button class="btn btn-secondary" type="button">
							Justify
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  );
};

export default AdminFarmacia