/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { evalScopeExtender } from "../util"

export const condition = (element, data) => {
    if (evalScopeExtender(element.getAttribute("v-if"), data) === false) {
        element.remove()
    } else {
        element.removeAttribute("v-if")
        Array.from(element.children).forEach((child) => {
            condition(child, data)
        })
    }
}
