/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import VueClone from "./../src/index"

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
