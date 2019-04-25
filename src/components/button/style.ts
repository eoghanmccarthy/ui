import lightenDarkenColour from "utils/lightenDarkenColour";

export default (props: any) => {
  const { outlined, colour } = props;

  if (outlined) {
    return {
      color: colour,
      backgroundColor: "white",
      border: `1px solid ${colour}`,
      "&:hover": {
        color: "white",
        backgroundColor: colour
      }
    };
  } else {
    return {
      color: "white",
      backgroundColor: colour,
      border: `1px solid ${colour}`,
      "&:hover": {
        backgroundColor: lightenDarkenColour(colour, 5)
      }
    };
  }
};
