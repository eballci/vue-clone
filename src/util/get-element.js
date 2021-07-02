/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

export const getElement = (selector) => {
    if (typeof selector === "string") {
        return document.querySelector(selector)
    }

    throw new TypeError("Type of element selector have to be string.")
}
