'use strict';

define('new-prezident/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/video-collection.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/video-collection.js should pass ESLint\n\n24:25 - \'$\' is not defined. (no-undef)\n71:13 - Unexpected console statement. (no-console)\n95:20 - \'Promise\' is not defined. (no-undef)\n95:46 - \'reject\' is defined but never used. (no-unused-vars)\n140:9 - Unexpected console statement. (no-console)\n149:20 - \'Promise\' is not defined. (no-undef)\n149:46 - \'reject\' is defined but never used. (no-unused-vars)\n150:42 - \'e\' is defined but never used. (no-unused-vars)\n154:30 - \'YT\' is not defined. (no-undef)\n174:19 - \'event\' is defined but never used. (no-unused-vars)\n185:27 - \'YT\' is not defined. (no-undef)\n193:21 - Unexpected console statement. (no-console)\n207:30 - \'YT\' is not defined. (no-undef)\n207:66 - \'YT\' is not defined. (no-undef)\n208:28 - \'YT\' is not defined. (no-undef)\n209:17 - Unexpected console statement. (no-console)\n211:28 - \'YT\' is not defined. (no-undef)\n212:17 - Unexpected console statement. (no-console)\n218:17 - \'from\' is assigned a value but never used. (no-unused-vars)\n247:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/minutes-string.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/minutes-string.js should pass ESLint\n\n3:44 - \'rest\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('initializers/component-router-injector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/component-router-injector.js should pass ESLint\n\n');
  });

  QUnit.test('models/channel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/channel.js should pass ESLint\n\n');
  });

  QUnit.test('models/playlist.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/playlist.js should pass ESLint\n\n2:10 - \'belongsTo\' is defined but never used. (no-unused-vars)\n10:16 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/video-range.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/video-range.js should pass ESLint\n\n3:21 - \'hasMany\' is defined but never used. (no-unused-vars)\n12:11 - \'Ember\' is not defined. (no-undef)\n17:16 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/video.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/video.js should pass ESLint\n\n3:21 - \'hasMany\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n4:8 - \'params\' is defined but never used. (no-unused-vars)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/video-history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/video-history.js should pass ESLint\n\n');
  });

  QUnit.test('services/video-navigator.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/video-navigator.js should pass ESLint\n\n13:7 - \'notWatched\' is assigned a value but never used. (no-unused-vars)');
  });
});
define('new-prezident/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('new-prezident/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'new-prezident/tests/helpers/start-app', 'new-prezident/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('new-prezident/tests/helpers/resolver', ['exports', 'new-prezident/resolver', 'new-prezident/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('new-prezident/tests/helpers/start-app', ['exports', 'new-prezident/app', 'new-prezident/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('new-prezident/tests/integration/components/video-collection-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('video-collection', 'Integration | Component | video collection', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "BpOYoIUR",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"video-collection\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "VVb/StDH",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"video-collection\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('new-prezident/tests/integration/helpers/minutes-string-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('minutes-string', 'helper:minutes-string', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "Pclb98WY",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"minutes-string\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('new-prezident/tests/test-helper', ['new-prezident/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('new-prezident/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/video-collection-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/video-collection-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/minutes-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/minutes-string-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/component-router-injector-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/component-router-injector-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/channel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/channel-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/playlist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/playlist-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/video-range-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/video-range-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/video-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/video-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/video-history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/video-history-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/video-navigator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/video-navigator-test.js should pass ESLint\n\n');
  });
});
define('new-prezident/tests/unit/initializers/component-router-injector-test', ['new-prezident/initializers/component-router-injector', 'qunit', 'new-prezident/tests/helpers/destroy-app'], function (_componentRouterInjector, _qunit, _destroyApp) {
  'use strict';

  var Application = Ember.Application;
  var run = Ember.run;


  (0, _qunit.module)('Unit | Initializer | component router injector', {
    beforeEach: function beforeEach() {
      var _this = this;

      run(function () {
        _this.application = Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _componentRouterInjector.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('new-prezident/tests/unit/models/channel-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('channel', 'Unit | Model | channel', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('new-prezident/tests/unit/models/playlist-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('playlist', 'Unit | Model | playlist', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('new-prezident/tests/unit/models/video-range-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('video-range', 'Unit | Model | video range', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('new-prezident/tests/unit/models/video-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('video', 'Unit | Model | video', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('new-prezident/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('new-prezident/tests/unit/services/video-history-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:video-history', 'Unit | Service | video history', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('new-prezident/tests/unit/services/video-navigator-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:video-navigator', 'Unit | Service | video navigator', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('new-prezident/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
