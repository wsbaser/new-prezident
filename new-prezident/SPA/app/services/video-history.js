import Service from '@ember/service';

export default Service.extend({
	save(playlistId){
        this.init();
        var hystory = JSON.parse(window.localStorage.getItem('videoHistory'));
        if(!hystory.includes(playlistId)){
            hystory.push(playlistId);
            window.localStorage.setItem('videoHistory', JSON.stringify(hystory));
        }
    },
    get(){
        this.init();
        return JSON.parse(window.localStorage.getItem('videoHistory'));
    },
    init(){
        if(!window.localStorage.getItem('videoHistory')){
            window.localStorage.setItem('videoHistory', JSON.stringify([]));
        }
    }
});
