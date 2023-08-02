import { Container, Box, Typography } from '@mui/material'
import { columnsTable } from '../utils/inputValues'
import { useSelector } from 'react-redux'
import { DataTable } from 'table-library'

export const ViewEmployees = () => {
    const employees = useSelector(state => state.employees)
    return (
        <Container maxWidth="lg" >
            <Box align='center' my={2}>
                <Typography variant='h4'>
                    Current Employees
                </Typography>
            </Box>
            <div style={{ width: '100%' }}>
                <DataTable searchBar={false} itemsPerPage={[10, 15, 20]} rows={employees.concat(employees, employees, employees)} columns={columnsTable} />
            </div>

        </Container>
    )
}   
