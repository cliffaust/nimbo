const initialState = {
  email: "",
  message: "",
};

const sendMessage = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        email: action.payload.email,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default sendMessage;
