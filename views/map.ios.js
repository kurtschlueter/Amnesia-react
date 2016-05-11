import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

var Mapbox                = require('react-native-mapbox-gl');

var mapRef = 'mapRef';

var Map = React.createClass({

  mixins: [Mapbox.Mixin],
  annotations: [],

  getInitialState() {
    return {
      zoom: 10,
      annotations: [],
      center: {
        latitude: 40.72052634,
        longitude: -73.97686958312988
      },
    };
  },

  componentDidMount: function(){
    console.log('page 2 did mount')
  },

  goToPage3: function() {
    console.log('entered go to page 3')
    this.props.navigator.push({
      navigationBarHidden: true,
      component: page3,
    });

  },

  goToMap: function() {
    console.log('entered go to map')
    this.props.navigator.push({
      navigationBarHidden: true,
      component: map,
    });

  },

  goBackHome: function() {
    console.log('entered go back home')
    this.props.navigator.popN(1)
  },

  render: function() {
    return (
      <View ref="workspace" style={styles.workspace}>
          <Mapbox
              style={styles.container}
              direction={0}
              rotateEnabled={true}
              scrollEnabled={true}
              zoomEnabled={true}
              showsUserLocation={true}
              ref={mapRef}
              accessToken={'pk.eyJ1IjoicnBjdXJyIiwiYSI6ImNpbXA2bDNxYzAwbzF1M20xYWFlYTV6cXMifQ.AkzcydUVJcyQoeSEDVP39Q'}
              styleURL={this.mapStyles.emerald}
              userTrackingMode={this.userTrackingMode.none}
              centerCoordinate={this.state.center}
              zoomLevel={this.state.zoom}
              annotations={this.state.annotations} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },

  map: {
    flex: 1,
    width: 250,
  },

  workspace: {
    flex: 1,
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