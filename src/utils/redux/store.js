import { configureStore } from '@reduxjs/toolkit'
import { createEmployeeReducer } from './createEmployee/createEmployee'
import { employeesReducer } from './employees/employees'

export const store = configureStore({
    reducer: {
        employee: createEmployeeReducer,
        employees: employeesReducer
    }
})