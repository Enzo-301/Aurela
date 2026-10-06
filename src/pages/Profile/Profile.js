import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowRight,
  Heart,
  Settings,
  HelpCircle,
  Pencil,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./Profile.styles";

export function Profile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* PERFIL */}
        <View style={styles.profileHeader}>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
            }}
            style={styles.profileImage}
          />

          <Text style={styles.name}>Ana Silva</Text>

          <Text style={styles.email}>
            ana.silva@gmail.com
          </Text>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
          >
            <Pencil size={15} color="#66806A" />

            <Text style={styles.editButtonText}>
              Editar perfil
            </Text>
          </TouchableOpacity>

        </View>

        {/* JORNADA */}
        <Text style={styles.sectionTitle}>
          Sua jornada de bem-estar
        </Text>

        <View style={styles.statsCard}>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>
              Aulas concluídas
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>180</Text>
            <Text style={styles.statLabel}>
              Minutos de paz
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>
              Dias seguidos
            </Text>
          </View>

        </View>

        {/* OPÇÕES */}
        <View style={styles.optionsContainer}>

          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.8}
          >
            <View style={styles.optionLeft}>

              <View style={styles.iconContainer}>
                <Heart size={18} color="#66806A" />
              </View>

              <View>
                <Text style={styles.optionTitle}>
                  Favoritos
                </Text>

                <Text style={styles.optionSubtitle}>
                  Suas aulas salvas
                </Text>
              </View>

            </View>

            <View style={styles.optionRight}>
              <Text style={styles.optionValue}>
                4 aulas
              </Text>

              <ArrowRight size={17} color="#858982" />
            </View>

          </TouchableOpacity>

          <View style={styles.optionDivider} />

          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.8}
          >
            <View style={styles.optionLeft}>

              <View style={styles.iconContainer}>
                <Settings size={18} color="#66806A" />
              </View>

              <View>
                <Text style={styles.optionTitle}>
                  Configurações
                </Text>

                <Text style={styles.optionSubtitle}>
                  Preferências e conta
                </Text>
              </View>

            </View>

            <ArrowRight size={17} color="#858982" />

          </TouchableOpacity>

          <View style={styles.optionDivider} />

          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.8}
          >
            <View style={styles.optionLeft}>

              <View style={styles.iconContainer}>
                <HelpCircle size={18} color="#66806A" />
              </View>

              <View>
                <Text style={styles.optionTitle}>
                  Ajuda e suporte
                </Text>

                <Text style={styles.optionSubtitle}>
                  Tire suas dúvidas
                </Text>
              </View>

            </View>

            <ArrowRight size={17} color="#858982" />

          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}