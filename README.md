# `angular-cart` — the cart basket for AngularJS apps

### Clone `angular-cart`

Clone the `angular-cart` repository using git:

```
git clone https://github.com/stefanoguglielmi/angular-cart.git
cd angular-cart
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

```
npm install

bower install
```
*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-cart` changes this location through the `.bowerrc` file. Putting it in the `dist` folder
makes it easier to serve the files by a web server.*

After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `dist/bower_components` - contains the Angular framework and NgDialog plugin files

### Run the Application

Lunch the build command that will generate the /dist folder.

```
gulp build
```
after that, just start the app:

```
gulp
```
Now browse to the app at [`localhost:3000/`][local-app-url].
