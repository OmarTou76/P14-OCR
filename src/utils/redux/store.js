import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './employee/employee'


export const store = configureStore({
    reducer: {
        employee: reducer
    }
})