import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class HomePage extends Component {

  componentDidMount(){
    console.log('componenet did mount')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> AMNESIA </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  welcome: {
    marginTop: 300,
    marginLeft: 85,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

module.exports = HomePage;