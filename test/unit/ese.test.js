/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { evalScopeExtender } from "../../src/util"

it("Is output undefined", () => {
    expect(evalScopeExtender()).toBe(undefined)
    expect(evalScopeExtender("")).toBe(undefined)
    expect(evalScopeExtender(undefined, { x: 17, y: { x: 45 } })).toBe(
        undefined
    )
    expect(evalScopeExtender(";")).toBe(undefined)
    expect(evalScopeExtender("void(0);")).toBe(undefined)
})

it("Is output proper", () => {
    expect(evalScopeExtender("x + y", { x: 3, y: 2 })).toBe(5)
    expect(evalScopeExtender("x[2]", { x: [1, 2, 3, 4, 5] })).toBe(3)
})

it("Is output proper for logic statement", () => {
    let data = {
        message: {
            status: true,
            content: "Hello World",
            timestamp: 1630489703,
        },
    }

    expect(evalScopeExtender("message.status && message.content", data)).toBe(
        "Hello World"
    )

    data.message.status = false

    expect(evalScopeExtender("message.status && message.content", data)).toBe(
        false
    )
})
