import styled from 'styled-components/native'

export const Container = styled.View`
  width: 72px;
  height: 22px;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  bottom: ${props => props.theme.metrics.basePadding}px;
  right: ${props => props.theme.metrics.basePadding}px;
`

export const ProgressItem = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background: ${props =>
    props.status ? props.theme.colors.inative : props.theme.colors.white};
`
