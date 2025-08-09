import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function WelcomeScreen({ navigation }: NativeStackScreenProps<any>) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/adaptive-icon.png')} style={styles.logo} />
      <Text style={styles.brand}>Medics</Text>
      <Text style={styles.subtitle}>Let's get started!</Text>
      <Text style={styles.helper}>Login to enjoy the features we've provided, and stay healthy!</Text>

      <TouchableOpacity style={styles.primary} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.primaryText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondary} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.secondaryText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
  logo: { width: 80, height: 80, marginBottom: 12 },
  brand: { fontSize: 22, fontWeight: '700', color: '#0f172a', marginBottom: 24 },
  subtitle: { fontSize: 18, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  helper: { fontSize: 13, color: '#64748b', textAlign: 'center', marginBottom: 28 },
  primary: { backgroundColor: '#1aa39a', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 80, width: '100%', alignItems: 'center', marginBottom: 14 },
  primaryText: { color: 'white', fontWeight: '600', fontSize: 16 },
  secondary: { borderWidth: 1, borderColor: '#1aa39a', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 80, width: '100%', alignItems: 'center' },
  secondaryText: { color: '#1aa39a', fontWeight: '600', fontSize: 16 },
});