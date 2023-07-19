/* eslint-disable react/prop-types */
import { Box, InputLabel } from '@mui/material'

export const TextInputForm = ({ label, children }) => {
    return (
        <Box my={2}>
            <InputLabel>
                {label}
            </InputLabel>
            {children}
        </Box>
    )
}