import styled from 'styled-components';

export const StyledHeader = styled.div`
  .header {
  background-color: ${(props) => props.theme.colors.blue};
  text-align: center;
  min-height: 2rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  }
  .header .previous {
  text-align: left;
  margin-left: 1rem;
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  width: 2em;

}

.header .next {
  text-align: right;
  margin-right: 1rem;
   border: none;
  background-color: ${(props) => props.theme.colors.blue};
  width: 2em;
}
`