exports.config={
  files:{
    javascripts : {
      joinTo : {
        'js/app.js' : /^(web\/static\/js)/,
        'js/vendor.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/materialize/bin/materialize.js',
            'bower_components/satellizer/dist/satellizer.js',
        ]
      },
      order : {
        before : [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          'bower_components/materialize/bin/materialize.js',
            'bower_components/satellizer/dist/satellizer.js',

        ]
      }
    },
    stylesheets : {
      joinTo : {
        'css/vendor.css' : [
          'bower_components/materialize/bin/materialize.css',
          'bower_components/angular-material/angular-material.css',
        ]
      },
      order:{
        before : [
          'bower_components/materialize/bin/materialize.css',
          'bower_components/angular-material/angular-material.css',
        ]
      }
    }
  },
  conventions: {
		assets: /^(web\/assets)/
	},

	paths: {
		watched: ['web/static', 'web/assets'],
		public: "public"
	},

	plugins: {

	},

	modules: {
		autoRequire: {
			"js/app.js": ["web/static/js/app"]
		}
	},

	npm: {
		enabled: true
	}
};
