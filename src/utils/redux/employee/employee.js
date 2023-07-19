import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: null,
    lastName: null,
    startDate: null,
    employeeBirth: null,
    city: null,
    street: null,
    zipCode: null,
    state: null,
    department: null
}

const employee = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        handleField: (state, { payload }) => {
            state[payload.field] = payload.value
        }
    }
})

export const { reducer } = employee
export const { handleField } = employee.actions