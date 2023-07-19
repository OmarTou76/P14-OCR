/* eslint-disable react/prop-types */
import { Box, InputLabel, Input, FormHelperText } from '@mui/material'
import { inputValidation } from '../utils/inputValues'
import { useState } from 'react'

export const TextInputForm = ({ field, handler }) => {
    const { label, error, type, validation } = inputValidation[field]
    const [displayErr, setDisplayErr] = useState(false)
    return (
        <Box my={2}>
            <InputLabel>
                {label}
            </InputLabel>
            <Input onChange={() => setDisplayErr(false)} type={type}
                onBlur={(e) => {
                    if (!validation(e.target.value)) {
                        setDisplayErr(true)
                        e.target.value = ''
                    }
                    handler(field, e.target.value)
                }} />
            {displayErr &&
                <FormHelperText error>{error}</FormHelperText>
            }
        </Box>
    )
}