/**
 * Copyright 2021 Emre BALCI <emre-balci@outlook.com.tr>
 * This code licensed under the MIT license
 * found in https://opensource.org/licenses/MIT
 */

class VueClone {
    constructor(options) {
        this.options = options

        if (typeof this.options.el !== "object") {
            if (typeof this.options.el !== "string") {
                throw new TypeError("Type of el has to be string or DOM object")
            }

            this.getElement(this.options.el)
        }

        this.render()
    }

    getElement(selector) {
        const selectedElements = document.querySelectorAll(selector)

        if (selectedElements.length != 1) {
            throw new Error(
                "Please use selector that describes one DOM element."
            )
        }

        this.options.el = selectedElements[0]
    }

    render() {
        /* eslint-disable no-useless-escape */
        const rgx = /{{([\w\d\+\*\=\s\/\"\.\:\(\)]*)}}/gm
        const element = this.options.el

        element.innerHTML = element.innerHTML.replace(rgx, (match) => {
            return eval(match)
        })
    }
}

export default VueClone
