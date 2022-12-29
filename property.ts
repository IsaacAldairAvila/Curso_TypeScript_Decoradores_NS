function UpperCase(target: any, methodName: string, PropertyDescriptor: PropertyDescriptor) {
    const original = PropertyDescriptor.get
    PropertyDescriptor.get = function () {
        const r = original?.call(this)
        if (typeof (r) === 'string') {
            return r.toUpperCase()
        }
        return r
    }
}

function Min(min: number){
    return (target: any, propertName: string) => {
        let val: string
        const propertyDescriptor: PropertyDescriptor = {
            get() {
                return val
            },
            set(v: string) {
                if(v.length < min){
                    throw new Error (`La propiedad ${propertName} debe ser de minimo ${min}`)
                }
                val = v
            },
        }
        Object.defineProperty(target, propertName, propertyDescriptor)
    }
}

class User {
    @Min(6)
    public password: string
    constructor(public name: string, public lastname: string, password: string) {
        this.password = password
    }
    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const user = new User('Isaac', 'Avila', '1234')
console.log(user.password);
export {}