import styled from 'styled-components';

export const StyledWeeksName = styled.div`
background-color: white;
  width: calc(100% / 7);
  height: 44px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  border-bottom: 1px solid ${(props) => props.theme.colors.blue};
`