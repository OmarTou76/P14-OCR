export const states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
]

export const department = [
    "Sales", "Marketing", "Engineering", "Human Resources", "Legal"
]

export const inputValidation = {
    "firstName": {
        label: "First Name",
        type: "text",
        validation: (value) => value && value.length > 1 ? true : false,
        error: "Please provide a frist name with a minimum of 2 characters."
    },
    "lastName": {
        label: "Last Name",
        type: "text",
        validation: (value) => value && value.length > 1 ? true : false,
        error: "Please provide a Last name with a minimum of 2 characters."
    },
    "street": {
        label: "Street",
        type: "text",
        validation: (value) => value && value.length > 1 ? true : false,
        error: "Please provide your street",
    },
    "city": {
        label: "City",
        type: "text",
        validation: (value) => value && value.length > 1 ? true : false,
        error: "Please provide your city",
    },
    "zipCode": {
        label: "Zip Code",
        type: "number",
        validation: (value) => value && String(value).split('').length === 5 ? true : false,
        error: "Please provide your zip code (minimum 5 digits)",
    },
    "employeeBirth": {
        label: "Date of Birth",
        type: "Date",
        validation: (v) => (!v || v == 'Invalid Date') ? false : true,
        error: "Please provide your date of birth"
    },
    "startDate": {
        label: "Start Date",
        type: "Date",
        validation: (v) => (!v || v == 'Invalid Date') ? false : true,
        error: "Please provide your started date"
    },
    "state": {
        label: "State",
        type: "text",
        validation: (v) => states.indexOf(v) > -1,
        error: "Please provide your state"
    },
    "department": {
        label: "Department",
        type: "text",
        validation: (v) => department.indexOf(v) > -1,
        error: "Please provide your department"
    },
}

export const columnsTable = [
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'startDate', headerName: 'Start Date', width: 130 },
    { field: 'employeeBirth', headerName: 'Date of Birth', width: 130 },
    { field: 'street', headerName: 'Street', width: 130 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'zipCode', headerName: 'Zip Code', width: 130 },
]