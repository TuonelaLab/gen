# Gen
A simple CLI utility to generate information used on daily basis

## Install
`npm install -g @tuonela/gen`

## Commands
### doc
Generates a document number
#### Options
```
-s, --stripe   Flag to stripe separators                [boolean] [default: false]
-c, --cp       Copy the generated value to clipboard    [boolean] [default: false]
```
#### Example
Input
```bash
gen doc -t cpf
```
Output
```bash
532.808.228-15
```