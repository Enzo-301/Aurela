import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  // -------------------------
  // CABEÇALHO
  // -------------------------

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8E4DC",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    marginLeft: 15,
    fontSize: 30,
    color: "#263125",
    fontFamily: "serif",
  },

  headerSpacer: {
    width: 38,
  },

  // -------------------------
  // BUSCA
  // -------------------------

  searchContainer: {
    height: 48,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E8E4DC",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 8,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: "#263125",
    fontFamily: "poppinsRegular",
  },

  // -------------------------
  // SEÇÕES
  // -------------------------

  sectionTitle: {
    fontSize: 17,
    color: "#263125",
    fontFamily: "serif",
    marginTop: 27,
    marginBottom: 13,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  seeAllText: {
    fontSize: 12,
    color: "#7C817B",
    fontFamily: "poppinsRegular",
  },

  // -------------------------
  // CHIPS
  // -------------------------

  categoriesContainer: {
    paddingRight: 10,
  },

  categoryChip: {
    height: 34,
    paddingHorizontal: 15,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E3DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  categoryChipActive: {
    backgroundColor: "#628263",
    borderColor: "#628263",
  },

  categoryText: {
    fontSize: 11,
    color: "#777C75",
    fontFamily: "poppinsMedium",
  },

  categoryTextActive: {
    color: "#FFFFFF",
  },

  // -------------------------
  // GRID DE CATEGORIAS
  // -------------------------

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 5,
  },

  categoryCard: {
    width: "48%",
    height: 108,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EAE5DD",
  },

  categoryImage: {
    width: "100%",
    height: "100%",
  },

  categoryOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 11,
    paddingVertical: 9,
    backgroundColor: "rgba(25, 35, 27, 0.58)",
  },

  categoryCardTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "poppinsSemiBold",
  },

  categoryCardSubtitle: {
    color: "#F2F2F2",
    fontSize: 8.5,
    fontFamily: "poppinsRegular",
    marginTop: 1,
  },

  // -------------------------
  // CARDS DE AULA
  // -------------------------

  courseCard: {
    width: "100%",
    minHeight: 94,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E8E4DC",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  courseImage: {
    width: 82,
    height: 78,
    borderRadius: 11,
  },

  courseInfo: {
    flex: 1,
    marginLeft: 12,
    paddingRight: 5,
  },

  courseCategory: {
    alignSelf: "flex-start",
    fontSize: 7.5,
    color: "#66806A",
    backgroundColor: "#E8F0E7",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    fontFamily: "poppinsSemiBold",
    marginBottom: 5,
  },

  courseTitle: {
    fontSize: 14,
    color: "#263125",
    fontFamily: "poppinsSemiBold",
  },

  courseDetails: {
    fontSize: 9.5,
    color: "#858982",
    fontFamily: "poppinsRegular",
    marginTop: 4,
  },
});