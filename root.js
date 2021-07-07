const sample = require('./sample')
const sample_2 = require('./sample_2')

var handlers = {}

handlers = Object.assign(handlers, sample)
handlers = Object.assign(handlers, sample_2)

handlers.a() // Hello World!
handlers.b() // Hello Zaen!
handlers.c() // Hello Lisa!
handlers.d() // Hello SamR!
handlers.e() // Hello Lisa again!
handlers.f() // Hello Zaen again!
