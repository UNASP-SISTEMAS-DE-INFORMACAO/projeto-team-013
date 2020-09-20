import styled from 'styled-components/native'

export const Container = styled.View`
  width: 94px;
  height: 22px;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  bottom: ${props => props.theme.metrics.basePadding}px;
  right: ${props => props.theme.metrics.basePadding}px;
`

export const ProgressItem = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 50px;
  background: ${props =>
    props.status ? props.theme.colors.inative : props.theme.colors.white};
`
