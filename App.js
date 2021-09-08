import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

  useEffect(() => {
    getDeviceTypeAsync()
    getUptimeAsync()
    getMaxMemoryAsync()
    getPlatformFeaturesAsync()
    hasPlatformFeatureAsync('amazon.hardware.fire_tv')
  }, [])

  async function getDeviceTypeAsync() {
    const data = await Device.getDeviceTypeAsync()
    console.log(`${Device.deviceName} has getDeviceTypeAsync: ${data}\n ---------`)
  }

  async function getUptimeAsync() {
    const data = await Device.getUptimeAsync()
    console.log(`${Device.deviceName} has getDeviceUptimeAsync: ${data} milliseconds since last reboot\n ---------`)
  }
  
  async function getMaxMemoryAsync() {
    const data = await Device.getMaxMemoryAsync();
    console.log(`${Device.deviceName} has getMaxMemoryAsync: ${data}\n ---------`)
  }
  
  async function getPlatformFeaturesAsync() {
    const data = await Device.getPlatformFeaturesAsync();
    console.group(`${Device.deviceName} has getPlatformFeaturesAsync: ${data}\n ---------`)
  }
  
  async function hasPlatformFeatureAsync(feature) {
    const data = await Device.hasPlatformFeatureAsync(feature);
    console.group(`${Device.deviceName} has hasPlatformFeatureAsync: ${data}\n ---------`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header1}>Constants</Text>
        <Ionicons name="construct-outline" size={24} color="black" />
      </View>

      <Text style={styles.text}>Device.brand: {Device.brand}</Text>
      <Text style={styles.text}>Device.manufacturer: {Device.manufacturer}</Text>
      <Text style={styles.text}>Device.modelName: {Device.modelName}</Text>
      <Text style={styles.text}>Device.modelId: {Device.modelId} [only in IOS]</Text>
      <Text style={styles.text}>Device.designName: {Device.designName}</Text>
      <Text style={styles.text}>Device.productName: {Device.productName}</Text>
      <Text style={styles.text}>Device.deviceYearClass: {Device.deviceYearClass}</Text>
      <Text style={styles.text}>Device.totalMemory: {Device.totalMemory}</Text>
      <Text style={styles.text}>Device.supportedCpuArchitectures: {Device.supportedCpuArchitectures}</Text>
      <Text style={styles.text}>Device.osVersion: {Device.osVersion}</Text>
      <Text style={styles.text}>Device.osBuildId: {Device.osBuildId}</Text>
      <Text style={styles.text}>Device.osInternalBuildId: {Device.osInternalBuildId}</Text>
      <Text style={styles.text}>Device.osBuildFingerprint: {Device.osBuildFingerprint}</Text>
      <Text style={styles.text}>Device.platformApiLevel: {Device.platformApiLevel}</Text>
      <Text style={styles.text}>Device.deviceName: {Device.deviceName}</Text>

      <View style={styles.headerContainer}>
        <Text style={styles.header1}>Methods</Text>
        <MaterialCommunityIcons name="function-variant" size={24} color="black" />
      </View>

      <Text>Device.getDeviceTypeAsync</Text>
      <Text>Device.getUptimeAsync</Text>
      <Text>Device.getMaxMemoryAsync</Text>
      <Text>Device.getPlatformFeaturesAsync</Text>
      <Text>Device.hasPlatformFeatureAsync</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-start',
  },
  text: {
  },
  header1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
