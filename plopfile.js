const getComponentName = {
  type: 'input',
  name: 'name',
  message: 'Name of component',
  validate: function (value) {
    if ((/.+/).test(value)) {
      return true
    }

    return 'name is required'
  }
}

const createIndex = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/index.js',
  templateFile: 'plop-templates/component.index.js'
}

const createComponent = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
  templateFile: 'plop-templates/component.js'
}

module.exports = function (plop) {
  plop.setGenerator('Component', {
    description: 'Component',
    prompts: [getComponentName],
    actions: [createIndex, createComponent]
  })
}
