# Date component example

This tutorial explains the steps to create a date using the [hof-component-date](https://github.com/UKHomeOfficeForms/hof-component-date)

## Getting started

Create a directory called date-component and use the [hof-generator](https://github.com/UKHomeOfficeForms/hof-guide/blob/master/source/documentation/getting-started.md) to create your app

Currently the app loads to a name page with a field `input[type=text]`.  We will remove this and create a step that displays a date of birth.

Go into the following directory `date-component-> apps -> date-component` and open the `index.js` file. Rename the first step key from `/name` to `/date-of-birth`. 

Edit the fields option from `['name']` to `['date-of-birth']`. Your steps object in the `index.js` file should look like this:

```
  steps: {
    '/date-of-birth': {
      fields: ['date-of-birth'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete'],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
```
Now start your app by running `npm start`. Open http://localhost:8080/date-component in a browser then you should see your app. It should look something like this:

![Date component start page](../../images/date-component-getting-started.png?raw=true)

## Adding the Date-component field

Now we need to add a field to our date-of-birth step.  

Firstly we will need to install the [hof-component-date](https://www.npmjs.com/package/hof-component-date) module and include it in our `package.json`.  Run the command
```
npm install hof-component-date --save
```

Go into the fields directory and open the `index.js` file. To use the date-component we will have to `require` it.  Add a constant at the top of the file 
```
const dateComponent = require('hof-component-date')
```

The hof-generator created a name property in the file. Remove this.

Add the field with the key `date-of-birth`. Give this key a property of a `dateComponent()`. The date-component is a function that takes arguments.  Give it the arguments of the name of the field `date-of-birth` and an object validate key with an array of properties `['required', 'before']`

Note: the `before` validator means a date cannot be in the future

Your file should look like this

```
const dateComponent = require('hof-component-date');

module.exports = {
  'date-of-birth': dateComponent('date-of-birth', {
    validate: ['required', 'before']
  })
};
```

Now start your app by running `npm start`. Open http://localhost:8080/date-component in a browser then you should see your app using the date-component. It should look something like this:

![Date component field](../assets/images/date-component-date-of-birth.png)



