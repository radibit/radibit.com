const contentful = require('contentful')

export default ({app, env, store}) => {
  const clientConfig = {
    host: 'preview.contentful.com',
    space: env.CTF_SPACE_ID,
    accessToken: env.CTF_CPA_TOKEN
  }

  if (env.IS_PRODUCTION) {
    clientConfig.host = 'cdn.contentful.com'
    clientConfig.accessToken = env.CTF_CDA_TOKEN
  }

  const client = contentful.createClient(clientConfig)
  const { me, landingpages, posts, projects } = store.state

  app.contentful = {
    async getMe () {
      if (!me.entry.sys) {
        return client.getEntries({
          'sys.id': env.CTF_ME_ID
        }).then(res => {
          store.commit('me/setMe', res.items[0])
          return res.items[0]
        }).catch(err => console.log(err))
      }

      return me.entry
    },

    async getLandingpages () {
      if (!landingpages.list.length) {
        return client.getEntries({
          content_type: env.CTF_LANDING_PAGE_ID
        }).then(res => {
          store.commit('landingpages/setList', res.items)
          return res.items
        }).catch(err => console.log(err))
      }

      return landingpages.list
    },

    async getPosts () {
      if (!posts.list.length) {
        return client.getEntries({
          content_type: env.CTF_POST_ID,
          order: '-fields.date'
        }).then(res => {
          store.commit('posts/setList', res.items)
          return res.items
        }).catch(err => console.log(err))
      }

      return posts.list
    },

    async getProjects () {
      if (!projects.list.length) {
        return client.getEntries({
          content_type: env.CTF_PROJECT_ID
        }).then(res => {
          store.commit('projects/setList', res.items)
          return res.items
        }).catch(err => console.log(err))
      }

      return projects.list
    }
  }
}
