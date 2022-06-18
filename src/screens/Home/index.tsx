import React from 'react';
import { CardList, Container, Title, TitleVerdeJade } from './styles';
import { Topbar } from '../../components/layouts/Topbar';
import { Card } from '../../components/Card';
import AddPill from '../../../assets/AddPill.svg';
import MagnifyingGlass from '../../../assets/MagnifyingGlass.svg';
import { useNavigation } from '@react-navigation/native';




export function Home() {
  const navigation = useNavigation();

  function paginaCadastroRemedio(){
    navigation.navigate('ScreenCadastroRemedio')
  }

  function paginaTelaDeConsulta(){
    navigation.navigate('ScreenTelaDeConsulta')
  }


  return (
    <>
      <Topbar />
      <Container>
        <Title>Seja bem vindo, <TitleVerdeJade>João</TitleVerdeJade>!</Title>
        <CardList>
          <Card title="Cadastrar Medicamentos" description="Cadastro  de medicamentos no estoque" icon={<AddPill />} onPress={paginaCadastroRemedio}/>
          <Card title="Consultar Medicamentos" description="Consulta de medicamentos no estoque" icon={<MagnifyingGlass/>}  onPress={paginaTelaDeConsulta}/>
        </CardList>
      </Container>
      </>
  )
}