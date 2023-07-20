import { Container, Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Persist } from '../utils/Persist'
import { columnsTable } from '../utils/inputValues'

export const ViewEmployees = () => {
    const rows = Persist.getEmployees().map((element, id) => ({
        ...element,
        id,
        startDate: new Date(element.startDate).toLocaleString().split(' ')[0],
        employeeBirth: new Date(element.employeeBirth).toLocaleString().split(' ')[0]
    }))

    return (
        <Container maxWidth="lg" >
            <Box align='center' my={2}>
                <Typography variant='h4'>
                    Current Employees
                </Typography>
            </Box>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columnsTable}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </Container>
    )
}
