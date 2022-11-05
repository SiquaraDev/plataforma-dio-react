import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

export const Feed = () => {
  return (
    <>
        <Header autenticate={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo name="Matheus Siquara" image="https://media-exp1.licdn.com/dms/image/C4E03AQHGncBQX3-x5Q/profile-displayphoto-shrink_800_800/0/1654740640279?e=1672876800&v=beta&t=226ygNolxUF-V1q_fON3C6PXXtNoklSWyYUIvm6oXaU" percentual={25}/>
                <UserInfo name="Matheus Siquara" image="https://media-exp1.licdn.com/dms/image/C4E03AQHGncBQX3-x5Q/profile-displayphoto-shrink_800_800/0/1654740640279?e=1672876800&v=beta&t=226ygNolxUF-V1q_fON3C6PXXtNoklSWyYUIvm6oXaU" percentual={65}/>
                <UserInfo name="Matheus Siquara" image="https://media-exp1.licdn.com/dms/image/C4E03AQHGncBQX3-x5Q/profile-displayphoto-shrink_800_800/0/1654740640279?e=1672876800&v=beta&t=226ygNolxUF-V1q_fON3C6PXXtNoklSWyYUIvm6oXaU" percentual={45}/>
                <UserInfo name="Matheus Siquara" image="https://media-exp1.licdn.com/dms/image/C4E03AQHGncBQX3-x5Q/profile-displayphoto-shrink_800_800/0/1654740640279?e=1672876800&v=beta&t=226ygNolxUF-V1q_fON3C6PXXtNoklSWyYUIvm6oXaU" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}