import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    background: ${props => props.theme.colors.white};
  
`;

export const Logo = styled.Image`
    height: 93px;
    width: 93px;
`;

export const Header = styled.View`
    flex-direction: column;
    background: ${props => props.theme.colors.primary};
    width: 100%;
    height: 369px;
    justify-content: space-around;
    align-items: center;
    padding: ${props => props.theme.metrics.basePadding *2}px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

`;

export const Email = styled.TextInput`
    width: ${props => props.theme.metrics.screenWidth - (props.theme.metrics.basePadding*2)}px;
    height: 55px;
    align-self: center;
    padding: ${props => props.theme.metrics.basePadding}px;
    background: ${props => props.theme.colors.white};
    margin-top: ${props => props.theme.metrics.baseMargin}px;
    border: 1px;
    border-color: ${props => props.theme.colors.grey};
    border-radius: ${props => props.theme.metrics.baseRadius}px;
  
`;

export const WelcomeText = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    text-align: center;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: center;

`;

export const ProgressContainer = styled.View`
    width: 94px;
    height: 22px;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    bottom: ${props => props.theme.metrics.basePadding}px;
    right: ${props => props.theme.metrics.basePadding}px;


`;

export const Progress = styled.TouchableOpacity`
    width: 22px;
    height: 22px;
    border-radius: 50px;
    background: ${props => props.status ? props.theme.colors.inative : props.theme.colors.white};

`;