function Route(ruta: string) {
    return (constructor: Function) => {
        console.log('Ejecutando el decorador de ruta')
        constructor.prototype.route = ruta
    }
}

function Method(method: string) {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        console.log(target, methodName, descriptor)
        const original = descriptor.value
        descriptor.value = function (...args: any) {
            console.log('metodo decorado')
            original.call(this, ...args)
            console.log('despues decorado')
        }
    }

}

@Route('/productos')

class Productos {
    @Method('get')
    find(val: string) {
        console.log(`soy find ${val}`)
    }
}

const p = new Productos()
p.find('isaac')