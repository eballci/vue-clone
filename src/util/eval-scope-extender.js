/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

export const evalScopeExtender = (initialEval, data) => {
    if (initialEval === null) {
        return
    }

    if (typeof data === "undefined") {
        return eval(initialEval)
    }

    Object.entries(data).forEach((prop) => {
        initialEval = `var ${prop[0]}=${JSON.stringify(prop[1])};${initialEval}`
    })

    return eval(initialEval)
}
