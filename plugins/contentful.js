var contentful = require('contentful')
var Cookies = require('js-cookie')

const createSalesforInstance = (options) => {
  var client = contentful.createClient({
    space: 'nakv44jd0g8a',
    accessToken: 'cLhCWdiPHse8Acc7RgOKKtl3ZDFsM0-F5HF2ddAXocU',
  })

  var lang = Cookies.get('lang')
    ? Cookies.get('lang')
    : Cookies.set('lang', 'en-US')

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
  }

  return content
}

export default (context, inject) => {
  const contentful = createSalesforInstance({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  })

  context.$contentful = contentful

  inject('contentful', contentful)
}
