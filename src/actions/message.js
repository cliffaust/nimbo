const message = (message) => {
  return {
    type: "SEND_MESSAGE",
    payload: message,
  };
};

export default message;
