import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { search } from '../../../api/api';
import './plant-page.scss'

function PlantPage() {
  let history = useHistory();
  const { id }  = useParams();
  const [plant, setPlant] = useState({});
  useEffect(() => 
    search(`/plant/${id}`, '', setPlant).catch(() => history.push('/404'))
    , [id]
  );
  
  return (<main className="main">
    <div className="plant-info">
      <div dangerouslySetInnerHTML={{ __html: plant.texto }}></div>
    </div>
  </main>)
}

export default PlantPage;
