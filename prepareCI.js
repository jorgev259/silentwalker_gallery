const { readFileSync, appendFileSync, removeSync } = require('fs-extra')
const gitignore = readFileSync('./.gitignore', 'utf-8').replace('/.next/\n', '')

removeSync('./.gitignore')
appendFileSync('./.gitignore', gitignore)
