import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, PermissionsAndroid, Alert, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [position, setPosition] = useState({
    latitude: 20.5937, // Latitude of India
    longitude: 78.9629, // Longitude of India
    latitudeDelta: 12, // Zoom level
    longitudeDelta: 12,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Request location permission
        await requestLocationPermission();

        // Get current position
        const pos: Position= await new Promise((resolve, reject) => {
          Geolocation.getCurrentPosition(resolve, reject);
        });
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchLocation();
  }, []);

  // Function to request location permission
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      } else if (Platform.OS === 'ios') {
        // For iOS, permissions are handled differently
        // You can use the Permissions API for iOS
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={position}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}>
        <Marker
          title='You are here'
          description='This is your current location'
          coordinate={position}
        />
      </MapView>
      <View style={styles.locationDetailsContainer}>
        <Text style={styles.locationText}>
          Latitude: {position.latitude}
        </Text>
        <Text style={styles.locationText}>
          Longitude: {position.longitude}
        </Text>
        {/* Add more location details as needed */}
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 700,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden', // Added overflow to ensure borderRadius is applied
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationDetailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
