# Ratio

This is a unit conversion module.  It is build to be flexible and easy to adpate to your needs.


## Installing

```
npm i foodict-ratio
```

## How it works
There are multiple way to implement conversion.

The most precise way would be from the current toward the target unit using only a unique function.  This means that for each pair you would declare 2 functions to be able to do the conversion.
Doing it this way using `n` units would produce `(n(n - 1))` function to declare.  This may be optimal but to use 10 unit I am not defining 90 function.

To reduce the number of declaration we could view the units as a cycle.  Example at 5 unit `A  -> B -> C -> D -> E ->  A`.  This means that using `n` units would produce only `n` declaration.  This is really nice but in the case above at 5 unit to convert from A to E there are 4 convertions that takes place. This is bad because it is a lot of computations and each computation may add an error.

The solution combine the two approach.  First pick an average base unit.  For volume I would use ml. Now declare 2 functions. The first is to convert A to ml.  The second is to coonvert ml to A.  This creates for `n` units `2n` declaration.
Now to convert A to E.  You only use 2 convertion.  `A -> ml -> E`.

Note that to have ml as a destination you need to define ml as a units. A to ml would be express as `A -> ml -> ml`  where `ml -> ml` is the identity function.
## Usage

Ther is two none exclusive way to use this module.  As a Singleton or a collection of class


# Singleton mode
By default ratio is a singleton.  This means that anywhere that it is require within the node project it shares the state since require are cached


```
const r = require('foodict-ratio'); // Instance globale comme singleton
```


# Multiple mode
```
const { Ratio, Unit, Validator } = require('foodict-ratio');
const r = new Ratio()
```

## Methods

### `createUnit(name, symbole, conversion_formula_to_base, reverse_conversion, type)`
Returns a new instance of a unit

```
const unit = ratio.createUnit('Mililitre', 'ml', millilitre => millilitre, millilitre => millilitre, 'volume');
```

### `registerUnit(Unit)`
Save a unit to the list of known ratio groupped by it's type
```
const unit = ratio.createUnit('Mililitre', 'ml', millilitre => millilitre, millilitre => millilitre, 'volume');

registerUnit(unit)
```
### `registerUnit(Units)`
Save an array of unit to the list of known ratios

```
const unit_1 = ratio.createUnit('Mililitre', 'ml', millilitre => millilitre, millilitre => millilitre, 'volume');

const unit_2 = new ratio.Unit('Imperial Teaspoon', 'imp. ts', teaspoon => _.multiply(teaspoon, 5.919388020822801),  millilitre => _.divide(millilitre, 5.919388020822801), 'volume');


registerUnit([unit_1, unit_2])
```


### `createValidator(name, validateFunction)`

### `registerUnitTypeValidator(type, Validator)`

### `listTypes()`
### `list([type])`
### `find(type, key)`
#### `converte(value, unitKeyFrom, targetUnitKey)`
