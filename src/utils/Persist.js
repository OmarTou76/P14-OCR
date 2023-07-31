export class Persist {
    static addEmployee(employee) {
        const data = JSON.parse(localStorage.getItem('employees')) ?? []
        data.push(employee)
        const employees = data.map((element, id) => ({
            ...element,
            id,
        }))
        localStorage.setItem('employees', JSON.stringify(employees))
    }

    static getEmployees() {
        return JSON.parse(localStorage.getItem('employees')) ?? []
    }
}