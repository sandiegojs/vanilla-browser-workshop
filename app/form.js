var apiURL = '//sandiegojs-vanilla-workshop.herokuapp.com'
var form = document.querySelector('form')

var serializeArray = function(selector) {
  var form = document.querySelector(selector)
  var formInputs = form.querySelectorAll('input:not([type=submit]),textarea')

  // Empty object for us to set key values of inputs
  var data = {
    "form": {}
  }

  for (var i = 0; i < formInputs.length; i++) {
    var item = formInputs[i]

    if (item.name === 'skills_attributes') {
      if (!!data['form'][item.name]) {
        data['form'][item.name].push(item.value)
      } else {
        data['form'][item.name] = [item.value]
      }
    } else {
      data['form'][item.name] = item.value
    }
  }

  return data
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

var submitHandler = function(evt) {
  evt.preventDefault()
  var path = apiURL + '/forms'
  xhr('POST', path, serializeArray('form'), function(err, data) {
    if (err) { throw err }
    console.log(data)
  })
}

form.addEventListener('submit', submitHandler)
