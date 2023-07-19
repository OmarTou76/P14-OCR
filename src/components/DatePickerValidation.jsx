/* eslint-disable react/prop-types */
import { InputLabel, Box, FormHelperText } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { inputValidation } from '../utils/inputValues';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { handleField } from "../utils/redux/employee/employee";

export const DatePickerValidation = ({ field }) => {
    const { label, error, validation } = inputValidation[field]
    const [displayErr, setDisplayErr] = useState(false)
    const dispatch = useDispatch()
    return (
        <Box my={2}>
            <InputLabel>{label}</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(e) => {
                    if (!validation(e.$d)) {
                        setDisplayErr(true)
                        return
                    }
                    setDisplayErr(false)
                    dispatch(handleField({ field, value: new Date(e.$d).getTime() }))
                    //handler(field, e.$d)
                }} />
            </LocalizationProvider>
            {displayErr &&
                <FormHelperText error>{error}</FormHelperText>
            }
        </Box>
    )
}
