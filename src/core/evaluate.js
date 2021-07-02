/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { evalScopeExtender } from "../util"

export const evaluate = (element, data) => {
    /* eslint-disable no-useless-escape */
    const rgx = /{{([\w\d\+\*\=\s\/\"\.\:\(\)]*)}}/gm

    element.innerHTML = element.innerHTML.replace(rgx, (match) => {
        return evalScopeExtender(match, data)
    })
}
