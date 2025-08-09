import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAppState } from '../state/AppStateContext';

export default function ProfileScreen() {
  const { logout } = useAppState();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.avatar} />
        <Text style={styles.name}>Amelia Renata</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}><Text style={styles.statValue}>215bpm</Text><Text style={styles.statLabel}>Heart rate</Text></View>
          <View style={styles.stat}><Text style={styles.statValue}>756cal</Text><Text style={styles.statLabel}>Calories</Text></View>
          <View style={styles.stat}><Text style={styles.statValue}>103lbs</Text><Text style={styles.statLabel}>Weight</Text></View>
        </View>
      </View>

      {[
        'My Saved',
        'Appointment',
        'Payment Method',
        'FAQs',
      ].map((item) => (
        <View key={item} style={styles.listItem}><Text style={styles.listText}>{item}</Text></View>
      ))}

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { backgroundColor: '#1aa39a', height: 220, alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  avatar: { width: 72, height: 72, borderRadius: 36, marginBottom: 12, backgroundColor: 'white' },
  name: { color: 'white', fontSize: 18, fontWeight: '700' },
  statsRow: { flexDirection: 'row', marginTop: 14 },
  stat: { alignItems: 'center', marginHorizontal: 18 },
  statValue: { color: 'white', fontWeight: '700' },
  statLabel: { color: 'white', opacity: 0.8 },
  listItem: { marginHorizontal: 16, marginTop: 16, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 12, padding: 16 },
  listText: { color: '#0f172a' },
  logout: { marginHorizontal: 16, marginTop: 16, borderWidth: 1, borderColor: '#fecaca', backgroundColor: '#fff1f2', borderRadius: 12, padding: 16, alignItems: 'center' },
  logoutText: { color: '#ef4444', fontWeight: '600' },
});