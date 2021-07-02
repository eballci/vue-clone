/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import VueClone from "./../src/index"
import * as Render from "../src/core/render"

it("Did throw error in case of not providing element", () => {
    expect(() => {
        new VueClone({ el: undefined })
    }).toThrow(Error)
})

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

it("Did v-for work", () => {
    document.body.innerHTML = `<div v-for="name in names">{{name}}</div>`
    new VueClone({
        el: "body",
        data: {
            names: ["Ahmet", "Mehmet", "Ali", "Kazım"],
        },
    })
    expect(document.body.innerHTML).toBe(
        "<div>Ahmet</div><div>Mehmet</div><div>Ali</div><div>Kazım</div>"
    )
})

it("Did complex v-for work", () => {
    document.body.innerHTML =
        "<div v-for='person in persons'>{{person.name}}</div>"
    new VueClone({
        el: "body",
        data: {
            persons: [
                { name: "Ahmet" },
                { name: "Mehmet" },
                { name: "Ali" },
                { name: "Kazım" },
            ],
        },
    })
    expect(document.body.innerHTML).toBe(
        "<div>Ahmet</div><div>Mehmet</div><div>Ali</div><div>Kazım</div>"
    )
})

it("Did very complex v-for work", () => {
    document.body.innerHTML =
        "<div><div v-for='person in persons'>{{person.name}}</div></div>"
    new VueClone({
        el: "body",
        data: {
            persons: [
                { name: "Ahmet" },
                { name: "Mehmet" },
                { name: "Ali" },
                { name: "Kazım" },
            ],
        },
    })
    expect(document.body.innerHTML).toBe(
        "<div><div>Ahmet</div><div>Mehmet</div>" +
            "<div>Ali</div><div>Kazım</div></div>"
    )
})

it("Did nested v-fors work", () => {
    document.body.innerHTML =
        "<div v-for='b in a'><div v-for='c in b'>{{c}}</div></div>"
    new VueClone({
        el: "body",
        data: {
            a: [
                [1, 2],
                [3, 4],
            ],
        },
    })
    expect(document.body.innerHTML).toBe(
        "<div><div>1</div><div>2</div></div><div><div>3</div><div>4</div></div>"
    )
})

it("Did nested complex v-fors work", () => {
    document.body.innerHTML =
        "<div><div v-for='b in a'><div v-for='c in b'>{{c}}</div></div></div>"
    new VueClone({
        el: "body",
        data: {
            a: [
                [1, 2],
                [3, 4],
            ],
        },
    })
    expect(document.body.innerHTML).toBe(
        "<div><div><div>1</div><div>2</div></div><div><div>3</div><div>4</div></div></div>"
    )
})

it("Did conditional and repeatable directions work", () => {
    document.body.innerHTML =
        "<div v-for='person in persons' v-if='person.active'>{{person.name}}</div>"
    new VueClone({
        el: "body",
        data: {
            persons: [
                { name: "Emre", active: true },
                { name: "Hakkı", active: false },
                { name: "Kamil", active: true },
            ],
        },
    })
    expect(document.body.innerHTML).toBe("<div>Emre</div><div>Kamil</div>")
})
