import { FormHelperText, Container, Typography, Button, Box, InputLabel, Input, FormControl, MenuItem, Select } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { TextInputForm } from '../components/TextInputForm'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { department, states } from '../utils/inputValues';
import { useState } from 'react';
export const CreateEmployee = () => {
    const [s, setS] = useState(states[0])
    const [d, setD] = useState(department[0])
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
            <TextInputForm label="First Name">
                <Input onChange={(e) => console.log(e.target.value)} />
                <FormHelperText error>Test</FormHelperText>
            </TextInputForm>
            <TextInputForm label="Last Name">
                <Input onChange={(e) => console.log(e.target.value)} />
                <FormHelperText error>Test</FormHelperText>
            </TextInputForm>
            <TextInputForm label="Date of Birth">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
            </TextInputForm>
            <TextInputForm label="Start Date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
            </TextInputForm>
            <Box my={2}>
                <fieldset>
                    <legend>Address</legend>
                    <TextInputForm label="Street">
                        <Input onChange={(e) => console.log(e.target.value)} />
                    </TextInputForm>
                    <TextInputForm label="City">
                        <Input onChange={(e) => console.log(e.target.value)} />
                    </TextInputForm>
                    <FormControl fullWidth>
                        <InputLabel id="select_state">State </InputLabel>
                        <Select
                            labelId="select_state"
                            id="demo-simple-select"
                            value={s}
                            label="Age"
                            onChange={(e) => setS(e.target.value)}
                        >
                            {states.map(state => <MenuItem key={state} value={state}>{state}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextInputForm label="Zip Code">
                        <Input type='number' onChange={(e) => console.log(e.target.value)} />
                    </TextInputForm>
                </fieldset>
            </Box>
            <Box style={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={d}
                    onChange={(e) => setD(e.target.value)}
                >
                    {department.map(department => <MenuItem key={department} value={department}>{department}</MenuItem>)}
                </Select>
            </Box>
            <Box textAlign={'center'} my={2}>
                <Button variant='contained'>Save</Button>
            </Box>
        </Container >
    )
}
