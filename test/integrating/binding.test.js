/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import VueClone from "../../src/index"

it("Was single arithmetic expression evaluated", () => {
    document.body.innerHTML = "{{ 3 + 2 }}"
    new VueClone({ el: document.body })
    expect(document.body.innerHTML).toBe("5")
})

it("Was multiple arithmetic expressions evaluated", () => {
    document.body.innerHTML = "{{ 3 }}*{{ 5 }}={{15}}"
    new VueClone({ el: document.body })
    expect(document.body.innerHTML).toBe("3*5=15")
})

it("Was multiline arithmetic expressions evaluated", () => {
    document.body.innerHTML = `{{ 3 }}*{{ 5 }}={{15}}
    {{ 3 }}*{{ 5 }}={{15}}
    {{ 3 }}*{{ 5 }}={{15}}`
    new VueClone({ el: document.body })
    expect(document.body.innerHTML).toBe(`3*5=15
    3*5=15
    3*5=15`)
})

it("Was single prop of data bound", () => {
    document.body.innerHTML = "Hello, {{name}}!"
    new VueClone({
        el: "body",
        data: {
            name: "World",
        },
    })
    expect(document.body.innerHTML).toBe("Hello, World!")
})

it("Was multiple props of data bound", () => {
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
