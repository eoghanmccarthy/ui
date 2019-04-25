export default () => ({
  overlay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 1000,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  modal: {
    position: "relative",
    width: "100%",
    maxWidth: "540px",
    backgroundColor: "#ffffff",
    borderRadius: "6px"
  }
});
