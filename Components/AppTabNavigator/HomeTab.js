import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Container, Content } from 'native-base';
import CardComponent from '../CardComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const HomeTab = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <CardComponent />
      </Content>
    </Container>
  );
}

export default HomeTab;