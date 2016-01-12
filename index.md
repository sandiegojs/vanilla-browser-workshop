# Vanilla Javascript in the Browser Workshop

Welcome to Vanilla Javascript in the Browser workshop hosted by [San Diego JS][san diego js].

## Pre-event Setup Instructions

Prior to your arrival the following should be installed on your system:

0. [Install Git][git-scm]
0. [Install Node.js 4.2 LTS][node-install]
0. Setup NPM for non-sudo installation
    0. NPM is the node package manager.  It will automatically be installed when you install node.
    0. NPM installs packages *locally* (within the directory it is invoked in) for per-project modules, or *globally* for packages you want accessible everywhere.
    0. However, by default NPM installs global packages in a root-restricted location, requiring SUDO to install.  This creates a **huge** headache.  As an alternative, _before_ you install any packages, follow [this guide][npm-g-without-sudo] to configure your NPM to install in your home directory without requiring sudo.
0. Clone this repository `git clone git@github.com:sandiegojs/vanilla-browser-workshop.git`
0. Change directories into the workshop folder: `cd vanilla-browser-workshop` and install your local dependencies with: `npm install`
0. Install these global dependencies using the `-g` flag (ex `npm install <package> -g`)
    * gulp
    * mocha


## Goal: Effectively use Vanilla Javascript instead of jQuery

Modern web developement workflows often rely on libraries like jQuery.  But using libraries can add a lot of unneeded bloat to your project.  This workshop will help you dig a little deeper into Javascript and using pure "vanilla" Javascript accomplish more without using the $.

This workshop will feature:

* DOM API
* Browser Event API
* Using Cookies
* XHR Requests
* Dynamic HTML
* Testing with Mocha


Here is what we will provide for you:

### API service

This will be the endpoint for you to POST your data to, as well as GET data back from.



### Project Structure & Scripts to Build/Test



### Some HTML



### Heroku to Publish

[REPLACE w/ heroku button to deploy]()


## HTML validate fields

## Add submit event

## Event Handling

## Build XHR and submit

## Handle request

## Dom creation to rendered returned info

## Add JS Validation

## Dom selection

## Add skills (add more, delete)

## Welcome text with cookies

## Adding classes to style error message or boxes

## Test with Mocha

[git-scm]: http://git-scm.com/downloads
[npm-g-without-sudo]: https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md
[node-install]: https://nodejs.org/download/
[san diego js]: http://sandiegojs.org/