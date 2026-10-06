import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./Classes.styles";

export function Classes() {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = [
    "Todas",
    "Yoga",
    "Meditação",
    "Respiração",
  ];

  const courses = [
    {
      title: "Flow Matinal Suave",
      category: "YOGA",
      categoryFilter: "Yoga",
      instructor: "Amanda Costa",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
    },
    {
      title: "Conexão com a Respiração",
      category: "RESPIRAÇÃO",
      categoryFilter: "Respiração",
      instructor: "Davi Santos",
      duration: "10 min",
      image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500",
    },
    {
      title: "Introdução à Presença",
      category: "MEDITAÇÃO",
      categoryFilter: "Meditação",
      instructor: "Sofia Mendes",
      duration: "20 min",
      image:
        "https://images.unsplash.com/photo-1536623975707-c4b7b7a4f9a5?w=500",
    },
    {
      title: "Ritual de Sono Profundo",
      category: "AUTOCUIDADO",
      categoryFilter: "Todas",
      instructor: "Thiago Lima",
      duration: "30 min",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500",
    },
    {
      title: "Despertar do Corpo",
      category: "YOGA",
      categoryFilter: "Yoga",
      instructor: "Amanda Costa",
      duration: "12 min",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
    },
  ];

  const filteredCourses =
    selectedCategory === "Todas"
      ? courses
      : courses.filter(
          (course) => course.categoryFilter === selectedCategory
        );

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

          <Text style={styles.title}>Aulas</Text>

          <View style={styles.headerSpacer} />
        </View>

        {/* Categorias */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  isActive && styles.categoryChipActive,
                ]}
                onPress={() => setSelectedCategory(category)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Lista de aulas */}
        <View style={styles.courseList}>
          {filteredCourses.map((course) => (
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
        </View>

        {/* Mensagem caso não existam aulas */}
        {filteredCourses.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              Nenhuma aula encontrada
            </Text>

            <Text style={styles.emptyText}>
              Tente selecionar outra categoria.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}