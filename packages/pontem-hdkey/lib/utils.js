const pathRegex = new RegExp("^m(\\/[0-9]+')+$")
const replaceDerive = (val) => val.replace("'", '')

module.exports = {
  pathRegex,
  replaceDerive
}
