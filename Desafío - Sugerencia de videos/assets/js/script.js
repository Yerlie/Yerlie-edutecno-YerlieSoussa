// categorias Música,Película,Serie
// implementando clases, polimorfismo, closures y patrónmódulo.

class Multimedia {
  url = "​​assets/video/";
  getUrl() {
    return this.url;
  }
  setInicio() {
    console.log("Este método es para realizar un cambio en la URL del video");
  }
}

class Reproductor extends Multimedia {
  _inicio = 0;
  constructor(url, id) {
    super();
    this.playMultimedia(url, id);
  }
  playMultimedia(url, id) {
    let video = document.querySelector(`#${id} video`);
    let source = document.querySelector(`#${id} video source`);
    [...document.querySelectorAll("video")].forEach((vid) => {
      vid.pause();
    });
    source.setAttribute("src", url);
    video.load();
    video.currentTime = this._inicio;
    video.play();
  }
  setInicio(inicio) {
    this._inicio = inicio;
  }
}

let reproductor1 = new Reproductor("assets/video/y2mate.com1.mp4", "musica");
reproductor1.setInicio(2);
let reproductor2 = new Reproductor("assets/video/y2mate.com2.mp4", "peliculas");
let reproductor3 = new Reproductor("assets/video/y2mate.com3.mp4", "series");
