const requireField = fieldName => {
  return value => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = plop => {
  plop.setGenerator('reducer', {
    description: 'Generate new reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name for reducer',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/redux/reducers/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/redux/reducers/{{dotCase name}}.reducer.js',
        templateFile: 'plop-templates/reducer.template.js.hbs',
      },
      {
        type: 'append',
        path: 'src/redux/reducers/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}}Reducer from './{{dotCase name}}.reducer.js';`,
      },
      {
        type: 'append',
        path: 'src/redux/reducers/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}}Reducer,`,
      },
      {
        type: 'append',
        path: 'src/store/index.js',
        pattern: `/* IMPORT_REDUCERS */`,
        template: `\t{{camelCase name}}Reducer,`,
      },
      {
        type: 'append',
        path: 'src/store/index.js',
        pattern: `/* COMBINE_REDUCERS */`,
        template: `\t{{camelCase name}}Reducer,`,
      },
    ],
  });

  plop.setGenerator('thunk', {
    description: 'Generate thunk service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name for thunk functions',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/thunk/{{dotCase name}}.thunk.js',
        templateFile: 'plop-templates/Thunk/Thunk.template.js.hbs',
      },
      {
        type: 'add',
        path: 'src/services/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{camelCase name}}, {{constantCase name}}_REQUEST, {{constantCase name}}_FAILURE, {{constantCase name}}_SUCCESS } from './thunk/{{dotCase name}}.thunk.js';`,
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}}, {{constantCase name}}_REQUEST, {{constantCase name}}_FAILURE, {{constantCase name}}_SUCCESS,`,
      },
    ],
  });

  plop.setGenerator('lang', {
    description: 'Insert a new i18n key',
    prompts: [
      {
        type: 'input',
        name: 'key',
        message: 'key for new language item?',
        validate: requireField('key'),
      },
      {
        type: 'input',
        name: 'value',
        message: 'value for new language item?',
        validate: requireField('value'),
      },
    ],
    actions: [
      {
        type: 'append',
        path: 'src/i18n/resources.js',
        pattern: `/* INJECT_KEY_PT */`,
        template: `\t\t\t"{{camelCase key}}": "{{value}}",`,
      },
      {
        type: 'append',
        path: 'src/i18n/resources.js',
        pattern: `/* INJECT_KEY_EN */`,
        template: `\t\t"{{camelCase key}}": "{{value}}",`,
      },
      {
        type: 'append',
        path: 'src/i18n/resources.js',
        pattern: `/* INJECT_KEY_ES */`,
        template: `\t\t"{{camelCase key}}": "{{value}}",`,
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{lowerCase name}}/{{dotCase name}}.component.js',
        templateFile: 'plop-templates/Component/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{lowerCase name}}/{{dotCase name}}.scss',
        templateFile: 'plop-templates/Component/Component.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{lowerCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{lowerCase name}}.component';`,
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator('svg', {
    description: 'Import SVG',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the svg file asset to be exported?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/assets/assets.svg.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/assets/assets.svg.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { ReactComponent as  {{pascalCase name}} } from '../img/svg/{{name}}.svg';`,
      },
      {
        type: 'append',
        path: 'src/assets/assets.svg.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/{{dotCase name}}.page.js',
        templateFile: 'plop-templates/Page/Page.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/{{dotCase name}}.scss',
        templateFile: 'plop-templates/Page/Page.module.css.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/index.js',
        templateFile: 'plop-templates/Page/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/pages/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{lowerCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/pages/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: 'append',
        path: 'src/App.js',
        pattern: `/* PAGES */`,
        template: `\t{{pascalCase name}},`,
      },
      {
        type: 'append',
        path: 'src/App.js',
        pattern: `{/* ROUTES */}`,
        template: `\t\t<Route exact path="/{{dashCase name}}">\n\t\t\t<{{pascalCase name}} />\n\t\t</Route>`,
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.js',
        templateFile: 'plop-templates/hook.js.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });
};
