import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        user: userSlice
    }
})
