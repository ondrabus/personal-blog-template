module.exports = {
  plugins: [
    {
      module: require('sourcebit-source-contentful'),
      options: {
        accessToken: process.env['CONTENTFUL_ACCESS_TOKEN'],
        environment: 'master',
        spaceId: 'g4398ji4dsxs'
      }
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        pages: function(objects,utils) {
        return objects.reduce((pages, object) => {
          if ((object.__metadata.modelName === 'aboutMePage') && (object.__metadata.source === 'sourcebit-source-contentful')) {
            return pages.concat({ path: '/about', page: object });
          }
          if ((object.__metadata.modelName === 'blogPost') && (object.__metadata.source === 'sourcebit-source-contentful')) {
            return pages.concat({ path: '/blog/{slug}', page: {...object, slug: utils.slugify(object['slug'])} });
          }
          return pages;
        }, [])
        }
      }
    }
  ]
}
