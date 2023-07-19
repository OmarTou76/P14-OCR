import { Container, Typography, Button, Box, InputLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { TextInputForm } from '../components/TextInputForm'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { department, states } from '../utils/inputValues';
import { useState } from 'react';
import { SelectForm } from '../components/SelectForm';
export const CreateEmployee = () => {
    const [employee, setEmployee] = useState({
        state: states[0],
        department: department[0]
    })

    const handleEmployee = (field, value) => {
        setEmployee({
            ...employee,
            [field]: value
        })
    }
    return (
        <Container maxWidth="sm" style={{ border: "solid 1px #cfe8fc" }} >
            <Box align='center' my={2}>
                <Typography variant='h4'>
                    HRnet
                </Typography>
            </Box>
            <Box align='center' my={2}>
                <Button variant='text' onClick={() => alert("Redirection vers la liste d'employées")}>
                    View current Employees
                </Button>
            </Box>
            <Box align='center' my={2}>
                <Typography variant='h5'>
                    Create Employee
                </Typography>
            </Box>
            <TextInputForm field="firstName" handler={handleEmployee} />
            <TextInputForm field="lastName" handler={handleEmployee} />
            <Box my={2}>
                <InputLabel>Date of Birth</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(e) => handleEmployee('employeeBirth', e.$d)} />
                </LocalizationProvider>
            </Box>
            <Box my={2}>
                <InputLabel>Start Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(e) => handleEmployee('startDate', e.$d)} />
                </LocalizationProvider>
            </Box>
            <Box my={2}>
                <fieldset>
                    <TextInputForm field="street" handler={handleEmployee} />
                    <TextInputForm field="city" handler={handleEmployee} />
                    <SelectForm field="state" handler={handleEmployee} options={states} />
                    <TextInputForm field="zipCode" handler={handleEmployee} />
                </fieldset>
            </Box>
            <SelectForm field="department" handler={handleEmployee} options={department} />
            <Box textAlign={'center'} my={2}>
                <Button variant='contained' onClick={() => { console.log(employee) }}>Save</Button>
            </Box>
        </Container>
    )
}
