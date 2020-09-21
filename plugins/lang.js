var contentful = require('contentful')
var Cookies = require('js-cookie')

const createLangReader = () => {
  var lang = Cookies.get('lang')

  if (lang == undefined) {
    Cookies.set('lang', 'en-US')
    lang = 'en-US'
  }

  var utils = {
    msg: (message, nulled = null) => {
      var json = require(`~/lang/${lang}.json`)
      var message = json[message]

      return message ? message : nulled
    },
  }

  return utils
}

export default (context, inject) => {
  const lang = createLangReader()

  context.$lang = lang

  inject('lang', lang)
}
