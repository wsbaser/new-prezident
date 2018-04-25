import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
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
