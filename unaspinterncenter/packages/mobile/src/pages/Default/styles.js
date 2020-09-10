import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.black};
  
`;

export const Logo = styled.Image`
    height: 130px;
    width: 130px;
`;

