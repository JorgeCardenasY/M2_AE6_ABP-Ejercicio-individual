$(document).ready(function () {
  // Función para abrir el modal con retraso usando jQuery
  function openModalWithJQueryDelay() {
    $('#myModal').delay(800).queue(function() {
      $(this).modal('show');
      $(this).dequeue();
    });
  }

  // Asignar eventos a las imágenes
  $(".clickable-image").on("click", function (e) {
    e.preventDefault();
    console.log("Imagen clickeada - Modal abierto con retraso");

    // Capturar el texto ALT de la imagen clickeada
    var imageAlt = $(this).attr("alt");
    
    // Mostrar el texto ALT en el modal
    $("#altTextDisplay").text(imageAlt);
    
    // Aplicar efecto a la imagen clickeada
    var imageId = $(this).attr('id');
    applyEffect(imageId);
    
    // Actualizar el carrusel para que muestre la imagen correspondiente
    var imageIndex = $(".clickable-image").index(this);
    
    // Que el carrusel comience en la imagen clickeada
    $('#carousel').carousel(imageIndex);
    
    // Abrir el modal con retraso
    openModalWithJQueryDelay();
  });

  // Aplicar diferentes efectos según la imagen
  function applyEffect(imageId) {
    switch(imageId) {
      case 'imagen1':
        $("#" + imageId).hide();
        break;
      case 'imagen2':
        $("#" + imageId).slideUp();
        break;
      case 'imagen3':
        $("#" + imageId).fadeOut(2000);
        break;
      case 'imagen4':
        $("#" + imageId).hide();
        break;
    }
    
    // Restaurar las imágenes después de 3 segundos
    setTimeout(function() {
      $(".clickable-image").show().css('display', 'block');
    }, 3000);
  }

  // Actualizar el texto ALT cuando se cambia de slide en el carrusel
  $('#carousel').on('slid.bs.carousel', function () {
    var activeIndex = $('.carousel-item.active').index();
    var altText = $(".clickable-image").eq(activeIndex).attr("alt");
    $("#altTextDisplay").text(altText);
  });

  // Evento cuando se abre el modal
  $("#myModal").on("shown.bs.modal", function () {
    console.log("Modal completamente visible");
  });

  // Evento cuando se cierra el modal
  $("#myModal").on("hidden.bs.modal", function () {
    console.log("Modal cerrado");
  });
});