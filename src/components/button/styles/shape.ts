export default (props: any) => {
  const { shape } = props;

  if (shape === "circle") {
    return {
      borderRadius: "50%"
    };
  }
};
