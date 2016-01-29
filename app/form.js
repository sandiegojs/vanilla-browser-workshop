var form = document.querySelector('form')
var apiURL = '//sandiegojs-vanilla-workshop.herokuapp.com'

var submitHandler = function(evt) {
  evt.preventDefault()
  var path = apiURL + '/forms'
  xhr('POST', path, serializeArray('form'), function(err, data) {
    if (err) {
      renderError(err)
      throw err
    }
    console.log(data)
    renderFormData(data)
    document.querySelector('form').reset()
  })
}
var serializeArray = function(selector) {
  var form = document.querySelector(selector)
  var formInputs = form.querySelectorAll('input:not([type=submit]),textarea')

  // Empty object for us to set key values of inputs
  var data = {}

  for (var i = 0; i < formInputs.length; i++) {
    var item = formInputs[i]

    if (item.name === 'skills_attributes') {
      if (!!data[item.name]) {
        data[item.name].push(item.value)
      } else {
        data[item.name] = [item.value]
      }
    } else {
      data[item.name] = item.value
    }
  }

  return {
    "form": data
  }
}
var xhr = function(method, path, data, callback) {
  var request = new XMLHttpRequest()
  request.open(method, path, true)
  request.setRequestHeader('Content-Type', 'application/json')
  request.onreadystatechange = function() {
    // ignore anything that isn't the last state
    if (request.readyState !== 4) { return }

    // if we didn't get a "good" status such as 200 OK or 201 Created send back an error
    if (request.readyState === 4 && (request.status !== 200 && request.status !== 201)) {
      callback(new Error('XHR Failed: ' + path), null)
    }

    // return our server data
    callback(null, JSON.parse(request.responseText))
  }
  request.send(JSON.stringify(data))
}

form.addEventListener('submit', submitHandler)


var createElementWithTextNode = function(tagName, tagContent) {
  var node = document.createElement(tagName)
  if (tagContent) {
    var textNode = document.createTextNode(tagContent)
    node.appendChild(textNode)
  }
  return node
}

var renderError = function(error) {
  var responseNode = document.querySelector('.response-wrapper')
  var errorNode = createElementWithTextNode('div', error.toString())
  errorNode.className = 'error'
  responseNode.appendChild(errorNode)
}

var renderFormData = function(data) {
  var responseNode = document.querySelector('.response-wrapper')

  //generic success message
  var successNode = createElementWithTextNode('div', 'You\'ve add a new card')
  successNode.className = 'success'
  responseNode.appendChild(successNode)

  var dictionaryNode = document.createElement('dl')
  var keys = ['name', 'email', 'github', 'twitter', 'city', 'state', 'bio']
  keys.forEach(function(key) {
    //create a dom node with the name of a value
    var termNode = createElementWithTextNode('dt', key)
    dictionaryNode.appendChild(termNode)

    //create another dom node with the value
    var definitionNode = createElementWithTextNode('dd', data[key])
    dictionaryNode.appendChild(definitionNode)
  })

  var skillsTermNode = createElementWithTextNode('dt', 'skills')
  dictionaryNode.appendChild(skillsTermNode)

  var skillsDefinitionNode = document.createElement('dd')
  var skillsList = document.createElement('ul')
  skillsDefinitionNode.appendChild(skillsList)
  dictionaryNode.appendChild(skillsDefinitionNode)

  if (data.skills_attributes) {
    data.skills_attributes.forEach(function (skill) {
      var skillNode = createElementWithTextNode('li', skill.description)
      skillsList.appendChild(skillNode)
    })
  }

  dictionaryNode.className = 'response'
  responseNode.appendChild(dictionaryNode)
}
