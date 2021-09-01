/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import VueClone from "./../src/index"

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
        "<div><div><div>1</div><div>2</div></div>" +
            "<div><div>3</div><div>4</div></div></div>"
    )
})

it("Did conditional and repeatable directions work", () => {
    document.body.innerHTML =
        "<div v-for='person in persons' v-if='person.active'>" +
        "{{person.name}}" +
        "</div>"
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
