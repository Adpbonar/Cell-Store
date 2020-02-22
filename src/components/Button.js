import styled from 'styled-components'

export const CartButton = styled.button`

i {
  display: flex;
  vertical-align: middle;
  padding: 0.2rem;
  text-decoration-color: transparent !important;
 }
 display: flex;
 vertical-align: middle;
 color: var(--lightBlue);
 text-transform: uppercase;
 text-align: middle;
 font-size: 1.4rem;
 background: transparent;
 border-radius: 0.5rem;
 border: 0.05rem solid var(--lightBolue);
 padding: 0.2rem 0.5rem;
 cursor: pointer;
 background: var(--mainLight);
 transition: all 0.5s ease-in-out;
 &:focus, &:hover, &:visited, &:link, &:active {
  background: var(--mainBlue); 
  color: var(--mainWhite); 
  outline: none;
 }
`