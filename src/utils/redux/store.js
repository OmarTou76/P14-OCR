import { configureStore } from '@reduxjs/toolkit'
import { employeeReducer } from './employee/employee'

export const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
})