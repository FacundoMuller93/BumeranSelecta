import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import userSlice from "./user"
import recruiterSlice from "./recruiters"

const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userSlice,
        recruiter: recruiterSlice,
    }
})

export default store