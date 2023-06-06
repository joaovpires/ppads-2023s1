import { useNavigate } from 'react-router-dom';
import checkIcon from '../../assets/check-icon.png'
import { ButtonWrapper, Container, Content, ImageContainer } from './AbscenceConfirmation.styles'

export const AbscenceConfirmation: React.FC = () => {
    const history = useNavigate();

    return (
        <Container>
            <Content>
                <ImageContainer>
                    <img src={checkIcon} alt="ícone" />
                </ImageContainer>
                <div>
                    <h1>Falta lançada com sucesso!</h1>
                </div>
                <ButtonWrapper>
                    <button type="button" onClick={() => history('/')}>VOLTAR AO INÍCIO</button>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}