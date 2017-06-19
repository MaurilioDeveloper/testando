/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/forms/bundles/upgrade.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',

      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',

      'app/translate': 'app/transpiled-js/translate',
      'ngx-toastr': 'npm:ngx-toastr/toastr.umd.js',

      'ng-lightning/ng-lightning': 'npm:ng-lightning/bundles/ng-lightning.umd.js',
      'tether': 'npm:tether/dist/js',

      'hammerjs': 'npm:hammerjs/hammer.js',
      'ngx-quill': 'npm:ngx-quill/bundles/ngx-quill.umd.js',
      'quill': 'npm:quill/dist/quill.js',
      // 'quill': 'npm:quill/dist/quill.min.js',
      // '@covalent/core': 'npm:@covalent/core/core.umd.js',
      // '@covalent/http': 'npm:@covalent/http/http.umd.js',
      // '@covalent/highlight': 'npm:@covalent/highlight/highlight.umd.js',
      // '@covalent/markdown': 'npm:@covalent/markdown/markdown.umd.js',
      // '@covalent/dynamic-forms': 'npm:@covalent/dynamic-forms/dynamic-forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './transpiled-js/main.js', //path to main.js
        defaultExtension: 'js'
      },

      'app/translate': {
        main: 'index.js',
        defaultExtension: 'js'
      },

      'tether': {
        main: 'tether.js',
        defaultExtension: 'js'
      },

      rxjs: {
        defaultExtension: 'js'
      },

      '.': {
        defaultExtension: 'js'
      },
      'ngx-quill': {
        format: 'cjs',
        meta: {
          deps: ['quill']
        }
      },
      'quill': {
        format: 'cjs'
      }

    }
  });
})(this);