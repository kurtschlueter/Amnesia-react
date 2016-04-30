import React, {
  Component,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Page3 extends Component {


  constructor(props){
    super(props);
    this.state = {
      inputString: "Nothing",
    };
  }

  componentDidMount(){
    console.log('nextPage did mount')
  }

  goToPage2() {
    console.log('entered go to page 2')
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
        <TouchableOpacity onPress={this.goToPage2.bind(this)}>
          <Text style={styles.buttonText}> [ Go back to page 2 ] </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goBackHome.bind(this)}>
          <Text style={styles.buttonText}> [ Go Back Home ] </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputText}
          onChangeText={(inputString) => this.setState({inputString})}
          value={this.state.inputString}
        />
        <Text style={styles.buttonText}> {this.state.inputString} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
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

  inputText: {
    height: 40,
    width: 250,
    marginTop: 30,
    marginLeft: 55,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'white',
  }
});

module.exports = Page3;