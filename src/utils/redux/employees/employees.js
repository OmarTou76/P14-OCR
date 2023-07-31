import { createSlice } from '@reduxjs/toolkit'
import { Persist } from '../../Persist'


const initialState = Persist.getEmployees()

const employees = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        appendEmployee: (state, { payload }) => {
            Persist.addEmployee(payload.employee)
            state.push(payload.employee)
        },
    }
})

export const { reducer: employeesReducer } = employees
export const { appendEmployee } = employees.actions