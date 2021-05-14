$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("#carouselExampleSlidesOnly").carousel();
  $("#boton1").click(function () {
      alert("El correo fue enviado correctamente...");
  })
});
