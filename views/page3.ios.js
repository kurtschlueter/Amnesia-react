import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Page3 extends Component {

  componentDidMount(){
    console.log('nextPage did mount')
  }

  goToNextPage() {
    console.log('entered go to nextPage')
    this.props.navigator.popN(1)
  }

  goBackHome() {
    console.log('entered go back home')
    this.props.navigator.popN(2)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.regularText}> {this.props.randomString} </Text>
        <TouchableOpacity onPress={this.goToNextPage.bind(this)}>
          <Text style={styles.buttonText}> [ Go to nextPage ] </Text>
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

module.exports = Page3;