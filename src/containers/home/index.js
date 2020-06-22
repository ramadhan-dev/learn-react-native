import React from 'react'
import { View, Text } from 'react-native'
import Container from '../../layouts/container';
import Content from '../../layouts/content';
import InputSearch from './components/search';
import Promo from './components/promo';
import MenuIcon from '../../layouts/menuIcon';
import Gopay from './components/gopay';


const Home = (props) => {
  return (
    <Container>
      <Content background={"red"} direction="row">
        <InputSearch />
        <Promo />
      </Content>

      <Content background="yellow" marginTop="15" radius="5" >
        <Gopay/>
      </Content>
    </Container>

  )
}

export default Home