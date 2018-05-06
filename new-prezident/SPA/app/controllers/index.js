import Controller from '@ember/controller';

export default Controller.extend({
    init: function () {
		this._super();
		Ember.run.schedule("afterRender", this, function(){
			
		});
	},
	showContinueButton(){
		$('#goToVideos').css('opacity', 1);
	},
	actions:{
		onTextAnimationComplete(){
			$('#citeContainer .author').css('opacity', 1);
			setTimeout(this.showContinueButton.bind(this), 1500);
		},
		goToVideos(){
			var dividerElement = document.getElementById("divider");
      		dividerElement.style.width="0%";
	      	setTimeout(function(){
		        var containerElement = document.getElementById("previewContainer");
		        containerElement.style.opacity=0;
		        setTimeout(function(){
		        	this.transitionToRoute('time', 'history');
		        }.bind(this), 300);
			}.bind(this), 900);
		}
	}
});
