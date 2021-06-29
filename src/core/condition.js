/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { evalScopeExtender } from "../util/eval-scope-extender"

export const condition = (element, data) => {
    Array.from(element.children).forEach((child) => {
        if (!evalScopeExtender(child.getAttribute("v-if"), data)) {
            child.remove()
        } else {
            child.removeAttribute("v-if")
            condition(child, data)
        }
    })
}
