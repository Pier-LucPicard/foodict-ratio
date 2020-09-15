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
Return a new instace of a validator

```
const validator = ratio.createValidator('nonNegativeMillilitre', (value, unit) => {
    if(unit.key === 'millilitre' && value < 0){
        throw new Error("Wow millilitre can't be negative because volume is always positive.");
    }
})
```

### `registerUnitTypeValidator(type, Validator)`
Assign the validator to a particular unit type.  This will always be run before each convertion along with all the other validator registered for this unit type.
```
const validator = ratio.createValidator('nonNegative', (value, unit) => {
    if(value < 0){
        throw new Error(`Wow ${unit.name} can't be negative because ${unit.type} is always positive.`);
    }
})
ratio.registerUnitTypeValidator('mass', validator)
ratio.registerUnitTypeValidator('volume', validator)
```


### `converte(value, unitKeyFrom, targetUnitKey, [type])`
This takes a value and a unitKey string and converts it to the target unit.
```
const {unit, value} = ratio.converte(10, 'u_s_cup', 'decalitre')
```
It is possible that the two units have the same key for two units type.  The default is using the first units that it will find.  To be sure it is using a type you know the last parameter can be used to specify the type.
```
const {unit, value} = ratio.converte(10, 'u_s_cup', 'decalitre', 'volume')
```

## Printing and Finding
Note that you always can access a unit type or a unit by using object acessor.
```
const unityType = ratio.volume;
const unit = ratio.volume.u_s_cup
```
It is possible to do this but this is not ideal because it uses the directly the instances.  It is allow to provide flexibility for testing in the future but should not be used in code.  The following methods should be used.


A formatted unit has the following fields:
```
{
    key: 'u_s_cup',
    name: 'U.S. Cup',
    symbole: 'U.S. Cup',
    type: 'volume'
};
```

### `listTypes()`
Give the list of string that are all the registered type so far.
```
ratio.listTypes()
```

### `list([type])`
Give the list of formatted unit that are all the registered so far.  It is possible to restrict the list to only units of a particular type.
```
const allFormattedUnit = ratio.list()
const volumeFormattedUnit = ratio.list('volume')
```
### `find(key)`
Find a particular unit using it's key.  Return a formatted unit.
```
const formatted unit = ratio.find('u_s_cup')
```
# Commands and scripts


```
# Run unit tests
npm run test

# Run unit test with coverage
npm run coverage

# Run test continuously
npm run watch-test

# Run linting tool
npm run lint

# Run prettier tool
npm run prettier
```
