import React from 'react';
import './EscogerFarmacia.css'
import FarmController from './FarmaciController'

const initialList = [ //aqui es donde esperaria que se solicitara la info de las farmacia
  { id: 'a', name: 'Farmacia1' },
  { id: 'b', name: 'Farmacia2' },
  { id: 'c', name: 'Farmacia3' },
];



function EscogerFarmacia(){
  const [list, setList] = React.useState(initialList);

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  function handleListItemClick(event, index) {
    console.log("The current index is: ", index );
    setSelectedIndex(index);
  }

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

  function getCurrentView () {
    if ( selectedIndex !== -1) {
      return (
        <FarmController />
      );
    } else {
      return(null);
    }
  }

return (
  <div className='prueba'>
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
                    {list.map((item, index) => (
                            <li key={item.id} class="card" >
                                <a class="card-link" data-toggle="collapse" data-parent="#card-485932" href = "#">
                                {item.name}
                                <button key = {1} class="btn btn-secondary" type="button"  onClick={event => handleListItemClick(event, index)}>
                                Escoger
                                </button>
                                </a>
                            </li>
                        ))}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<main
            >
              <div className='prueba' />
              {getCurrentView()}
            </main>
</div>
  );
};

export default EscogerFarmacia
