---
url: /protocol-launcher/apps/launchbar.md
---

# LaunchBar

[LaunchBar](https://www.obdev.at/products/launchbar/index.html) is a macOS launcher and productivity utility. **Protocol Launcher** allows you to generate deep links for LaunchBar.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## URL Methods

The helpers below mirror LaunchBar's official [URL Commands](https://www.obdev.at/resources/launchbar/help/URLCommands.html) and [Calculator](https://www.obdev.at/resources/launchbar/help/Calculator.html) documentation. The documented `execute` command only works in conjunction with LaunchBar Search Templates.

### Large Type

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'largeType' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}largeType({
  string: 'LaunchBar 4.3',
})

const titleUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}largeType({
  title: 'Large Type',
  string: 'Small Example',
})

const fontUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}largeType({
  fontName: 'Times-Bold',
  string: 'Hello World',
})
```

### Select Item

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'select' : 'launchbar' }} } from '{{ importPath }}'

const fileUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  file: '/Applications',
})

const urlItem = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  url: 'www.obdev.at',
})

const namedUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  url: 'www.obdev.at',
  name: 'Objective Development',
})

const stringUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  string: "Hello, I'm a text",
})

const abbreviationUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}select({
  abbreviation: 'SAFARI',
})
```

### Execute Search Template Command

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'execute' : 'launchbar' }} } from '{{ importPath }}'

const singleArgumentUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}execute({
  path: '/usr/local/bin/MyScript',
  argument: '*',
})

const argumentsUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}execute({
  path: '/usr/bin/open',
  arguments: '-a "*"',
})
```

### Calculate

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'calculate' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  expression: '2*sin(pi/4)^2',
})

const titleUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  expression: '(1+sqrt(5))/2',
  title: 'Golden Ratio',
})

const resultUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  expression: '(1+sqrt(5))/2',
  title: 'Golden Ratio',
  result: 'φ=@',
})

const templateUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  argument: '*',
  expression: '(@-32)/1.8',
  title: '@°F =',
  result: '@°C',
})

const celsiusTemplateUrl = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}calculate({
  argument: '*',
  expression: '@*1.8+32',
  title: '@°C =',
  result: '@°F',
})
```

### Hide LaunchBar

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'hide' : 'launchbar' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'launchbar.'}}hide()
```

## Generated URLs

```ts-vue
largeType(largeTypeParams)
// x-launchbar:large-type?string=LaunchBar+4.3

largeType(largeTypeTitleParams)
// x-launchbar:large-type?title=Large+Type&string=Small+Example

largeType(largeTypeFontParams)
// x-launchbar:large-type?font-name=Times-Bold&string=Hello+World

select(selectFileParams)
// x-launchbar:select?file=/Applications

select(selectUrlParams)
// x-launchbar:select?url=www.obdev.at

select(selectNamedUrlParams)
// x-launchbar:select?url=www.obdev.at&name=Objective+Development

select(selectStringParams)
// x-launchbar:select?string=Hello,+I'm+a+text

select(selectAbbreviationParams)
// x-launchbar:select?abbreviation=SAFARI

execute(executeArgumentParams)
// x-launchbar:execute?path=/usr/local/bin/MyScript&argument=*

execute(executeArgumentsParams)
// x-launchbar:execute?path=/usr/bin/open&arguments=-a+%22*%22

calculate(calculateParams)
// x-launchbar:calculate?expression=2*sin(pi/4)^2

calculate(calculateTitleParams)
// x-launchbar:calculate?expression=(1+sqrt(5))/2&title=Golden%20Ratio

calculate(calculateResultParams)
// x-launchbar:calculate?expression=(1+sqrt(5))/2&title=Golden%20Ratio&result=%cf%86=@

calculate(calculateTemplateParams)
// x-launchbar:calculate?argument=*&expression=(@-32)/1.8&title=@%c2%b0F%20=&result=@%c2%b0C

calculate(calculateCelsiusTemplateParams)
// x-launchbar:calculate?argument=*&expression=@*1.8+32&title=@%c2%b0C%20=&result=@%c2%b0F

hide()
// x-launchbar:hide
```
