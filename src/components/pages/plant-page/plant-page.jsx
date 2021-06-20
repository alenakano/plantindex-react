import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { search } from '../../../api/api';

function PlantPage() {
  const { id }  = useParams();
  const [plant, setPlant] = useState({});
  useEffect(() => search(`/plant/${id}`, '', setPlant), [id]);
  
  return (<p>
    Planta recuperada<br></br>
    {plant.nome}
  </p>)
}

export default PlantPage;
