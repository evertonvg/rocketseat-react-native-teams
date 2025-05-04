import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Text>Groups</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

