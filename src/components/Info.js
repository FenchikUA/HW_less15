import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px;

@media(min-width: 760px) {
align-items: center;
flex-direction: row;
justify-content: space-between;
gap: 20px;
}
`
const Bolt = styled.span`
font-weight: bold;
`
const Border = styled.span`
border: 1px solid var(--color-text);
padding: 0 7px;
margin-left: 10px;
font-size: 14px;
`
const InfoImage = styled.img`
width: 100%;
@media(min-width: 760px) {
 width: 45%; 
}
`
const InfoTitle = styled.h1``;
const List = styled.div`
width: 100%;
`;
const Grid = styled.div`
display: flex;
flex-direction: column;

@media(min-width: 760px) {
flex-direction: row;
justify-content: space-between;
gap: 40px;
margin-bottom: 40px; 
}

`;

const Fix = styled.div`
width: 100%;
@media(min-width: 760px) {
  width: 45%
}
`

const Info = (props) => {
  console.log(props)
  return (
    <Wrapper>
      <InfoImage src={props.flag} />
      <Fix>
        <InfoTitle>{props.name}</InfoTitle>
        <List>
          <Grid>
            <div>
              <p><Bolt>nativeName: </Bolt>{props.nativeName}</p>
              <p><Bolt>Capital: </Bolt>{props.capital}</p>
              <p><Bolt>Regoin: </Bolt>{props.region}</p>
            </div>
            <div>
              <p><Bolt>Population: </Bolt>{props.population}</p>

              <p><Bolt>Language: </Bolt>{` `}
                {props.languages &&
                  props.languages.map((el) => (
                    <span key={el.name}>{el.name}  </span>
                  ))}
              </p>
              <p><Bolt>Currencies: </Bolt>{` `}
                {props.currencies &&
                  props.currencies.map((cur) => (
                    <span key={cur.name}>{cur.name}  </span>
                  ))}
              </p>
            </div>
          </Grid>
          <p><Bolt>Border Countries: </Bolt>{` `}
            {props.borders &&
              props.borders.map((b) => (
                <Border key={b}>{b} </Border>
              ))}
          </p>
        </List>
      </Fix>
    </Wrapper>
  )
}

export default Info
