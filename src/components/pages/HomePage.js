import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '../List';
import Card from '../Card';
import {useNavigate} from 'react-router-dom';
import { all_countris } from '../config';
import Controls from '../Controls';

const HomePage = ({setCountris, countris}) => {
  const [filterCountry, setFilterCountry] = useState(countris);
  const hendleSearch = (search, region) => {
    let data = [...countris];
    if(region) {
      data = data.filter(coun => coun.region.includes(region))
    }
    if(search) {
      data = data.filter(coun => coun.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilterCountry(data)
  }
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(all_countris).then(
      ({ data }) =>{
        setCountris(data)
        setFilterCountry(data)
      } 
    )
  }, [])
  return (
    <div>
       <Controls onSearch={hendleSearch}/>
        <List>
          {
            filterCountry.map((coun) => {
              const countryInfo = {
                img: coun.flags.png,
                name: coun.name,
                info: [
                  {
                    title: 'Population',
                    description: coun.population.toLocaleString()
                  },
                  {
                    title: 'Region',
                    description: coun.region
                  },
                  {
                    title: 'Capital',
                    description: coun.capital
                  },
                ]
              }
              return (
                <Card key={coun.name} onClick={() => navigate(`/country/${coun.name}`)} {...countryInfo} />
              )
            })
          }
        </List>
    </div>
  )
}

export default HomePage
