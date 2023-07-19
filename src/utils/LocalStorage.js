export class PersistData {
    static setField({ field, value }) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? {}
        currentUser[field] = value
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }

    static getUserData() {
        return JSON.parse(localStorage.getItem('currentUser'))
    }
}