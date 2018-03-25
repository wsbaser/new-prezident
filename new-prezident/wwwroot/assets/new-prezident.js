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
        videoRangeIndex: 0,
        currentVideoRangeIndex: -1,
        didReceiveAttrs: function didReceiveAttrs() {
            this._super.apply(this, arguments);
            this.setNextPlayList();
        },
        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this.set('initPlayerPromise', this.initPlayer());
        },
        updateCarouselArrows: function updateCarouselArrows() {
            var videoRangeIndex = this.get('videoRangeIndex');
            var videoRangesCount = this.get('playlist.videoRanges.length');
            var showPrev = videoRangeIndex > 0;
            var showNext = videoRangeIndex < videoRangesCount - 1;

            var $carousel = $('.carousel');
            var $prevButton = $carousel.children('.carousel-control-prev');
            var $nextButton = $carousel.children('.carousel-control-next');

            if (showPrev) {
                $prevButton.show();
            } else {
                $prevButton.hide();
            }
            if (showNext) {
                $nextButton.show();
            } else {
                $nextButton.hide();
            }
        },

        afterVideoRangeChanged: Ember.observer('currentVideoRangeIndex', function () {
            Ember.run.scheduleOnce('afterRender', function () {
                var currentVideoRangeIndex = this.get('currentVideoRangeIndex');

                var currentVideoRangeId = this.get('videoRange.id');
                var newVideoRangeId = this.get('playlist.videoRanges').objectAt(currentVideoRangeIndex).id;

                if (currentVideoRangeId !== newVideoRangeId) {
                    // . id changed, stop previos video
                    this.stopPlaying();
                }

                this.setVideoRange(currentVideoRangeIndex);
            }.bind(this));
        }),
        setPlaylist: function setPlaylist(playlist) {
            this.set('playlist', playlist);
            this.setVideoRange(0);
            this.get('videoHistory').save(playlist.id);
        },
        setVideoRange: function setVideoRange(index) {
            var videoRange = this.get('playlist.videoRanges').objectAt(index);
            this.set('videoRangeIndex', index);
            this.set('videoRange', videoRange);
            this.updateCarouselArrows();
            this.preparePlaying(videoRange);
        },
        preparePlaying: function preparePlaying(videoRange) {
            var initPlayerPromise = this.get('initPlayerPromise');
            if (videoRange && initPlayerPromise && !this.get('playingQueued')) {
                this.set('playingQueued', true);
                console.log('prepare playing for ' + videoRange.id);
                initPlayerPromise.then(function () {
                    this.loadVideoToPlayer(videoRange);
                    Ember.run.scheduleOnce('afterRender', function () {
                        this.showPreviewOverlay();
                    }.bind(this));
                }.bind(this));
            }
        },
        startPlaying: function startPlaying() {
            this.hidePreviewOverlay().then(function () {
                this.get('player').playVideo();
            }.bind(this));
        },
        stopPlaying: function stopPlaying() {
            if (this.get('playingQueued')) {
                this.set('playingQueued', false);
                this.get('player').pauseVideo();
                this.clearVideoTimer();
                this.set('videoRange.position', 0);
            }
        },
        hidePreviewOverlay: function hidePreviewOverlay() {
            return new Promise(function (resolve, reject) {
                var $playerOverlay = this.$('#playerOverlay');
                var $speaker = $playerOverlay.find('.speaker');
                var $description = $playerOverlay.find('.description');
                $speaker.css('opacity', 0);
                $description.css('opacity', 0);
                setTimeout(function () {
                    $playerOverlay.css('opacity', 0);
                    setTimeout(function () {
                        $playerOverlay.hide();
                        this.set('previewOverlayState', 0);
                        resolve();
                    }.bind(this), 300);
                }.bind(this), 1000);
            }.bind(this));
        },
        showPreviewOverlay: function showPreviewOverlay() {
            this.set('previewOverlayState', 1);
            var $playerOverlay = this.$('#playerOverlay');
            var $speaker = $playerOverlay.find('.speaker');
            var $description = $playerOverlay.find('.description');
            $playerOverlay.show();
            $playerOverlay.css('opacity', 1);
            var showDescription = function () {
                $description.css('opacity', 1);
                setTimeout(function () {
                    this.set('previewOverlayState', 2);
                    if (this.get('readyToPlay')) {
                        this.startPlaying();
                    }
                }.bind(this), 3000);
            }.bind(this);
            var showSpeaker = function showSpeaker() {
                if ($speaker[0]) {
                    $speaker.css('opacity', 1);
                    setTimeout(showDescription, 3000);
                } else {
                    showDescription();
                }
            };
            setTimeout(function () {
                showSpeaker();
            }, 300);
        },
        loadVideoToPlayer: function loadVideoToPlayer(videoRange) {
            console.log('loadVideo: ' + videoRange.id);
            this.set('readyToPlay', false);
            this.get('player').loadVideoById({
                'videoId': videoRange.get('video.youtubeId'),
                'startSeconds': videoRange.get('from')
            });
        },
        initPlayer: function initPlayer() {
            return new Promise(function (resolve, reject) {
                var onPlayerReady = function (e) {
                    resolve();
                    this.onPlayerReady();
                }.bind(this);
                var player = new YT.Player('player', {
                    height: '360',
                    width: '640',
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': this.onPlayerStateChange.bind(this)
                    },
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        showinfo: 0,
                        fs: 0
                    }
                });
                this.set('player', player);
            }.bind(this));
        },
        getNextPlaylist: function getNextPlaylist() {
            return this.get('videoNavigator').getNextPlaylist(this.get('route'));
        },
        onPlayerReady: function onPlayerReady(event) {
            this.hideLoader();
        },
        hideLoader: function hideLoader() {
            this.$('#loaderContainer').css('visibility', 'hidden');
            setTimeout(function () {
                this.$('#videoContainer').css('visibility', 'visible');
            }.bind(this), 300);
        },
        onPlayerStateChange: function onPlayerStateChange(event) {
            var player = event.target;
            if (event.data == YT.PlayerState.PLAYING) {
                switch (this.get('previewOverlayState')) {
                    case 0:
                        // . started laying after preview is hidden.
                        // . init position tracking timer
                        if (!this.get('timerId')) {
                            this.initVideoTimer(event.target);
                        }
                        console.log('video PLAYING');
                        break;
                    case 1:
                        // . video loading completed before preview is ready
                        // . pause playing and set readyToPlay to true
                        player.pauseVideo();
                        this.set('readyToPlay', true);
                        break;
                    case 2:
                        // . preview was ready before video loading completer
                        // . start playing
                        this.startPlaying();
                        break;
                }
            } else if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
                if (event.data == YT.PlayerState.ENDED) {
                    console.log('video ENDED');
                }
                if (event.data == YT.PlayerState.PAUSED) {
                    console.log('video PAUSED');
                }
            }
        },
        initVideoTimer: function initVideoTimer(player) {
            var timerId = window.setInterval(function () {
                var from = this.get('videoRange.from');
                var to = this.get('videoRange.to');
                var position = player.getCurrentTime();
                // console.log('old: '+oldPosition+', new: '+newPosition);

                if (position <= to) {
                    this.set('videoRange.position', position);
                } else {
                    this.setNextVideoRange();
                }
            }.bind(this), 500);
            this.set('timerId', timerId);
        },
        clearVideoTimer: function clearVideoTimer() {
            var timerId = this.get('timerId');
            if (timerId) {
                window.clearInterval(timerId);
                this.set('timerId', null);
            }
        },
        setNextPlayList: function setNextPlayList() {
            this.stopPlaying();
            if (this.get('videoRange')) {
                this.set('videoRange.position', 0);
            }
            var nextPlaylist = this.getNextPlaylist();
            if (nextPlaylist) {
                this.setPlaylist(nextPlaylist);
            } else {
                console.log('it was the last video.');
            }
        },
        setNextVideoRange: function setNextVideoRange() {
            this.stopPlaying();
            var videoRangesCount = this.get('playlist.videoRanges.length');
            var nextVideoRangeIndex = this.get('videoRangeIndex') + 1;
            if (nextVideoRangeIndex < videoRangesCount) {
                this.set('videoRangeIndex', nextVideoRangeIndex);
            } else {
                this.setNextPlayList();
            }
        },

        actions: {
            nextPlaylist: function nextPlaylist() {
                this.setNextPlayList();
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
define('new-prezident/helpers/minutes-string', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.minutesString = minutesString;

	function _toArray(arr) {
		return Array.isArray(arr) ? arr : Array.from(arr);
	}

	var helper = Ember.Helper.helper;
	function minutesString(_ref) {
		var _ref2 = _toArray(_ref),
		    minutes = _ref2[0],
		    rest = _ref2.slice(1);

		// 1,21,31,41,101,121 минута
		// 2,3,4,22,23,24,32,33,34,122,123,124 минуты
		// 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 минут

		var text = void 0;
		if (minutes > 10 && minutes < 20) {
			text = 'минут';
		} else {
			switch (minutes % 10) {
				case 1:
					text = 'минута';
					break;
				case 2:
				case 3:
				case 4:
					text = 'минуты';
					break;
				case 0:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					text = 'минут';
					break;
			}
		}
		return minutes + ' ' + text;
	}

	exports.default = helper(minutesString);
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
define('new-prezident/models/channel', ['exports', 'ember-data', 'ember-data/attr'], function (exports, _emberData, _attr) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		name: (0, _attr.default)('string'),
		youtubeId: (0, _attr.default)('string'),
		logoUrl: (0, _attr.default)('string')
	});
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
		route: (0, _attr.default)('string'),
		totalMinutes: Ember.computed('videoRanges', function () {
			var total = 0;
			this.get('videoRanges').forEach(function (videoRange) {
				total += videoRange.get('minutes');
			});
			return total;
		})
	});
});
define('new-prezident/models/video-range', ['exports', 'ember-data', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberData, _attr, _relationships) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		video: (0, _relationships.belongsTo)('video'),
		speaker: (0, _attr.default)('string'),
		description: (0, _attr.default)('string'),
		from: (0, _attr.default)('number'),
		to: (0, _attr.default)('number'),
		position: (0, _attr.default)('number'),
		minutes: Ember.computed('from', 'to', function () {
			var from = this.get('from');
			var to = this.get('to');
			return Math.ceil((to - from) / 60);
		}),
		positionTime: Ember.computed('position', function () {
			var totalSeconds = this.get('position') || this.get('from');
			var minutes = Math.floor(totalSeconds / 60);
			var seconds = Math.floor(totalSeconds % 60);
			return minutes + ':' + seconds;
		})
	});
});
define('new-prezident/models/video', ['exports', 'ember-data', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberData, _attr, _relationships) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		youtubeId: (0, _attr.default)('string'),
		channel: (0, _relationships.belongsTo)('channel')
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
					name: 'Демократические институты: Выборы',
					videoRanges: ['e1', 'e2']
				}, {
					id: 'propaganda',
					route: 'now',
					name: 'Пропаганда на ТВ и в сети',
					description: 'Описание пропаганда',
					videoRanges: ['p1']
				}],
				videoRanges: [{
					id: 'e1',
					from: 20.5,
					to: 30,
					description: 'Выборы 2018. Часть 1.',
					video: 'elections2018_p1'
				}, {
					id: 'e2',
					from: 20.5,
					to: 30,
					description: 'Почему отсутствует конкуренция на президентских выборах?',
					video: 'elections2018_p2'
				}, {
					id: 'p1',
					from: 10,
					to: 20,
					speaker: 'Сергей Филатов',
					description: 'о нелегитимности 3-го президентского срока.',
					video: 'illegalprezident'
				}],
				videos: [{
					id: 'elections2018_p1',
					youtubeId: '6kDqTi_xKoo',
					channel: 'universeofhistory'
				}, {
					id: 'elections2018_p2',
					youtubeId: 'KuD0H_W8FDo',
					channel: 'universeofhistory'
				}, {
					id: 'illegalprezident',
					youtubeId: 'oqN1bQ7w89c',
					channel: 'sotavision'
				}],
				channels: [{
					id: 'sotavision',
					name: 'sotavision',
					youtubeId: 'UCk9F6pe9Z2IPxm1VO9lS6NA',
					logoUrl: 'https://yt3.ggpht.com/-4p862zcrijI/AAAAAAAAAAI/AAAAAAAAAAA/a2-CRhE8IH0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
				}, {
					id: 'universeofhistory',
					name: 'Вселенная Истории',
					youtubeId: 'UC42ZrgA4ezCWVm8RHnS-xNA',
					logoUrl: 'https://yt3.ggpht.com/-7I0BUCNSPPA/AAAAAAAAAAI/AAAAAAAAAAA/jUT_5vtw6CY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
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
  exports.default = Ember.HTMLBars.template({ "id": "kCc+Wlvr", "block": "{\"symbols\":[\"navbar\",\"nav\"],\"statements\":[[6,\"div\"],[9,\"id\",\"headerContainer\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"landmark\"],[7],[0,\"\\n\"],[4,\"bs-navbar\",null,null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"id\",\"arrow-left\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n        \"],[1,[19,1,[\"toggle\"]],false],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"         \"],[6,\"span\"],[9,\"style\",\"color:red;\"],[7],[0,\"NP\"],[8],[0,\"  \\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"],[4,\"component\",[[19,1,[\"content\"]]],null,{\"statements\":[[4,\"component\",[[19,1,[\"nav\"]]],null,{\"statements\":[[0,\"          \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\",\"history\"],null,{\"statements\":[[0,\"ИСТОРИЯ\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\",\"now\"],null,{\"statements\":[[0,\"2018\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\",\"future\"],null,{\"statements\":[[0,\"БУДУЩЕЕ\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[9,\"id\",\"arrow-right\"],[7],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "new-prezident/templates/application.hbs" } });
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
  exports.default = Ember.HTMLBars.template({ "id": "WasCYeXw", "block": "{\"symbols\":[\"car\",\"videoRange\",\"p\"],\"statements\":[[6,\"div\"],[9,\"id\",\"contentContainer\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"videoContainer\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"videoDescription\"],[9,\"class\",\"container\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row header\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"name\"],[7],[1,[20,[\"playlist\",\"name\"]],false],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"timetotal\"],[7],[0,\"Время просмотра: \"],[1,[25,\"minutes-string\",[[20,[\"playlist\",\"totalMinutes\"]]],null],false],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"summary col-8\"],[9,\"style\",\"padding: 0 5px\"],[7],[0,\"\\n          \"],[1,[20,[\"playlist\",\"description\"]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-4\"],[9,\"style\",\"padding: 0 5px\"],[7],[0,\"\\n\"],[4,\"bs-carousel\",null,[[\"nextControlIcon\",\"prevControlIcon\",\"currentIndex\",\"index\",\"wrap\",\"autoPlay\",\"interval\",\"showIndicators\"],[\"fas fa-caret-right\",\"fas fa-caret-left\",[20,[\"currentVideoRangeIndex\"]],[20,[\"videoRangeIndex\"]],false,false,-1,false]],{\"statements\":[[4,\"each\",[[20,[\"playlist\",\"videoRanges\"]]],null,{\"statements\":[[4,\"component\",[[19,1,[\"slide\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"car-item\"],[7],[0,\"\\n                \"],[6,\"a\"],[10,\"href\",[26,[\"https://www.youtube.com/channel/\",[19,2,[\"video\",\"channel\",\"youtubeId\"]]]]],[9,\"target\",\"_blank\"],[7],[0,\"\\n                  \"],[6,\"img\"],[10,\"src\",[19,2,[\"video\",\"channel\",\"logoUrl\"]],null],[9,\"width\",\"30\"],[10,\"title\",[19,2,[\"video\",\"channel\",\"name\"]],null],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"range-length\"],[7],[0,\" \"],[1,[25,\"minutes-string\",[[19,2,[\"minutes\"]]],null],false],[8],[0,\"\\n\"],[4,\"if\",[[19,2,[\"showResumeButton\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"a\"],[9,\"class\",\"resume-video\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"resumeVideoRange\"]],[7],[0,\"Вернуться на \"],[6,\"span\"],[7],[1,[19,2,[\"positionTime\"]],false],[8],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"bs-progress\",null,null,{\"statements\":[[0,\"                    \"],[1,[25,\"component\",[[19,3,[\"bar\"]]],[[\"value\",\"minValue\",\"maxValue\",\"showLabel\",\"type\",\"striped\",\"animate\"],[[19,2,[\"position\"]],[19,2,[\"from\"]],[19,2,[\"to\"]],false,\"danger\",false,true]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]}],[0,\"              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null],[0,\"        \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"containingBlock\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"videoWrapper\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"id\",\"player\"],[7],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"id\",\"playerOverlay\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"back\"],[7],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"videoRange\",\"speaker\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[9,\"class\",\"block speaker\"],[7],[0,\"\\n                \"],[1,[20,[\"videoRange\",\"speaker\"]],false],[0,\"\\n                \"],[6,\"br\"],[7],[8],[0,\"\\n                рассказывает\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[6,\"div\"],[9,\"class\",\"block description\"],[7],[0,\"\\n              \"],[1,[20,[\"videoRange\",\"description\"]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"loaderContainer\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"cssload-loader\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"cssload-flipper\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"cssload-front\"],[7],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"cssload-back\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"navigation\"],[7],[0,\"\\n\"],[4,\"bs-button\",null,[[\"onClick\",\"type\"],[[25,\"action\",[[19,0,[]],\"nextPlaylist\"],null],\"primary\"]],{\"statements\":[[0,\"     \"],[6,\"i\"],[9,\"class\",\"fa fa-step-forward\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" Далее\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "new-prezident/templates/components/video-collection.hbs" } });
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
  require("new-prezident/app")["default"].create({"name":"new-prezident","version":"0.0.0+9752e15b"});
}
//# sourceMappingURL=new-prezident.map
