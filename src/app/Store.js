import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");

import cakeReducer from "../features/cake/CakeSlice";
import icecreamReducer from "../features/icecream/IcecreamSlice";
import userReducer from "../features/user/UserSlice";
// const logger = reduxLogger.createLogger();

const Store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
