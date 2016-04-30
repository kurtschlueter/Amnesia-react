import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class NextPage extends Component {

  componentDidMount(){
    console.log('nextPage did mount')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.regularText}> {this.props.randomString} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },

  regularText: {
    marginTop: 250,
    marginLeft: 85,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

module.exports = NextPage;