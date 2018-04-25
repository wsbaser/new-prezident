import Service from '@ember/service';

export default Service.extend({
	save(playlistId){
        this.init();
        var hystory = JSON.parse(window.localStorage.getItem('citesHistory'));
        if(!hystory.includes(playlistId)){
            hystory.push(playlistId);
            window.localStorage.setItem('citesHistory', JSON.stringify(hystory));
        }
    },
    get(){
        this.init();
        return JSON.parse(window.localStorage.getItem('citesHistory'));
    },
    clear(){
    	window.localStorage.setItem('citesHistory', JSON.stringify([]));
    },
    init(){
        if(!window.localStorage.getItem('citesHistory')){
            window.localStorage.setItem('citesHistory', JSON.stringify([]));
        }
    }
});
