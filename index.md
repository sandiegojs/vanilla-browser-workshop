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


## Goal: Effectively use Vanilla Javascript in the Browser!

Modern web developement workflows often rely on libraries like jQuery.  But using libraries can add a lot of unneeded bloat to your project. This workshop will help you dig a little deeper into JavaScript and how to use the available browser APIs without using the $.

This workshop will feature:

* DOM API
* Browser Event API
* Using Cookies
* XHR Requests
* Dynamic HTML
* Testing with Mocha


Here is what we will provide for you:

### API service

Our app is a client-side application so we need to persist the data that is
created to a backend service and database.

We could use fixture data or a mock service for this, but some friendly backend
developers have already made a working API for us, so let's use that.

Our API is setup at https://sandiegojs-vanilla-workshop.herokuapp.com and supports the following endpoints


<table class="table table-bordered table-striped">
  <colgroup>
    <col class="col-xs-1">
    <col class="col-xs-3">
    <col class="col-xs-5">
  </colgroup>
  <thead>
    <tr>
      <th>Verb</th><th>path</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td><td>/forms</td><td>List of forms</td>
    </tr>
    <tr>
      <td>POST</td><td>/forms</td><td>Create a new form</td>
    </tr>
    <tr>
      <td>GET</td><td>/forms/:id</td><td>Retrieve a form</td>
    </tr>
    <tr>
      <td>PUT</td><td>/forms/:id</td><td>Update a form</td>
    </tr>
    <tr>
      <td>DELETE</td><td>/forms/:id</td><td>Delete a form</td>
    </tr>
    <tr>
      <td>GET</td><td>/skills</td><td>List of skills</td>
    </tr>
    <tr>
      <td>POST</td><td>/skills</td><td>Create a new skill</td>
    </tr>
    <tr>
      <td>GET</td><td>/skills/:id</td><td>Retrieve a skill</td>
    </tr>
    <tr>
      <td>PUT</td><td>/skills/:id</td><td>Update a skill</td>
    </tr>
    <tr>
      <td>DELETE</td><td>/skills/:id</td><td>Delete a skill</td>
    </tr>
  </tbody>
</table>


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
