import { boot } from 'quasar/wrappers'
import VueMatomo from 'vue-matomo'

export default boot(({ app }) => {
  app.use(VueMatomo, {
    host: 'https://my.nostrver.se',
    siteId: 13,
  })
})
