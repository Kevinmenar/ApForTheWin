import React from 'react';
import './AdminFarm.css'

const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];

function ListWithRemoveItem (){
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
					<ol>
                    {list.map(item => (
                            <li key={item.id}>
                            <label>{item.name}</label>
                            <button type="button" onClick={() => handleClick(item.id)}>
                                Remove
                            </button>
                            </li>
                        ))}
					</ol>
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

export default ListWithRemoveItem