/* eslint-disable react/prop-types */
import { InputLabel, Box, FormHelperText } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { inputValidation } from '../utils/inputValues';
import { useState } from 'react';

export const DatePickerValidation = ({ field, handler }) => {
    const { label, error, validation } = inputValidation[field]
    const [displayErr, setDisplayErr] = useState(false)
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
                    handler(field, e.$d)
                }} />
            </LocalizationProvider>
            {displayErr &&
                <FormHelperText error>{error}</FormHelperText>
            }
        </Box>
    )
}
