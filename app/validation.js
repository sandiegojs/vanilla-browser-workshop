var form = document.getElementsByTagName('form')[0];
var email = document.querySelector('input[name="email"]');

// Check for valid email while the user types
email.addEventListener('keyup', function(event){
  // see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState for
  // other validity states
  if (email.validity.typeMismatch){
    email.setCustomValidity('Oops, try a real email address.');
  } else {
    email.setCustomValidity('');
  }
  setError(email);
}, false);

// bonus add keyup event for name field

// Prevent automatic browser validation
form.noValidate = true;

// Apply custom validation logic
form.addEventListener('submit', validateForm, false);

function validateForm(event){
  var form = event.target;
  var f;
  var field;

  // loop all fields
  for (f = 0; f < form.elements.length; f++) {

    // get field
    field = form.elements[f];

    // skip this field if we don't care about the it or its type
    //if (shouldIgnore(field)) continue;

    if (isValid(field)) {
      // remove error styles and messages
      clearError(field);
    } else {
      // style field, show error, etc.
      setError(field);
    }
  }

  if (!form.checkValidity()){
    // form is invalid
    event.preventDefault();
  }
}
//
////function shouldIgnore(field){
////  var type = field.nodeName;
////  // ignore buttons, fieldsets, etc.
////  return (type !== 'INPUT' && type !== 'TEXTAREA' && type !== 'SELECT');
////}
//
function isValid(field){
  // custom logic for state
  if (field.name === 'state') {
    var validStates = ['CA', 'TX', 'NY'];
    if (validStates.indexOf(field.value) === -1) {
      // invalid state
      field.setCustomValidity('Use CA, TX, or NY');
    } else {
      // valid state
      field.setCustomValidity('');
    }
  }
  return field.checkValidity();
}

function clearError(field){
  var error = field.nextElementSibling;
  if (error) error.innerHTML = '';
}

function setError(field){
  var error = field.nextElementSibling;
  if (error) error.innerHTML = field.validationMessage;
}
