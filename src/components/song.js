import Media from './media';

class Song extends Media {
	constructor(artist,title,duration){
		super();
		this.title= title;
		this.artist= artist;
		this.duration= duration;
		this.isPlaying= false;
	}

	play() {this.isPlaying = true}
	stop() {this.isPlaying = false}
	toHtml() {
		return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
				<div class="col-sm-9">${this.title} - ${this.artist}</div>
				<div class="col-sm-3">${this.duration}</div> 
   				</div>`
	}
}

export default Song;
