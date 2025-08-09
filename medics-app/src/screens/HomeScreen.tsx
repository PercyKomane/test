import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.heading}>Find your desire health solution</Text>
      <TextInput placeholder="Search doctor, drugs, articles..." style={styles.search} />

      <View style={styles.quickRow}>
        {['Doctor','Pharmacy','Hospital','Ambulance'].map((item) => (
          <View key={item} style={styles.quickItem}>
            <View style={styles.quickIcon} />
            <Text style={styles.quickText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Early protection for your family health</Text>
          <TouchableOpacity style={styles.bannerBtn}><Text style={styles.bannerBtnText}>Learn more</Text></TouchableOpacity>
        </View>
        <Image source={require('../../assets/splash.png')} style={{ width: 100, height: 100 }} />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Doctor</Text>
        <TouchableOpacity><Text style={styles.link}>See all</Text></TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 24 }}>
        {[1,2,3,4].map((i) => (
          <View key={i} style={styles.card}>
            <Image source={require('../../assets/icon.png')} style={styles.avatar} />
            <Text style={styles.cardTitle}>Dr. Example {i}</Text>
            <Text style={styles.cardSub}>Cardiologist</Text>
            <Text style={styles.cardMeta}>4.{i}  •  1.{i}km away</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  heading: { fontSize: 22, fontWeight: '700', color: '#0f172a', paddingHorizontal: 24, paddingTop: 16 },
  search: { marginTop: 12, marginHorizontal: 24, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 12, padding: 14 },
  quickRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 16, paddingHorizontal: 12 },
  quickItem: { alignItems: 'center' },
  quickIcon: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#e6f7f5', marginBottom: 6 },
  quickText: { color: '#334155' },
  banner: { margin: 24, backgroundColor: '#e6f7f5', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center' },
  bannerTitle: { fontSize: 16, color: '#0f172a', marginBottom: 8 },
  bannerBtn: { backgroundColor: '#1aa39a', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, alignSelf: 'flex-start' },
  bannerBtnText: { color: 'white', fontWeight: '600' },
  sectionHeader: { marginTop: 8, paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0f172a' },
  link: { color: '#1aa39a' },
  card: { width: 160, marginRight: 16, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 16, padding: 12 },
  avatar: { width: 48, height: 48, borderRadius: 24, marginBottom: 8 },
  cardTitle: { fontWeight: '700', color: '#0f172a' },
  cardSub: { color: '#64748b', marginBottom: 4 },
  cardMeta: { color: '#8b9aa8', fontSize: 12 },
});