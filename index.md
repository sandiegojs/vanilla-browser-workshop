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
0. If you plan to deploy your app onto Heroku, setup [Heroku Toolbelt][heroku]


## Goal: Effectively use vanilla JavaScript in the browser!

Modern web developement workflows often rely on libraries like jQuery.  But using libraries can add a lot of unneeded bloat to your project. This workshop will help you dig a little deeper into JavaScript and how to use the available browser APIs without using the $.

This workshop will feature:

* DOM API
* Browser Event API
* Using Cookies
* XHR Requests
* Dynamic HTML
* Testing with Mocha

## The example

For this workshop, we are going to build out a business card creator. There is a simple html form inside of `public/index.html` that we will build upon and add life to. We'll collect common profile information that one would normally share professionally, like contact info and skills, and then display it.

## Keep your resources handy

Workshops are fun and can be a fast way to learn while building something potentially reusable. There will come a time, however, when you'll want to reference the API and see if there are other methods or functionality that you didn't know existed.

A really good open-source resource that also provides great offline functionality for you future digital nomads is [DevDocs.io][devdocs]. You can select the different APIs you want to be immediately searchable and they cover everything from the browser, to node, to rails, to elixer, and even more you never even knew about!

For this workshop, it maybe useful to reference the sections that will align with this workshop

* [DOM API][dom]
* [Browser Event API][events]
* [Using Cookies][cookies]
* [XHR Requests][xhr]
* [Testing with Mocha][mocha]

Another good resource for learning about the available APIs and even the internals of how a browser parses, executes and draws a page, is [Mozilla Developer Network][mdn]

**Have any other great resources you've used? We would love to hear about them and share them with the other attendees!**


## API service

Our app is a client-side application, meaning it will be running in a user's browser. We will need to persist the data that we are
creating to a backend service and database so that we can recall it later.

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


## About the project and getting started

This project uses the build tool [Gulp][gulp] to automate a bunch of stuff for you. The gulp tasks are all defined in the `tasks` directory if you're the curious type. They are used to compile the sources and styles found within the `app` directory and put the final compiled source and styles into the `public` directory. The `public/index.html` will include the final styles and scripts inside of it.

In order to get started, this boilerplate has been setup to show us a simple form right from the start. So let's dive in and give the gulp step a try!

Type the following from the root of the project:

`$ gulp`

You should see some output similar to the following:

```
$ gulp
[16:02:13] Requiring external module babel-core/register
[16:02:14] Using gulpfile ~/Code/vanilla-browser-workshop/gulpfile.babel.js
[16:02:14] Starting 'scripts'...
[16:02:14] Starting 'styles'...
[16:02:14] Starting 'serve'...
[16:02:14] Finished 'serve' after 46 ms
livereload[tiny-lr] listening on 35729 ...
[16:02:15] Finished 'styles' after 175 ms
[16:02:15] Finished 'scripts' after 355 ms
[16:02:15] Starting 'default'...
[16:02:15] Finished 'default' after 114 μs
folder "public" serving at http://localhost:3000
```

As you can see, the scripts and styles are compiled, and then the server get's started. Now that we have that running, let's jump over to the browser and visit [localhost:300][localhost].

![image of boilerplate running](https://s3.amazonaws.com/f.cl.ly/items/1R3O1Q39443m1B2d3k23/Screen%20Shot%202016-01-17%20at%204.03.41%20PM.png?v=bd9646af)

Cool! We have a very simple form with some basic styling already good to go for us.

**If you're having issues bug one of the instructors! We're here to help you out.**


## The HTML

We should know what kind of document we are working with before we create anything. Since the boilerplate was setup for us, we'll just need to open up the `public/index.html` file and take a look.

You should see that the styles are included in the header from `public/index.css` and the script for our JavaScript is included at the top of the body from `public/index.js`.

**ProTip™:** When the browser encounters a `<script>` tag, it is blocking - meaning the browser will immediately download and execute it. To load the `<script>` asynchronousy and not block the browser's parsing of the document, set `async=true` on the tag.

Within the `public/index.html` you should see a basic form with labels and inputs. Familiarize yourself with the different fields.

Are you ready to get coding, yet?

## HTML validate fields

Have you ever used a form where you didn't realize you missed a required field until after clicking the submit button, waiting for the page to send data off to the server, waiting for the page to reload, and then finally to get the perplexing red error message at the top? What a pain!

Let's save our users the hastle and let them know right away that they are required to fill in certain fields _before_ sending anything off to the server.

There are a few different ways to do this, and we will elaborate on this later, but the most basic way to get going with form validation is using the built-in HTML field validations.

### Required fields

We really only need the `name` and `email` field to be required. In order to make these inputs required, all we have to do is add the word `required` as an attribute on the `<input>` tag.

For example:

`<input type='text' placeholder='Name' required>`

Go ahead and update the `name` and `email` inputs to include this special attribute.

*After making any changes to this project, be sure to save the file and reload your browser!*

Let's head over to [localhost:3000][localhost] again and try it out.

If you hit the submit button now, you should immediately see a pop-up message near the first missing input telling you the field is required like below.

![required error box](https://s3.amazonaws.com/f.cl.ly/items/172n3w0f0h0f2d0y0i01/Screen%20Shot%202016-01-17%20at%204.43.54%20PM.png?v=b83630c4)

Neato! This is all taken care of for you by the browser out-of-the-box!

### Validations

Some `<input>` types have intrinsic constraints, such as `type=email`. If you look at the `public/index.html` you will see that our email field is currently setup as a `type=text`. Go ahead and change it.

Once you have, we can test it out. Head over to the browser, type in a `Name` value (so that we don't get the required error) and type in a phoney string that doesn't look like an email address. Once you hit submit, you should see a nice message come up and tell you that your input doesn't look like an email.

![email error message](https://s3.amazonaws.com/f.cl.ly/items/3y1l2h0R2x1Q0S1r351B/Screen%20Shot%202016-01-17%20at%204.52.45%20PM.png?v=e72c1557)

If you want to learn more about validations that are available for inputs, [MDN has a great article covering the details][mdn-validations].

## DOM

The Document Object Model(DOM) is how we are able to interact with our page via JavaScript.

> The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. Nodes can also have event handlers attached to them, and once that event is triggered the event handlers get executed. Essentially, it connects web pages to scripts or programming languages. -[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

One of the trickest things about the DOM is that it's up to the browser vendor to implement it and therefore every implementation is a little different. This is why we get browser compatability issues.

But as you will see there is a large API exposed by the DOM which allows us to craft powerful user experiences. An easy way to think of the DOM is a tree of nested nodes and each node is an element from our HTML document, e.g. a `div`, `p`, `button`, etc...

To visualize this all you need to do is open your web inspector and look at the `Elements` tab to see this structure realized. Each one of those nodes (elements) has many properties and functions you can take advantage off.

## Dom selection

In order to interact with the DOM the first thing you will need to understand is element selection. By selecting an element (DOM node) we get a reference to that element which allows us to take actions on it.

There are many functions we can use to get a reference to a DOM node. Overtime these functions have been introduced to solve different needs. As such the browser support for them can vary. You should always research browser compatability to ensure they will work for your user base.

- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [getElementsByName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)
- [getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)

We are going to focus on `querySelector`. This function behaves similiar to jQuery in that it allows you to specify a [css selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) that will be used to find the first matching node. One of the nice feature of this function is that it is available both on the `document` as well as `element`. These mean you can take an existing element reference and query it for sub elements.

Lets begin by selecting the input with a name attribute of `name`.

    var inputName = document.querySelector('input[name="name"]')

This returns us an [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) which has a `value` property available. Go ahead and set the value property to see an example of how you can change the DOM.

	inputName.value = 'My new value!'

You should see the value you set refelected in the forms input.

Whenever dealing with a DOM node it's important to understand what type of element you have and what are it's parents. That will determine the properties and functions available to you.

## Event Handling

When users interact with the webpage the DOM publishes these interactions as events, for example; `click`, `scroll`, `keypress` and [more](https://developer.mozilla.org/en-US/docs/Web/Events).

By selecting an element from the DOM we can [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) which will execute a callback function we provide any time that event occurs. Lets start by listening for a `click` on the `document` and trigger an `alert` whenever that event occurs.

  function handler() {
    alert('user clicked on the page');
  };

  document.addEventListener('click', handler);

Now if you click on the page you should receive an alert with your message. Alerting users every time they click the page can get annoying so lets remove that event listener.

  document.removeEventListener('click', handler)

It's important to note that in order for us to be able to remove an event listener we need to name our functions so we can specify what to remove for that event.

Using this simple API we can trigger complex logic contained with in provided functions.


### Multiple Event Listeners

One of the great things about event listeners is that we can attach multiple listeners per event, for example.

  function handlerOne() {
    // Do some logic
  }

  function handlerTwo() {
    // Do some logic
  }

  document.addEventListener('click', handlerOne)
  document.addEventListener('click', handlerTwo)

Now both of these functions will be executed whenever someone clicks the page.

### Event Listener Parameter

When we attach callback functions to events these functions are passed an event parameter. The type of event given will change depending on the type input device which triggered it. Since we are listening for a `click` event we will receive a [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent).

  function logEvent(evt) {
    console.log(evt);
  }
  document.addEventListener('click', logEvent)

If you inspect this event in the console you will see there are quite a few properties available to us. The ones most commonly used are `target` and `currentTarget`.

`target` is the element who dispatched the event.

`currentTarget` is the element who handled the event during the event capture (a.k.a bubbling) phase.

Although important we won't dive into the distinct between these two just yet. For our purposes we are going to use the `currentTarget` event to always get a reference to the element who has the event listener listening for the event.

## Add submit event

## Build XHR and submit

## Handle request

## Dom creation to rendered returned info

## Add JS Validation


## Add skills (add more, delete)

## Welcome text with cookies

## Adding classes to style error message or boxes

## Test with Mocha

## Heroku to Publish

[Heroku][heroku] is a web hosting platform that allows developers to go from code to running apps in minutes.  It has a free tier, as well as a super fast workflow. To try it out create a free account on Heroku, and then use the button below to automatically deploy this app directly from GitHub to a running Heroku instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sandiegojs/vanilla-browser-workshop)

Read [Getting Started with Node.js on Heroku][node-heroku] for more information.

[localhost]: http://localhost:3000
[git-scm]: http://git-scm.com/downloads
[npm-g-without-sudo]: https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md
[node-install]: https://nodejs.org/download/
[san diego js]: http://sandiegojs.org/
[mdn-validations]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
[gulp]: http://gulpjs.com/
[heroku]: http://heroku.com
[heroku-toolbelt]: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
[heroku-node]: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction
[devdocs]: http://devdocs.io
[dom]: https://devdocs.io/dom/
[events]: https://devdocs.io/dom_events
[cookies]: https://devdocs.io/dom/document/cookie
[xhr]: https://devdocs.io/dom/xmlhttprequest
[mocha]: https://devdocs.io/mocha/
[mdn]: https://developer.mozilla.org/en-US/
