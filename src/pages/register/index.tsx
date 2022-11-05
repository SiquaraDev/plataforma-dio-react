import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Title, Column, TitleRegister, SubtitleRegister, AvisoText, LoginText, ContaText, Row, Wrapper } from './styles';
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import { IFormRegisterData } from "./types";


const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email não é válido.').required('Campo obrigatório!'),
    password: yup.string().min(6, 'Mínimo 6 caracteres.').required('Campo obrigatório!'),
  }).required();

export const Register = () => {
    
    const { control, handleSubmit, formState: { errors } } = useForm<IFormRegisterData>({
        resolver: yupResolver(schema), 
        mode: "onChange"
    });

    const navigate = useNavigate();

    const onSubmit = async (formData: IFormRegisterData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}`);
            if (data.length === 1) {
                alert('Email já cadastrado anteriormente.');
            } else {
                const { data } = await api.get('/users')
                await api.post('/users', { id: data.length+1, name: formData.name, email: formData.email, password: formData.password });
                navigate('/login');
            }
        }catch{
            alert('Houve um erro, tente novamente.');
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" control={control} errorMessage={errors?.name?.message} placeholder="Nome Completo" leftIcon={<MdPerson />}/>
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <AvisoText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de 
                        Privacidade e os Termos de Uso da DIO.
                    </AvisoText>
                    <Row>
                        <ContaText>Já tenho conta. </ContaText>
                        <LoginText href="/login">Fazer login</LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}