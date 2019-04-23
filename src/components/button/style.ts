export default (props: any) =>
  props.outlined
    ? {
        color: props.colour,
        backgroundColor: "white",
        border: `1px solid ${props.colour}`,
        "&:hover": {
          color: "white",
          backgroundColor: props.colour
        }
      }
    : {
        color: "white",
        backgroundColor: props.colour,
        "&:hover": {
          opacity: "0.95"
        }
      };
