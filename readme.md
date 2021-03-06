# Vue-Clone
This library created for academic purposes.

### How to use

Import the library

```
<script src="./vue-clone.min.js"></script>
```
or
```
$> npm i vue-clone
import VueClone from "vue-clone"
```

Instantiate the VueClone

```
new VueClone({
    el: "#app",
    data: {
        name: "World"
    }
});
```

Add some element to your DOM that combines with `el` parameter

```
<div id="app">
    Hello {{name}}!
</div>
```

## Supported Features

This library doesn't support all features of Vue.js

### Directives
* v-if
* v-for

## License
Copyright 2021 Emre BALCI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

