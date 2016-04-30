import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Map extends Component {

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

  goToMap() {
    console.log('entered go to map')
    this.props.navigator.push({
      navigationBarHidden: true,
      component: map,
    });

  }

  goBackHome() {
    console.log('entered go back home')
    this.props.navigator.popN(1)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.regularText}> Map Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },

  regularText: {
    marginTop: 200,
    marginLeft: 85,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

module.exports = Map;