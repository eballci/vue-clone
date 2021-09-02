/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

import { render } from "./core"
import { getElement } from "./util"

class VueClone {
    constructor(options) {
        if (typeof options.el === "undefined") {
            throw new TypeError(
                "Element is not provided. VueClone needs element for work."
            )
        }

        if (options.data && typeof options.data !== "object") {
            throw new TypeError(
                "Data is provided by inproper type. Data should be object."
            )
        }

        if (document.readyState === "complete") {
            this.start(options)
        } else {
            document.addEventListener("readystatechange", () => {
                this.start(options)
            })
        }
    }

    start(options) {
        options.el = getElement(options.el)

        this.options = options

        render(this.options.el, this.options.data)
    }
}

export default VueClone
