import {configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './slices/User.Slice'
export const store  = configureStore({
    reducer:{
        [UserSlice.name]:UserSlice.reducer
    }
})