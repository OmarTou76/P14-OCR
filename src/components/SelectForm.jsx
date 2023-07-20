/* eslint-disable react/prop-types */
import { Box, InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material'
import { inputValidation } from '../utils/inputValues'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleField } from '../utils/redux/employee/employee'
import { useEffect } from 'react'

export const SelectForm = ({ field, options }) => {
    const { label, error, validation } = inputValidation[field]
    const [displayErr, setDisplayErr] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleField({ field, value: options[0] }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box>
            <InputLabel id="select_state">{label}</InputLabel>
            <FormControl fullWidth>
                <Select
                    labelId={`select_${field}`}
                    defaultValue={options[0]}
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
