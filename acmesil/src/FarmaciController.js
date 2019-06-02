import React from 'react';
import AdminFarmacia from './AdminFarm'
import VisualizarComentarios from './VisualizarComentarios'
 
function FarmController() {

   
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleListItemClick(event, index) {
    console.log("The current index is: ", index );
    setSelectedIndex(index);
  }

  function getCurrentView () {
    if ( selectedIndex === 1) {
      return (
        <AdminFarmacia />
      );
    } else if(selectedIndex === 2) {
        return(
          <VisualizarComentarios />
        );
    } else {
      return(null);
    }
  }

return (
    <div className='prueba'>
        <button key = {1} class="btn btn-secondary" type="button" onClick={event => handleListItemClick(event, 1)}>
         Administrar farmacia
         </button>
         <button key = {2} class="btn btn-secondary" type="button" onClick={event => handleListItemClick(event, 2)}>
         Ver comentarios
         </button>
    <main
      >
        <div className='prueba' />
        {getCurrentView()}
      </main>

    </div>
    
  );
};

export default FarmController