import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 35,
  },

  // PERFIL

  profileHeader: {
    alignItems: "center",
    paddingTop: 18,
  },

  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 41,
    marginBottom: 12,
  },

  name: {
    fontSize: 23,
    color: "#263125",
    fontFamily: "poppinsSemiBold",
  },

  email: {
    fontSize: 11,
    color: "#858982",
    fontFamily: "poppinsRegular",
    marginTop: 2,
  },

  editButton: {
    width: "100%",
    height: 45,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8E4DC",
    marginTop: 18,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  editButtonText: {
    fontSize: 12,
    color: "#66806A",
    fontFamily: "poppinsMedium",
    marginLeft: 7,
  },

  // JORNADA

  sectionTitle: {
    fontSize: 17,
    color: "#263125",
    fontFamily: "poppinsSemiBold",
    marginTop: 28,
    marginBottom: 12,
  },

  statsCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E4DC",
    paddingVertical: 17,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  stat: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 21,
    color: "#66806A",
    fontFamily: "poppinsSemiBold",
  },

  statLabel: {
    fontSize: 8.5,
    color: "#858982",
    fontFamily: "poppinsRegular",
    marginTop: 2,
    textAlign: "center",
  },

  divider: {
    width: 1,
    height: 32,
    backgroundColor: "#E8E4DC",
  },

  // OPÇÕES

  optionsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E4DC",
    marginTop: 16,
    overflow: "hidden",
  },

  option: {
    minHeight: 67,
    paddingHorizontal: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#EEF3EC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  optionTitle: {
    fontSize: 12,
    color: "#263125",
    fontFamily: "poppinsMedium",
  },

  optionSubtitle: {
    fontSize: 8.5,
    color: "#949890",
    fontFamily: "poppinsRegular",
    marginTop: 2,
  },

  optionRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  optionValue: {
    fontSize: 9,
    color: "#858982",
    fontFamily: "poppinsRegular",
    marginRight: 7,
  },

  optionDivider: {
    height: 1,
    backgroundColor: "#EEEAE3",
    marginLeft: 60,
  },
});