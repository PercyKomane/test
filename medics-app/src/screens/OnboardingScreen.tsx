import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppState } from '../state/AppStateContext';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Consult only with a doctor you trust',
    image: require('../../assets/splash.png'),
  },
  {
    key: '2',
    title: 'Find a lot of specialist doctors in one place',
    image: require('../../assets/icon.png'),
  },
  {
    key: '3',
    title: 'Get connected with our online consultation',
    image: require('../../assets/adaptive-icon.png'),
  },
];

export default function OnboardingScreen() {
  const { completeOnboarding } = useAppState();
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList>(null);

  function next() {
    if (index < slides.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1 });
    } else {
      completeOnboarding();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={completeOnboarding}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const i = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(i);
        }}
        renderItem={({ item }) => (
          <View style={{ width, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
          ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={next}>
          <Text style={styles.nextText}>{index === slides.length - 1 ? 'Start' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  skip: { position: 'absolute', top: 50, right: 24, zIndex: 1 },
  skipText: { color: '#64748b', fontSize: 14 },
  image: { width: width * 0.7, height: width * 0.9, marginTop: 60 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    width: width * 0.82,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  title: { fontSize: 18, color: '#0f172a' },
  footer: { position: 'absolute', bottom: 30, left: 24, right: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  dots: { flexDirection: 'row', gap: 6 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#cbd5e1' },
  dotActive: { backgroundColor: '#1aa39a', width: 16 },
  nextButton: { backgroundColor: '#1aa39a', borderRadius: 24, paddingVertical: 12, paddingHorizontal: 22 },
  nextText: { color: 'white', fontWeight: '600' },
});