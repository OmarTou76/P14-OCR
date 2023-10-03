import { Container, Box, Typography } from '@mui/material'
import { columnsTable } from '../utils/inputValues'
import { useSelector } from 'react-redux'
import { DataTable } from 'react-data-table-lib'

export const ViewEmployees = () => {
    const employees = useSelector(state => state.employees)
    const theme = {
        text: {
            "light": "white",
            "dark": "black",
        },
        primary: {
            'light': '#c5cae9',
            'main': "#7986cb",
            'dark': '#5c6bc0',
        },
        gridColors: {
            light: "#e8eaf6",
            dark: "#c5cae9",
            selectedCol: "#c5cae966"
        }
    }
    return (
        <Container maxWidth="lg">
            <Box align='center' my={2}>
                <Typography variant='h4'>
                    Current Employees
                </Typography>
            </Box>
            <div style={{ width: '100%' }}>
                <DataTable searchBar rows={employees} columns={columnsTable}
                    theme={theme} itemsPerPage={[10, 5]} />
            </div>
        </Container>
    )
}   