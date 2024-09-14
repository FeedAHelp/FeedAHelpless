import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18191c", 
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5865F2", 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000", 
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, 
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
