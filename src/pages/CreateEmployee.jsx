import { Container, Typography, Button, Box, Modal, List, ListItem, ListItemText } from '@mui/material'
import { TextInputForm } from '../components/TextInputForm'
import { department, inputValidation, states } from '../utils/inputValues';
import { useState } from 'react';
import { SelectForm } from '../components/SelectForm';
import { DatePickerValidation } from '../components/DatePickerValidation';
import { useSelector } from 'react-redux'

export const CreateEmployee = () => {
    const [fieldError, setFieldError] = useState([])
    const [isVisible, setVisible] = useState(false)
    const employee = useSelector(state => state.employee)
    return (
        <Container maxWidth="sm" style={{ border: "solid 1px black" }} >
            <Modal
                open={isVisible}
                onClose={() => setVisible(false)}
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    {fieldError.length ?
                        <>
                            <Typography>Please check these fields: </Typography>
                            {
                                <List>
                                    {fieldError.map(field => (
                                        <ListItem key={field}>
                                            <ListItemText primary={inputValidation[field].label} />
                                        </ListItem>
                                    ))}
                                </List>
                            }
                        </>
                        :
                        <Typography sx={{ mt: 2 }}>Employee Created</Typography>
                    }
                </Box>
            </Modal>
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
            <TextInputForm field="firstName" />
            <TextInputForm field="lastName" />
            <DatePickerValidation field='employeeBirth' />
            <DatePickerValidation field='startDate' />
            <Box my={2}>
                <fieldset>
                    <TextInputForm field="street" />
                    <TextInputForm field="city" />
                    <SelectForm field="state" options={states} />
                    <TextInputForm field="zipCode" />
                </fieldset>
            </Box>
            <SelectForm field="department" options={department} />
            <Box textAlign={'center'} my={2}>
                <Button variant='contained' onClick={() => {
                    const errorField = Object.keys(inputValidation).filter((field) => !inputValidation[field].validation(employee[field]))
                    setFieldError(errorField)
                    setVisible(true)
                }}>
                    Save
                </Button>
            </Box>
        </Container>
    )
}
