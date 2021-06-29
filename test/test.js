/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import VueClone from "./../src/index"
import * as Render from "../src/core/render"

it("Did throw error in case of non-String and non-Object element", () => {
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
        new VueClone({ el: new Function() })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: new Array() })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: null })
    }).toThrow(TypeError)

    expect(() => {
        new VueClone({ el: undefined })
    }).toThrow(TypeError)
})

it("Did throw error in case of multiple or zero element selector", () => {
    //zero elements
    expect(() => {
        new VueClone({ el: "div" })
    }).toThrow(Error)

    //multiple elements
    expect(() => {
        const body = document.body
        for (let i = 0; i < 5; ++i) {
            const newDiv = document.createElement("div")
            body.appendChild(newDiv)
        }
        new VueClone({ el: "div" })
    }).toThrow(Error)
})

it("Did selected proper element", () => {
    const instance = new VueClone({ el: "body" })
    expect(instance.options.el).toEqual(document.body)
})

it("Did render call", () => {
    const renderMock = jest.spyOn(Render, "render")
    new VueClone({ el: document.body })
    expect(renderMock).toBeCalled()
})

it("Did single arithmetic expression evaluate", () => {
    document.body.innerHTML = "{{ 3 + 2 }}"
    new VueClone({ el: document.body })
    expect(document.body.innerHTML).toBe("5")
})

it("Did multiple arithmetic expressions evaluate", () => {
    document.body.innerHTML = "{{ 3 }}*{{ 5 }}={{15}}"
    new VueClone({ el: document.body })
    expect(document.body.innerHTML).toBe("3*5=15")
})

it("Did multiline arithmetic expressions evaluate", () => {
    document.body.innerHTML = `{{ 3 }}*{{ 5 }}={{15}}
    {{ 3 }}*{{ 5 }}={{15}}
    {{ 3 }}*{{ 5 }}={{15}}`
    new VueClone({ el: document.body })
    expect(document.body.innerHTML).toBe(`3*5=15
    3*5=15
    3*5=15`)
})

it("Did single prop of data bind", () => {
    document.body.innerHTML = "Hello, {{name}}!"
    new VueClone({
        el: "body",
        data: {
            name: "World",
        },
    })
    expect(document.body.innerHTML).toBe("Hello, World!")
})

it("Did multiple props of data bind", () => {
    document.body.innerHTML = 'Hello, {{name + " " + surname}}!'
    new VueClone({
        el: "body",
        data: {
            name: "John",
            surname: "Doe",
        },
    })
    expect(document.body.innerHTML).toBe("Hello, John Doe!")
})

it("Did v-if work", () => {
    document.body.innerHTML = `<div v-if="show"></div><div v-if="!show"></div>`
    new VueClone({
        el: "body",
        data: {
            show: true,
        },
    })
    expect(document.body.innerHTML).toBe("<div></div>")
})
