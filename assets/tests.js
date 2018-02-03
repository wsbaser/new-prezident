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
    assert.ok(false, 'components/video-collection.js should pass ESLint\n\n7:20 - \'YT\' is not defined. (no-undef)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n21:25 - \'event\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/video.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/video.js should pass ESLint\n\n');
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

  QUnit.test('routes/future.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/future.js should pass ESLint\n\n');
  });

  QUnit.test('routes/history.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/history.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n4:18 - \'transition\' is defined but never used. (no-unused-vars)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/now.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/now.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define('new-prezident/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
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
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
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
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
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

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/video-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/video-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/future-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/future-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/history-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/history-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/now-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/now-test.js should pass ESLint\n\n');
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
define('new-prezident/tests/unit/routes/future-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:future', 'Unit | Route | future', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('new-prezident/tests/unit/routes/history-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:history', 'Unit | Route | history', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
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
define('new-prezident/tests/unit/routes/now-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:now', 'Unit | Route | now', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('new-prezident/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
