### Gen
A simple CLI utility to generate information used on daily basis

#### Install
`npm install -g @tuonela/gen`

#### Usage
```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -d, --doc      The document type you want to generate [choices: "cpf", "cnpj"]
      --stripe   Flag to stripe separators                             [boolean]
      --cp       Copy the generated value to clipboard                 [boolean]
```

##### Example
Input
`gen -d cpf`
Output
`532.808.228-15`