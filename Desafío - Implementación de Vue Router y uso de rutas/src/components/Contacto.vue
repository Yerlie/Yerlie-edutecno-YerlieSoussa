<!-- CONTENIDO PARA LA VISTA DE CONTACTO -->
<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('assets/img/contact-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1>Contacto</h1>
              <span class="subheading"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <p>
            ¿Tienes dudas o sugerencias? Déjame un mensaje y me contactaré
            contigo.<br /><br />
          </p>
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label
                ><input
                  class="form-control"
                  type="text"
                  id="name"
                  required=""
                  placeholder="Nombre"
                /><small class="form-text text-danger help-block"></small>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address</label
                ><input
                  class="form-control"
                  type="email"
                  id="email"
                  required=""
                  placeholder="Email "
                /><small class="form-text text-danger help-block"></small>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Phone Number</label
                ><input
                  class="form-control"
                  type="tel"
                  id="phone"
                  required=""
                  placeholder="Teléfono"
                /><small class="form-text text-danger help-block"></small>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-3">
                <label>Message</label
                ><textarea
                  class="form-control"
                  id="message"
                  data-validation-required-message="Please enter a message."
                  required=""
                  placeholder="Mensaje"
                  rows="5"
                ></textarea
                ><small class="form-text text-danger help-block"></small>
              </div>
            </div>
            <div id="success"></div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                id="sendMessageButton"
                type="submit"
              >
                enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr />
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-twitter fa-stack-1x fa-inverse"></i
                ></span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-facebook fa-stack-1x fa-inverse"></i
                ></span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-github fa-stack-1x fa-inverse"></i
                ></span>
              </li>
            </ul>
            <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>