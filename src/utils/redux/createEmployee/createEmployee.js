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

const createEmployee = createSlice({
    name: 'createEmployee',
    initialState,
    reducers: {
        handleField: (state, { payload }) => {
            state[payload.field] = payload.value
        },
        reset: () => initialState
    }
})

export const { reducer: createEmployeeReducer } = createEmployee
export const { handleField, reset } = createEmployee.actions