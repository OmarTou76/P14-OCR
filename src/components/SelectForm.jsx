/* eslint-disable react/prop-types */
import { Box, InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material'
import { inputValidation } from '../utils/inputValues'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleField } from '../utils/redux/createEmployee/createEmployee'
import { useEffect } from 'react'
import { theme } from '../utils/Theme'

export const SelectForm = ({ field, options }) => {
    const { label, error, validation } = inputValidation[field]
    const [displayErr, setDisplayErr] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleField({ field, value: options[0] }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box my={2} className='inputs'>
            <InputLabel htmlFor={`select_${field}`} style={{ color: theme.palette.text.dark }}>{label}</InputLabel>
            <FormControl fullWidth>
                <Select
                    labelId={`select_${field}`}
                    defaultValue={options[0]}
                    style={{ color: theme.palette.text.dark }}
                    onChange={e => {
                        if (!validation(e.target.value)) {
                            setDisplayErr(true)
                            e.target.value = ''
                        }
                        dispatch(handleField({ field, value: e.target.value }))
                    }}
                >
                    {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                </Select>
                {displayErr &&
                    <FormHelperText error>{error}</FormHelperText>
                }
            </FormControl>
        </Box>
    )
}
