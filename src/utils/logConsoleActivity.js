console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
}



console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    // default &  console.error()
    console.defaultError.apply(console, arguments);
    // new & array data
    console.errors.push(Array.from(arguments));
}



console.defaultWarn = console.warn.bind(console);
console.warns = [];
console.warn = function(){
    // default &  console.warn()
    console.defaultWarn.apply(console, arguments);
    // new & array data
    console.warns.push(Array.from(arguments));
}



console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
    console.debugs.push(Array.from(arguments));
}



export const logs = console.logs;
export const errors = console.errors;
export const warns = console.warns;
export const debugs = console.debugs;