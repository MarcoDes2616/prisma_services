import { configureStore } from '@reduxjs/toolkit';
import isLoadingSlice from './slices/isLoading.slice';


export default configureStore({
    reducer: {
        isLoadign: isLoadingSlice,
    }
});