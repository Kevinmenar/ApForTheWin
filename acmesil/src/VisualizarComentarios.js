import React from 'react';
import './VisualizarComentarios.css'

const initialList = [ //aqui es donde esperaria que se solicitara la info de los comentarios que posee la farmacia
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];


function VisualizarComentarios(){
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

return (
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3>
				Visualizar Comentarios
			</h3>
			<div class="row">
            <div class="col-md-8">
					<h3>
						Comentarios
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

export default VisualizarComentarios
