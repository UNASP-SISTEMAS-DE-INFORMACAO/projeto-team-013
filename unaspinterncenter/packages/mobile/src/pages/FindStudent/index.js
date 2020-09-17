import React, {useState} from 'react';
import Buttom from '../../components/Buttom';
import BackButtom from '../../components/BackButtom';
import { Container, Logo, Header, WelcomeText, Email, Form, ProgressContainer, Progress} from './styles'
//import RaServices from '../../services/RaServices';

const FindStudent = ({navigation}) => {

    const [progress, setProgress] = useState(
        [
            {progress:false},
            {progress:true},
            {progress:true}
        ]
    )
    const [RA, setRA] = useState()
    /*const getStudent = async () => {
        const student = await RaServices.getStudent(RA)
        alert(student)
    }*/
    return (
    <Container>
    <Header>
        <BackButtom/>
        <Logo source={require('../../assets/unasp.png')} />
        <WelcomeText>Para continuar, por favor insira seu RA abaixo</WelcomeText>
        <ProgressContainer>
                {progress.map((item) => <Progress status={item.progress}/>)}
        </ProgressContainer>  
    </Header>
    <Form>
        <Email placeholder="Digite seu RA"/>
        <Buttom tittle={"Confirmar"} />
    </Form>
    </Container>
    )
}

export default FindStudent;