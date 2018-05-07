import Component from '@ember/component';

export default Component.extend({
	classNames: ['ml12'],
	didInsertElement(){
        this._super(...arguments);

        // Wrap every letter in a span
        this.$().each(function(){
		  $(this).html($(this).text().replace(/([^\x00-\x80]|\w|\.|,|-)/g, "<span class='letter'>$&</span>"));
		});

		anime.timeline()
		  .add({
		    targets: '.ml12 .letter',
		    translateX: [40,0],
		    translateZ: 0,
		    opacity: [0,1],
		    easing: "easeOutExpo",
		    duration: 1500,
		    delay: function(el, i) {
		      return 500 + 40 * i;
		    },
		    complete: function() {
				this.get('onComplete')();
		    }.bind(this)
		  });
	},
});
