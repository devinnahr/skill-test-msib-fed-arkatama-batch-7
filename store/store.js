import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blog/blogSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';
import newsReducer from '../features/news/newsSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    portfolio: portfolioReducer,
    news: newsReducer,
  },
});
