export const shape = (props: any) => {
  if (props.rounded) {
    return {
      borderRadius: "4px"
    };
  } else if (props.circle) {
    return {
      borderRadius: "50%"
    };
  } else if (props.capsule) {
    return {
      padding: "15px",
      borderRadius: "1000px"
    };
  }
};

export const colour = (props: any) => {
  if (props.outlined) {
    return {
      color: props.theme,
      backgroundColor: "white",
      border: `1px solid ${props.theme}`
    };
  } else {
    return {
      color: "white",
      backgroundColor: props.theme,
      border: `1px solid ${props.theme}`
    };
  }
};
