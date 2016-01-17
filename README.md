# KPN AngularJS front end developer test

##Assignment Rules
* Build working HTML page (as shown in section 1. Page preview) with AngularJS.
	*When you change subscription, costs in receipt should be updated
* Create open GIT repository on some public resource and commit continuously your work so we can see the progress.
* You are free to choose additional frameworks/plugins (if you think that is needed)
* All dynamic data should be loaded from JSON file. You can structure JSON as you want. See section 4. Technical for product information.
* Styling is not necessary.
* Bonus points: change big device image when you click on a side/back device thumbnail.



slush scaffolding system README
============

## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches all files for changes and lints, builds and injects them into the index.html accordingly.

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.
