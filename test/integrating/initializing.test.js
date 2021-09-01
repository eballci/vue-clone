/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import VueClone from "../../src"

it("Was error that in case of not providing element thrown", () => {
    expect(() => {
        new VueClone({ el: undefined })
    }).toThrow(Error)
})

it("Was error that in case of passing improper element thrown", () => {
    expect(() => {
        new VueClone({ el: 18 })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: 18.81 })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: true })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: [] })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: null })
    }).toThrow(TypeError)
})

it("Was proper element selected", () => {
    const instance = new VueClone({ el: "body" })
    expect(instance.options.el).toEqual(document.body)
})
