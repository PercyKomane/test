import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppState } from '../state/AppStateContext';

export default function SignupScreen() {
  const { login } = useAppState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
      <TextInput placeholder="Full name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.primary} onPress={login}>
        <Text style={styles.primaryText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: 'white' },
  title: { fontSize: 22, fontWeight: '700', color: '#0f172a', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 12, padding: 14, marginBottom: 14 },
  primary: { backgroundColor: '#1aa39a', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 6 },
  primaryText: { color: 'white', fontWeight: '600', fontSize: 16 },
});