module.exports = {
  plugins: [
    {
      module: require('@kentico/sourcebit-source-kontent'),
      options: {
        projectId: '61ac876c-cd02-01ac-59e4-609cb3ec2fae',
        languageCodenames: [
          'en-US'
        ]
      }
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        pages: function(objects,utils) {
        return objects.reduce((pages, object) => {
          if ((object.__metadata.modelName === 'about_me_page') && (object.__metadata.source === '@kentico/sourcebit-source-kontent')) {
            return pages.concat({ path: '/about', page: object });
          }
          if ((object.__metadata.modelName === 'blog_post') && (object.__metadata.source === '@kentico/sourcebit-source-kontent')) {
            return pages.concat({ path: '/blog/{slug}', page: {...object, slug: utils.slugify(object['slug'])} });
          }
          return pages;
        }, [])
        }
      }
    }
  ]
}
