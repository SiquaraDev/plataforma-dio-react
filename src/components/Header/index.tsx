import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button } from '../Button';
import logo from '../../assets/logo-dio.png'
import { IHeader } from './types';

import {
    SearchInputContainer,
    Container,
    Logo,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';


 export const Header = ({autenticate}: IHeader) => {

    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/login');
    }
    const handleNavigateRegister = () => {
        navigate('/register');
    }
    const handleNavigateHome = () => {
        navigate('/');
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo onClick={handleNavigateHome} src={logo} alt="Logo da dio" />
                {autenticate ? ( 
                    <>
                        <SearchInputContainer>
                            <Input placeholder='Buscar...'/>
                        </SearchInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticate ? (
                    <UserPicture src='https://media-exp1.licdn.com/dms/image/C4E03AQHGncBQX3-x5Q/profile-displayphoto-shrink_800_800/0/1654740640279?e=1672876800&v=beta&t=226ygNolxUF-V1q_fON3C6PXXtNoklSWyYUIvm6oXaU'/>
                ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button onClick={handleNavigateLogin} title="Entrar" />
                        <Button onClick={handleNavigateRegister} title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}
