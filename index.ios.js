var HomePage = require('./views/homePage.ios')

import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

class AmnesiaReact extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          navigationBarHidden: true,
          component: HomePage
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

AppRegistry.registerComponent('AmnesiaReact', () => AmnesiaReact);
