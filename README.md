gridsize
========

![Build status](https://api.travis-ci.org/binocarlos/gridsize.png)

Input a number N and get a {width:X,height:X} object for a grid with at least N cells

```js
var gridsize = require('gridsize');

var grid_2x2 = gridsize(4);

var grid_4x5 = gridsize(19);

var grid_5x4 = gridsize(19, true);
```

## installation

npm/browserify:

```
$ npm install gridsize
```

component:

```
$ component install binocarlos/gridsize
```

## var grid = gridsize(count, portrait)

Return an object with:

 * width
 * height

properties that multiplied will be at least **count**.

If portraint is true then then height will be $gte width

## licence

MIT