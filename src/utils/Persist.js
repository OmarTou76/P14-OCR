export class Persist {
    static addEmployee(employee) {
        const employees = JSON.parse(localStorage.getItem('employees')) ?? []
        employees.push(employee)
        localStorage.setItem('employees', JSON.stringify(employees))
    }

    static getEmployees() {
        return JSON.parse(localStorage.getItem('employees'))
    }
}