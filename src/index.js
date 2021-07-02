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
            throw new Error(
                "Element is not provided. VueClone needs element for work."
            )
        }

        if (!(options.el instanceof HTMLElement)) {
            options.el = getElement(options.el)
        }

        this.options = options

        //what if data is non-Object?
        render(this.options.el, this.options.data)
    }
}

export default VueClone
