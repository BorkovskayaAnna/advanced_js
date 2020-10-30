import Movie from "./components/movie";
import Song from './components/song';
import Playlist from './components/playlist';

const playList = new Playlist();

const song1 = new Song('name 1', 'author 1', '4.50');
const song2 = new Song('name 2', 'author 3', '3.50');
const song3 = new Song('name 3', 'author 3', '3.00');
const movie = new Movie('movie3', '2150', '3.30');

playList.add(song1);
playList.add(song2);
playList.add(song3);
playList.add(movie);

const list = document.getElementById('list');
playList.render(list);

const play = document.getElementById('btn-play')
const stop = document.getElementById('btn-stop')
const next = document.getElementById('btn-next')
play.onclick = function(){
    playList.play();
    playList.render(list)
}
stop.onclick = function(){
    playList.stop();
    playList.render(list)
}
next.onclick = function(){
    playList.next();
    playList.render(list)
}