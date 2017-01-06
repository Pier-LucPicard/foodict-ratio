# Ratio

This is a unit conversion module

## Usage
```
const r = require('ratio');
const ratio = r();
```
The basic format of a unit is
```
{
    unit: 'millilitre',
    value: 10,
}
```

#### `listAll()`

List all the available unit
```
[{
    name: 'centilitre',
    displayName: 'Centilire',
    symbole: 'cl',
    type: 'volume'
}]
```

#### `listByType(type)`

List all the unit of a specific type
```
[{
    name: 'millilitre',
    displayName: 'Mililitre',
    symbole: 'ml'
}]
```

#### `listTypes()`

List all the available unit type
```
[
    'volume', 'temperature'
]
```

#### `converte(unit,targetUnit)`

Convert a value unit pair to a value unit pair of the specify unit
```
ratio.converte({value: -85.83424949174746, unit: 'romer'}, 'newton') \\ returns { value: -58.66724253766983, unit: 'newton' }
```

## Commands and scripts

``` bash
# install dependencies
npm install

# Linter
npm run-script lint

# run unit tests
npm test
```
