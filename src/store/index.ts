import { configureStore } from '@reduxjs/toolkit';
import sidebar from 'store/slices/sidebar';
import navbar from 'store/slices/navbar';

export default configureStore({
  reducer: { sidebar, navbar },
});
