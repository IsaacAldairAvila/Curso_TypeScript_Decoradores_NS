function Dec1 (constructor: Function) {
    console.log('DEC 1')
}

function Dec2 (constructor: Function) {
    console.log('DEC 2')
}

@Dec1
@Dec2
class User {}

export {}