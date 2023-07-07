import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import {searchCountry} from '../config';
import { Button } from '../Button';
import Info from '../Info';

const OnePage = () => {
  const {name} = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  console.log(country)
  useEffect(() => {
    axios.get(searchCountry(name)).then(
      ({data}) => setCountry(data[0]))
  },[name])

  return (
    <div>
      <Button onClick={()=> navigate(-1)}><IoArrowBack/>Back</Button>
        <Info
          {...country} 
        />
    </div>
  )
}

export default OnePage
