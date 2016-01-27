function last(selector) {
  var all = document.querySelectorAll(selector)
  var length = all.length
  return all[length - 1]
}


// Add Skill Button
var addSkillButton = document.querySelector('.add-skill')
var skillTemplate = document.querySelector('.skill').cloneNode(true)

function addSkillHandler(evt) {
  var prevSkill = last('.skill')
  var newSkill = skillTemplate.cloneNode(true)
  var submitNode = document.querySelector('.submit')
  var form = submitNode.parentNode

  prevSkill.querySelector('.add-skill').classList.add('hidden')
  prevSkill.querySelector('.remove-skill').classList.remove('hidden')

  newSkill.querySelector('.add-skill').addEventListener('click', addSkillHandler)
  newSkill.querySelector('.remove-skill').addEventListener('click', removeSkillHandler)

  form.insertBefore(newSkill, submitNode)
}

addSkillButton.addEventListener('click', addSkillHandler)


// Remove Skill Button
var removeSkillButton = document.querySelector('.remove-skill')

function removeSkillHandler(evt) {
  var skill = evt.currentTarget.parentNode
  skill.remove()
}

removeSkillButton.addEventListener('click', removeSkillHandler)

