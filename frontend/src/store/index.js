import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { categoriesReducer } from './categoryReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))