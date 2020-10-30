class Media {
	constructor(title) {
		this.title = title;
		this.isPlaying = false;
	}
	play() {
		this.isPlaying = true;
	}
	stop() {
		this.isPlaying = false;
	}
}

export default Media;
