import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';
import React from 'react'

const InputContainer = styled.label`
background-color: var(--color-base);
padding: 5px 10px;
display: flex;
align-items: center;
width: 100%;
margin-bottom: 15px;

@media(min-width: 760px) {
  width: 200px;
}
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country'
})`
margin-left: 15px;
border: none;
outline: none;
background-color: var(--color-bg);
color: var(--color-text);
`;

const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
    <IoSearch/>
    <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search
