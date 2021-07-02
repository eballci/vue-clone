/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { condition, evaluate, loop } from "./"

export const render = (element, data) => {
    loop(element, data)
    condition(element, data)
    evaluate(element, data)
}
