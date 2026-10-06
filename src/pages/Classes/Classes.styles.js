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
    height: 70,
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

  title: {
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
  // CATEGORIAS
  // -------------------------

  categoriesContainer: {
    paddingRight: 10,
    paddingBottom: 8,
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
  // LISTA
  // -------------------------

  courseList: {
    marginTop: 12,
  },

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

  // -------------------------
  // ESTADO VAZIO
  // -------------------------

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },

  emptyTitle: {
    fontSize: 16,
    color: "#263125",
    fontFamily: "poppinsSemiBold",
  },

  emptyText: {
    fontSize: 12,
    color: "#858982",
    fontFamily: "poppinsRegular",
    marginTop: 6,
  },
});