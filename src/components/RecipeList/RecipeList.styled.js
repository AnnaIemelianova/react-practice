import styled from 'styled-components';

export const List = styled.ul`
background-color: ${props => props.theme.colors.background};
display: flex;
flex-wrap: wrap;
gap: 20px;
`;