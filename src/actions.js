export const counterButtonClicked = (amount) => {
  return {
    type: "COUNTER_BUTTON_CLICKED",
    payload: {
      amount,
    },
  };
};
