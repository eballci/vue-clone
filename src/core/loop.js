/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { render } from "./"

export const loop = (element, data) => {
    const vFor = element.getAttribute("v-for")
    const iteration = vFor?.split("in")[0].trim()
    const prop = vFor?.split("in")[1].trim()
    element.removeAttribute("v-for")

    if (vFor === null || vFor?.split("in").length !== 2) {
        Array.from(element.children).forEach((child) => {
            loop(child, data)
        })
        return
    }

    //ya prop, data objesinde bulunmuyorsa? onu kontrol et

    data[prop]?.forEach((item) => {
        const model = element.cloneNode(true)
        data[iteration] = item
        element.before(model)
        render(model, data)
    })

    element.remove()
}
