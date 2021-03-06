// I had to bind this to the onPress function goToNext page because we are using ES6. It does not autobind

var page2 = require('./page2.ios')

import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class HomePage extends Component {

  componentDidMount(){
    console.log('homePage did mount')
  }

  goToPage2() {
    console.log('entered go to next page')
    this.props.navigator.push({
      navigationBarHidden: true,
      component: page2,
      passProps: {randomString: 'Mouuuuuse'}
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> AMNESIA </Text>
        <TouchableOpacity onPress={this.goToPage2.bind(this)}>
          <Text style={styles.next}> [ Go to page 2] </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  title: {
    marginTop: 250,
    marginLeft: 85,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },

  next: {
    marginTop: 30,
    marginLeft: 55,
    color: 'white',
    fontSize: 30,
  },

});

module.exports = HomePage;