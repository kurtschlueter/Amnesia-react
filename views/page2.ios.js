var page3 = require('./page3.ios')

import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class NextPage extends Component {

  componentDidMount(){
    console.log('page 2 did mount')
  }

  goToPage3() {
    console.log('entered go to page 3')
    this.props.navigator.push({
      navigationBarHidden: true,
      component: page3,
    });

  }

  goBackHome() {
    console.log('entered go back home')
    this.props.navigator.popN(1)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.regularText}> {this.props.randomString} </Text>
        <TouchableOpacity onPress={this.goToPage3.bind(this)}>
          <Text style={styles.buttonText}> [ Go to Page 3 ] </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goBackHome.bind(this)}>
          <Text style={styles.buttonText}> [ Go Back Home ] </Text>
        </TouchableOpacity>
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
    marginTop: 200,
    marginLeft: 85,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },

  buttonText: {
    marginTop: 30,
    marginLeft: 55,
    color: 'white',
    fontSize: 30,
  },

});

module.exports = NextPage;