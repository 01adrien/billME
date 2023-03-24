import { curry } from 'lodash'

export const done = 'DONE'

export const zip = curry((source1, source2, listener) => {
  console.log(source1.name)
  console.log(source2)
    const buffer1 = []
    const cancel1 = source1((value) => {
        buffer1.push(value)
        if (buffer2.length) {
            listener([buffer1.shift(), buffer2.shift()])
        }
    })
    const buffer2 = []
    const cancel2 = source2((value) => {
        buffer2.push(value)
        if (buffer1.length) {
            listener([buffer1.shift(), buffer2.shift()])
        }
    })
    return () => {
        cancel1()
        cancel2()
    }
})

export const forOf = curry((iterable, listener) => {
    iterable
        .split('')
        .map((i, j) =>
            iterable.length === j - 1 ? listener(done) : listener(i)
        )
})

export const merge = curry((source1, source2, listener) => {
    const cancel1 = source1(listener)
    const cancel2 = source2(listener)
    return () => {
        cancel1()
        cancel2()
    }
})

export const action = curry((value, source, listener) => {
  source(() => listener(value));
});

export const mapStream = curry((fn, source, listener) => {
    return source((value) => {
        if (value === done) {
            listener(done)
            return
        }
        listener(fn(value))
    })
})

export const filterStream = curry((predicate, source, listener) => {
    return source((value) => {
        if (value === done) {
            listener(done)
            return
        }
        !predicate(value) ? null : listener(value)
    })
})
