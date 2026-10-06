import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import { styles } from './Home.styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Cabeçalho */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greetingTitle}>Olá, Ana</Text>
            <Text style={styles.greetingSubtitle}>Encontre sua paz interior hoje.</Text>
          </View>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' }} 
            style={styles.avatar} 
          />
        </View>

        {/* Campo de Busca */}
        <View style={styles.searchContainer}>
          <Search size={18} color="#A0A0A0" style={styles.searchIcon} />
          <TextInput 
            placeholder="Buscar aulas, instrutores..." 
            placeholderTextColor="#A0A0A0" 
            style={styles.searchInput}
          />
        </View>

        {/* Carrossel: Continue assistindo */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue assistindo</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          <TouchableOpacity style={styles.cardHorizontal} activeOpacity={0.8}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300' }} 
              style={styles.cardImage} 
            />
            <Text style={styles.cardTitle} numberOfLines={1}>Mindfulness no Caos</Text>
            <Text style={styles.cardAuthor}>Por Clara Mendes</Text>
            <Text style={styles.progressText}>70% concluído</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardHorizontal} activeOpacity={0.8}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300' }} 
              style={styles.cardImage} 
            />
            <Text style={styles.cardTitle} numberOfLines={1}>Respiração Diária</Text>
            <Text style={styles.cardAuthor}>Por Lucas Lima</Text>
            <Text style={styles.progressText}>30% concluído</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Seção: Populares */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Populares da semana</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}