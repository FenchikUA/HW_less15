import React, {useState, useEffect} from 'react'
import Search from './Search'
import { ProjectSelect } from './ProjectSelect';
import { styled } from 'styled-components';

const options = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
display: flex;
flex-direction: column;

@media(min-width: 760px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
`

const Controls = ({onSearch}) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search,regionValue)
  }, [search,region])
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <ProjectSelect options={options} placeholder='Search country...' isClearable isSearchable={false} value={region} onChange={setRegion}/>
    </Wrapper>
  )
}

export default Controls
