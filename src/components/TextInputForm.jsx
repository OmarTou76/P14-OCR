/* eslint-disable react/prop-types */
import { Box, InputLabel, Input, FormHelperText } from '@mui/material'
import { inputValidation } from '../utils/inputValues'
import { useState } from 'react'
import { handleField } from '../utils/redux/createEmployee/createEmployee'
import { useDispatch } from 'react-redux'


export const TextInputForm = ({ field }) => {
    const { label, error, type, validation } = inputValidation[field]
    const [displayErr, setDisplayErr] = useState(false)
    const dispatch = useDispatch()
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
                    dispatch(handleField({ field, value: e.target.value ? e.target.value : null }))
                }} />
            {displayErr &&
                <FormHelperText error>{error}</FormHelperText>
            }
        </Box>
    )
}