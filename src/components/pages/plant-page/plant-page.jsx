import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { search } from '../../../api/api';
import Table from '../../base/table';
import './plant-page.scss'

function PlantPage() {
  let history = useHistory();
  const { id }  = useParams();
  const [plant, setPlant] = useState({});
  useEffect(() => 
    search(`/plant/${id}`, '', setPlant).catch(() => history.push('/404'))
    , [id, history]
  );
  
  return (
  <main className="main">
    <div className="plant-title">
      <div className="plant-title__text title--signature">
        {plant.nome}
      </div>
    </div>
    <section className="plant-board">
      <div className="plant-board__imgContainer">
          <img className="plant-board__img" src={'http://localhost:5000/collection/' + plant.nome + '.jpg'} alt={plant.name}></img>
      </div>
      <div className="plant-board__table" >
        <Table dados={ plant }></Table>
      </div>
    </section>
    <div className="plant-info" dangerouslySetInnerHTML={{ __html: plant.texto }}></div>
  </main>)
}

export default PlantPage;
