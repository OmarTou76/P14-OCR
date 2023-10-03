import { Box, Button, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { theme } from "../utils/Theme"

export const ErrorPage = () => {
    return (
        <Container maxWidth="sm" className='container' style={{
            borderColor: theme.palette.primary.dark,
            color: theme.palette.text.dark,
            backgroundColor: theme.palette.primary.light,
        }}>
            <Box align='center'>
                <Typography variant="h4" paddingTop={5}>
                    HRnet
                </Typography>
            </Box>
            <Box className='error-page'>
                <Typography variant="h4">
                    Page not found
                </Typography>
                <Box className='error-page-btn'>
                    <Link to="/">
                        <Button variant='text' style={{ background: theme.palette.primary.dark, color: theme.palette.text.light }}>
                            Create employee
                        </Button>
                    </Link>
                    <Link to='/employees'>
                        <Button variant='text' style={{ background: theme.palette.primary.dark, color: theme.palette.text.light }}>
                            View current Employees
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container >
    )
}
