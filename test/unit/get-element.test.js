/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { getElement } from "../../src/util"

it("Did return an element by passing string selector", () => {
    expect(getElement("body")).toBe(document.body)
})

it("Did return null by pssing improper string selector", () => {
    expect(getElement("improper")).toBe(null)
})

it("Did return an element by passing element", () => {
    expect(getElement(document.body)).toBe(document.body)
})

it("Did throw an element by passing non-string selector", () => {
    const _ = () => {
        getElement(17)
    }
    expect(_).toThrow(TypeError)
})
