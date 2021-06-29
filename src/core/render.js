/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { condition } from "./condition"
import { evalScopeExtender } from "../util/eval-scope-extender"

export const render = (element, data) => {
    /* eslint-disable no-useless-escape */
    const rgx = /{{([\w\d\+\*\=\s\/\"\.\:\(\)]*)}}/gm

    condition(element, data)

    element.innerHTML = element.innerHTML.replace(rgx, (match) => {
        return evalScopeExtender(match, data)
    })
}
