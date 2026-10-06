import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Search,
  ChevronRight,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./Explore.styles";

export function Explore() {
  const navigation = useNavigation();

  const categories = [
    "Todas",
    "Yoga",
    "Meditação",
    "Respiração",
    "Autocuidado",
  ];

  const recommendedCourses = [
    {
      title: "Mindfulness no Caos",
      category: "MEDITAÇÃO",
      instructor: "Clara Mendes",
      duration: "20 min",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800",
    },
    {
      title: "Respiração Diária",
      category: "RESPIRAÇÃO",
      instructor: "Lucas Lima",
      duration: "10 min",
      image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800",
    },
    {
      title: "Aliviando a Ansiedade",
      category: "MEDITAÇÃO",
      instructor: "Dra. Sofia Ramos",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=800",
    },
    {
      title: "Flow Matinal Suave",
      category: "YOGA",
      instructor: "Amanda Costa",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("HomeTab")}
          >
            <ArrowLeft size={19} color="#263125" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Explorar</Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Busca */}
        <View style={styles.searchContainer}>
          <Search size={19} color="#8D928B" />

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar aulas, instrutores..."
            placeholderTextColor="#A5A8A2"
          />
        </View>

        {/* Título */}
        <Text style={styles.sectionTitle}>
          Encontre seu momento
        </Text>

        {/* Categorias */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                index === 0 && styles.categoryChipActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  index === 0 && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Categorias em destaque */}
        <View style={styles.categoryGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
              }}
              style={styles.categoryImage}
            />

            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryCardTitle}>Yoga</Text>
              <Text style={styles.categoryCardSubtitle}>
                Movimento e equilíbrio
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1536623975707-c4b7b7a4f9a5?w=500",
              }}
              style={styles.categoryImage}
            />

            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryCardTitle}>
                Meditação
              </Text>
              <Text style={styles.categoryCardSubtitle}>
                Presença e tranquilidade
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
              }}
              style={styles.categoryImage}
            />

            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryCardTitle}>
                Respiração
              </Text>
              <Text style={styles.categoryCardSubtitle}>
                Uma pausa para você
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500",
              }}
              style={styles.categoryImage}
            />

            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryCardTitle}>
                Autocuidado
              </Text>
              <Text style={styles.categoryCardSubtitle}>
                Cuide do seu bem-estar
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Para você */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Para você</Text>

          <TouchableOpacity style={styles.seeAll}>
            <Text style={styles.seeAllText}>Ver tudo</Text>
            <ChevronRight size={16} color="#6D7F69" />
          </TouchableOpacity>
        </View>

        {/* Lista de recomendações */}
        {recommendedCourses.map((course) => (
          <TouchableOpacity
            key={course.title}
            style={styles.courseCard}
            activeOpacity={0.85}
          >
            <Image
              source={{ uri: course.image }}
              style={styles.courseImage}
            />

            <View style={styles.courseInfo}>
              <Text style={styles.courseCategory}>
                {course.category}
              </Text>

              <Text style={styles.courseTitle}>
                {course.title}
              </Text>

              <Text style={styles.courseDetails}>
                {course.instructor} • {course.duration}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}