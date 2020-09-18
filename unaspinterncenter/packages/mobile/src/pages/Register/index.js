import React, {useState, useRef} from 'react';
import Buttom from '../../components/Buttom';
import BackButtom from '../../components/BackButtom';
import { Container, Logo, Header, WelcomeText, Email, ProgressContainer, Progress, ScrollForm, Form } from './styles';

const Register = ({navigation}) => {
    const [progress, setProgress] = useState(
        [
            {progress:false},
            {progress:true},
            {progress:true}
        ]
    )

    const scrollRef = useRef()
    const onFabPress = () => {
        scrollRef.current?.scrollTo({
            h : 0,
            animated : true
        });
    }
    return (
        <Container>
            <Header>
                <BackButtom/>
                <Logo source={require('../../assets/unasp.png')} />
                <WelcomeText>Ola Alexsander, digite seu email para continuarmos com seu cadastro</WelcomeText>
                <ProgressContainer>
                {progress.map((item) => <Progress status={item.progress}/>)}
                </ProgressContainer>  
            </Header>
            <ScrollForm
            data={progress}
            horizontal={true}
            scrollEnabled={false}
            ref={scrollRef}
            renderItem={() => (<Form><Email placeholder="Digite seu Email"/>
            <Buttom tittle={"Confirmar"} handlePress={() => onFabPress()}/></Form>)}/>
        </Container>
    )
}

export default Register;