"use strict";



define('new-prezident/app', ['exports', 'new-prezident/resolver', 'ember-load-initializers', 'new-prezident/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('new-prezident/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('new-prezident/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('new-prezident/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('new-prezident/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('new-prezident/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('new-prezident/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('new-prezident/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('new-prezident/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('new-prezident/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('new-prezident/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('new-prezident/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('new-prezident/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('new-prezident/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('new-prezident/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('new-prezident/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('new-prezident/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('new-prezident/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('new-prezident/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('new-prezident/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('new-prezident/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('new-prezident/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('new-prezident/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('new-prezident/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('new-prezident/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('new-prezident/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('new-prezident/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('new-prezident/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('new-prezident/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('new-prezident/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('new-prezident/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('new-prezident/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('new-prezident/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('new-prezident/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('new-prezident/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('new-prezident/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('new-prezident/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('new-prezident/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('new-prezident/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('new-prezident/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('new-prezident/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('new-prezident/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('new-prezident/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('new-prezident/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('new-prezident/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('new-prezident/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('new-prezident/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('new-prezident/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('new-prezident/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('new-prezident/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('new-prezident/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('new-prezident/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('new-prezident/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('new-prezident/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('new-prezident/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('new-prezident/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('new-prezident/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('new-prezident/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('new-prezident/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('new-prezident/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('new-prezident/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('new-prezident/components/video-collection', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        videoNavigator: Ember.inject.service(),
        videoHistory: Ember.inject.service(),
        playlist: null,
        didInsertElement: function didInsertElement() {
            this.setPlaylist(this.getNextPlaylist());
        },
        setPlaylist: function setPlaylist(playlist) {
            this.set('playlist', playlist);
            var videoRange = this.get('playlist.videoRanges').get('firstObject');
            this.setVideoRange(videoRange);

            // .should it be here or somerwhere else?
            this.get('videoHistory').save(this.get('playlist.id'));
        },
        setVideoRange: function setVideoRange(videoRange) {
            this.set('videoRange', videoRange);
            var youtubeId = videoRange.get('video.youtubeId');
            var videoId = videoRange.get('video.id');
            var player = this.get('player');
            if (!player) {
                this.initPlayer(youtubeId);
            } else {
                player.loadVideoById(youtubeId);
                player.seekTo(videoRange.get('from'), true);
            }
        },
        initPlayer: function initPlayer(youtubeId) {
            var player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: youtubeId,
                events: {
                    'onReady': this.onPlayerReady.bind(this),
                    'onStateChange': this.onPlayerStateChange
                }
            });
            this.set('player', player);
        },
        getNextPlaylist: function getNextPlaylist() {
            return this.get('videoNavigator').getNextPlaylist(this.get('route'));
        },
        onPlayerReady: function onPlayerReady(event) {
            event.target.seekTo(this.get('videoRange.from'), true);
        },
        onPlayerStateChange: function onPlayerStateChange(event) {
            // if (event.data == YT.PlayerState.PLAYING && !done) {
            //   //setTimeout(stopVideo, 6000);
            //   done = true;
            // }
        },

        actions: {
            nextVideo: function nextVideo() {
                this.setPlaylist(this.getNextPlaylist());
            }
        }
    });
});
define('new-prezident/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('new-prezident/helpers/app-version', ['exports', 'new-prezident/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('new-prezident/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('new-prezident/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('new-prezident/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('new-prezident/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('new-prezident/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('new-prezident/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('new-prezident/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('new-prezident/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'new-prezident/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('new-prezident/initializers/component-router-injector', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(application) {
    // Injects all Ember components with a router object:
    application.inject('component', 'router', 'router:main');
  }

  exports.default = {
    name: 'component-router-injector',
    initialize: initialize
  };
});
define('new-prezident/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('new-prezident/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('new-prezident/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('new-prezident/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('new-prezident/initializers/export-application-global', ['exports', 'new-prezident/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('new-prezident/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('new-prezident/initializers/load-bootstrap-config', ['exports', 'new-prezident/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('new-prezident/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('new-prezident/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("new-prezident/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('new-prezident/models/playlist', ['exports', 'ember-data', 'ember-data/relationships', 'ember-data/attr'], function (exports, _emberData, _relationships, _attr) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		name: (0, _attr.default)('string'),
		description: (0, _attr.default)('string'),
		videoRanges: (0, _relationships.hasMany)('video-range', { inverse: null }),
		route: (0, _attr.default)('string')
	});
});
define('new-prezident/models/video-range', ['exports', 'ember-data', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberData, _attr, _relationships) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		video: (0, _relationships.belongsTo)('video'),
		description: (0, _attr.default)('string'),
		from: (0, _attr.default)('number'),
		to: (0, _attr.default)('number')
	});
});
define('new-prezident/models/video', ['exports', 'ember-data', 'ember-data/attr'], function (exports, _emberData, _attr) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		youtubeId: (0, _attr.default)('string'),
		channel: (0, _attr.default)('string')
	});
});
define('new-prezident/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('new-prezident/router', ['exports', 'new-prezident/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/:route_id' });
  });

  exports.default = Router;
});
define('new-prezident/routes/application', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Route = Ember.Route;
	exports.default = Route.extend({
		model: function model() {
			localStorage.clear();
			this.store.pushPayload({
				playlists: [{
					id: 'elections',
					route: 'now',
					name: 'Выборы',
					description: 'Описание выборы',
					videoRanges: ['e1']
				}, {
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда',
					description: 'Описание пропаганда',
					videoRanges: ['p1']
				}],
				videoRanges: [{
					id: 'e1',
					from: 20.5,
					to: null,
					description: 'elections2018',
					video: 'elections2018'
				}, {
					id: 'p1',
					from: 10,
					to: 100,
					description: 'illegalprezident',
					video: 'illegalprezident'
				}],
				videos: [{
					id: 'elections2018',
					youtubeId: 'KuD0H_W8FDo'
				}, {
					id: 'illegalprezident',
					youtubeId: 'oqN1bQ7w89c'
				}]
			});
			return window.youTubeIframeAPIPromise;
		}
	});
});
define('new-prezident/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Route = Ember.Route;
	exports.default = Route.extend({
		model: function model(params) {
			// var model = this.get('store').peekRecord('video', params.video_id);
			// return model;
			return 'now';
		}
		// redirect(model, transition){
		//  	this.transitionTo('now', 'elections2018');
		// }

	});
});
define('new-prezident/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTSerializer.extend({});
});
define('new-prezident/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('new-prezident/services/video-history', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Service = Ember.Service;
    exports.default = Service.extend({
        save: function save(playlistId) {
            this.init();
            var hystory = JSON.parse(window.localStorage.getItem('videoHistory'));
            if (!hystory.includes(playlistId)) {
                hystory.push(playlistId);
                window.localStorage.setItem('videoHistory', JSON.stringify(hystory));
            }
        },
        get: function get() {
            this.init();
            return JSON.parse(window.localStorage.getItem('videoHistory'));
        },
        init: function init() {
            if (!window.localStorage.getItem('videoHistory')) {
                window.localStorage.setItem('videoHistory', JSON.stringify([]));
            }
        }
    });
});
define('new-prezident/services/video-navigator', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Service = Ember.Service;
	exports.default = Service.extend({
		router: Ember.inject.service(),
		store: Ember.inject.service(),
		videoHistory: Ember.inject.service(),
		getAllFor: function getAllFor(route) {
			return this.get('store').peekAll('playlist').filterBy('route', route);
		},
		getNextPlaylist: function getNextPlaylist(route) {
			var watched = this.get('videoHistory').get();
			var notWatched = this.getAllFor(route).reject(function (item) {
				return watched.includes(item.id);
			});
			return notWatched[Math.floor(Math.random() * notWatched.length)];
		}
	});
});
define("new-prezident/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RsUY6RfW", "block": "{\"symbols\":[\"navbar\",\"nav\"],\"statements\":[[6,\"div\"],[9,\"id\",\"headerContainer\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"landmark\"],[9,\"style\",\"max-width: 732px; margin: 0 auto;\"],[7],[0,\"\\n\"],[4,\"bs-navbar\",null,null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"id\",\"arrow-left\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n        \"],[1,[19,1,[\"toggle\"]],false],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"         \"],[6,\"span\"],[9,\"style\",\"color:red;\"],[7],[0,\"NP\"],[8],[0,\"  \\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"],[4,\"component\",[[19,1,[\"content\"]]],null,{\"statements\":[[4,\"component\",[[19,1,[\"nav\"]]],null,{\"statements\":[[0,\"          \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\",\"history\"],null,{\"statements\":[[0,\"ИСТОРИЯ\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\",\"now\"],null,{\"statements\":[[0,\"2018\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\",\"future\"],null,{\"statements\":[[0,\"БУДУЩЕЕ\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[9,\"id\",\"arrow-right\"],[7],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "new-prezident/templates/application.hbs" } });
});
define('new-prezident/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("new-prezident/templates/components/video-collection", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HYBfvJx2", "block": "{\"symbols\":[\"car\",\"p\"],\"statements\":[[6,\"div\"],[9,\"id\",\"contentContainer\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"videoDescription\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row header\"],[7],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"name\"],[7],[0,\"Нужны ли выборы 2018 года?\"],[8],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"timetotal\"],[7],[0,\"Время просмотра: 18 минут\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"summary col-8\"],[7],[0,\"\\n        \"],[1,[20,[\"playlist\",\"description\"]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-4\"],[7],[0,\"\\n\"],[4,\"bs-carousel\",null,[[\"nextControlIcon\",\"prevControlIcon\",\"wrap\",\"autoPlay\",\"showIndicators\"],[\"fas fa-chevron-circle-right\",\"fas fa-chevron-circle-left\",false,false,false]],{\"statements\":[[4,\"component\",[[19,1,[\"slide\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"car-item\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"range-index\"],[7],[6,\"img\"],[9,\"id\",\"img\"],[9,\"class\",\"style-scope yt-img-shadow\"],[9,\"src\",\"https://yt3.ggpht.com/-7I0BUCNSPPA/AAAAAAAAAAI/AAAAAAAAAAA/jUT_5vtw6CY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg\"],[9,\"width\",\"30\"],[7],[8],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"range-length\"],[7],[0,\"7 мин. 30 сек.\"],[8],[0,\"\\n\"],[4,\"bs-progress\",null,null,{\"statements\":[[0,\"              \"],[1,[25,\"component\",[[19,2,[\"bar\"]]],[[\"value\",\"minValue\",\"maxValue\",\"showLabel\",\"type\",\"striped\",\"animate\"],[1,0,100,true,\"danger\",false,true]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[19,1,[\"slide\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"car-item\"],[7],[0,\"2\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"],[2,\"        <div class=\\\"links-list\\\">\\n          См. также:\\n          {{#link-to \\\"index\\\"}}диктаторские режимы СНГ{{/link-to}},\\n          {{#link-to \\\"index\\\"}}фальсификация выборов{{/link-to}},\\n          {{#link-to \\\"index\\\"}}создание \\\"Единой России\\\"{{/link-to}},\\n          {{#link-to \\\"index\\\"}}контроль над СМИ{{/link-to}},\\n          {{#link-to \\\"index\\\"}}квасной патриотизм{{/link-to}}\\n        </div>\\n        \"],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"containingBlock\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"videoWrapper\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"id\",\"player\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"navigation\"],[7],[0,\"\\n\"],[4,\"bs-button\",null,[[\"onClick\",\"type\"],[[25,\"action\",[[19,0,[]],\"nextVideo\"],null],\"primary\"]],{\"statements\":[[0,\"      ПЕРЕЙТИ К СЛЕДУЮЩЕЙ ТЕМЕ\\n      \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-play\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-play\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "new-prezident/templates/components/video-collection.hbs" } });
});
define("new-prezident/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "E1MRmc0h", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"video-collection\",null,[[\"route\"],[[20,[\"model\"]]]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"id\",\"top_side\"],[9,\"style\",\"display:none;position:absolute; top:0; left:0; z-index:100000;background-color: #000; width: 100%; height:45%; transition: all 300ms linear;\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"style\",\"position:absolute; bottom: 0; width:100%; font-family:  Calibri;\"],[7],[0,\"\\n\"],[2,\"           <div id=\\\"newword\\\" style=\\\"color: red;font-size: 72px;text-align:center;\\\">NEW</div>\\n          <div style=\\\"color: white; font-size:35px;margin-top:-15px;text-align: center;\\\">prezident</div>\\n \"],[0,\"\\n          \"],[6,\"div\"],[9,\"style\",\"text-align:center;\"],[7],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",[26,[[18,\"rootURL\"],\"assets/nplogo.png\"]]],[7],[8],[0,\"  \\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"id\",\"divider\"],[9,\"style\",\"height:1px; width:150px; background-color: grey; margin:10px auto 0; transition: all 800ms cubic-bezier(0.6, -0.5, 0.735, 0.045);\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"script\"],[7],[0,\"\\n    //   function showContent(){\\n    //       var dividerElement = document.getElementById(\\\"divider\\\");\\n    //       divider.style.width=\\\"0%\\\";\\n    //       setTimeout(function(){\\n    //         var topElement = document.getElementById(\\\"top_side\\\");\\n    //         var bottomElement = document.getElementById(\\\"bottom_side\\\");\\n    //         var contentElement = document.getElementById(\\\"contentContainer\\\");\\n    //         topElement.style.opacity=0;\\n    //         bottomElement.style.opacity=0;\\n    //         //contentElement.style.display=\\\"block\\\";\\n    //         setTimeout(function(){\\n    //           topElement.remove();\\n    //           bottomElement.remove();\\n    //         },600);\\n    //       }, 900);\\n    //   }\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"bottom_side\"],[9,\"style\",\"display:none;position:absolute; left:0; z-index:100000;background-color: #000; top:45%; width: 100%; height:55%; transition: all 300ms linear;\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"style\",\"width:600px; margin: 40px auto 40px; background-color: #eee; padding: 10px\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"style\",\"text-align:center; width: 600px;\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"style\",\"margin-bottom:10px; font-size:15px; line-height: 1.5;font-family:Cambria\"],[7],[0,\"\\n            ПЕРВЕЙШАЯ ЗАДАЧА ТИРАНА - ПОСТОЯННО ВОВЛЕКАТЬ СТРАНУ В ВОЙНЫ, ЧТОБЫ НАРОД НУЖДАЛСЯ В ПРЕДВОДИТЕЛЕ.\\n            ЕСЛИ ТИРАН ЗАПОДОЗРИТ ЛЮДЕЙ В ВОЛЬНЫХ МЫСЛЯХ, ИЛИ МЫСЛЯХ О НЕНУЖНОСТИ ЕГО ПРАВЛЕНИЯ - ОН УНИЧТОЖИТ ИХ ПОД ПРЕДЛОГОМ, ЧТО ОНИ ПРОДАЛИСЬ ВРАГУ.\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"style\",\"display:none;margin-bottom:10px; font-size:15px; line-height: 1.5;font-family:Cambria\"],[7],[0,\"\\nМАССЫ НИКОГДА НЕ ЖАЖДАЛИ ЗНАТЬ ПРАВДУ. ИМ НУЖНЫ ИЛЛЮЗИИ, БЕЗ КОТОРЫХ ОНИ ЖИТЬ НЕ МОГУТ. НЕРЕАЛЬНОЕ ДЛЯ НИХ ВСЕГДА ПРЕВАЛИРУЕТ НАД РЕАЛЬНЫМ, И ФАЛЬШЬ ВОЗДЕЙСТВУЕТ НА НИХ С НЕ МЕНЬШЕЙ СИЛОЙ, ЧЕМ ПРАВДА. ОНИ ПОПРОСТУ НЕ ОТЛИЧАЮТ ОДНО ОТ ДРУГОГО\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"style\",\"padding:3px;font-size:15px;\"],[7],[0,\"\\n            - Платон, IV в до н.э.\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"style\",\"width: 100px; margin: 0 auto;\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"style\",\"width:100px;background-color:red;border-color:red; color:#fff;padding:5px;cursor:pointer;\"],[9,\"onclick\",\"showContent()\"],[7],[0,\"\\n          ДАЛЕЕ\\n        \"],[8],[0,\"  \\n      \"],[8],[0,\"\\n     \"],[2,\"  <div style=\\\"width: 45px; margin: 0 auto;\\\">\\n        <img src='{{rootURL}}assets/elie-wiesel.jpg' width=\\\"45px\\\" />\\n      </div> \"],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "new-prezident/templates/index.hbs" } });
});


define('new-prezident/config/environment', [], function() {
  var prefix = 'new-prezident';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("new-prezident/app")["default"].create({"name":"new-prezident","version":"0.0.0+c9c9b326"});
}
//# sourceMappingURL=new-prezident.map
