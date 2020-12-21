import { StyleSheet, Dimensions } from "react-native";
export const globalStyles = StyleSheet.create({
  simpleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  balanceText: {
    fontFamily: "fugaz-regular",
    fontSize: 25,
    marginTop: 5,
  },
  balanceTitle: {
    fontSize: Dimensions.get("window").width * 0.075,
    fontFamily: "fredoka-regular",
    alignSelf: "center",
    textAlign: "center",
  },
  balanceColumn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  balanceNumberColumn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  balanceNumberText: {
    fontSize: 43,
    fontWeight: "bold",
    color: "#f7b31d",
  },
  spelenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56d756",
  },
  spelenInnerContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    margin: 15,
    padding: 15,
  },
  spelenHeader: {
    flex: 1,
  },
  spelenFooter: {
    flex: 1,
  },
});
