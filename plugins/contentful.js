var contentful = require('contentful')
var Cookies = require('js-cookie')

const createContentfulInstance = (auth) => {
  var client = contentful.createClient(auth)

  var lang = Cookies.get('lang')

  if (lang == undefined) {
    Cookies.set('lang', 'en-US')
    lang = 'en-US'
  }

  var content = {
    getEntries: async (type, options) => {
      var action = Object.assign(
        {
          content_type: type,
          locale: lang,
        },
        options
      )

      let data = await client.getEntries(action)
      return {
        data,
      }
    },
    getEntry: async (id) => {
      let data = await client.getEntry(id)
      return {
        data,
      }
    },
  }

  return content
}

export default (context, inject) => {
  const contentful = createContentfulInstance({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  context.$contentful = contentful

  inject('contentful', contentful)
}
