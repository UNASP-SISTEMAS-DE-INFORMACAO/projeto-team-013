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

export const BackButtom = styled.TouchableOpacity`
    position: absolute;
    left: 16px;
    top: 16px;
`;

export const WelcomeText = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    text-align: center;
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

export const Buttom = styled.TouchableOpacity`
    width: ${props => props.theme.metrics.screenWidth - (props.theme.metrics.basePadding*2)}px;
    height: 55px;
    background: ${props => props.theme.colors.primary};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    bottom: ${props => props.theme.metrics.basePadding}px;
`;

export const ButtomText = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;

`;