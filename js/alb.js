
$(document).ready(function () {
  lista();
});

function lista() {
  var tabla = $('#tablaAlbumes tbody');
  tabla.html('');

  $.each(datos.albumes, function (id, album) {
    let tr = $('<tr/>');
    tr.append($('<td/>').append(album.titulo));
    tr.append($('<td/>').append(album.anyo));

    let a = $('<a href="#"><span class="fas fa-record-vinyl"></span></a>');
    a.click(function (e) {
      detalle(album.id);
    });
    tr.append($('<td/>').append(a));

    tabla.append(tr);
  });

  $('#albumes').removeClass('d-none');
  $('#album').addClass('d-none');
}

function detalle(id) {
  const nuevo = datos.albumes.filter(album => album.id === id);
  if (nuevo.length > 0) {
    let album = nuevo[0];

    $('#artista').val(album.artista);
    $('#titulo').val(album.titulo);
    $('#anyo').val(album.anyo);
    $('#porcentaje').val(album.porcentaje);

    var tabla = $('#tablaPistas tbody');
    tabla.html('');
    $.each(album.pistas, function (id, pista) {
      let tr = $('<tr/>');
      tr.append($('<td/>').append(pista.orden));
      tr.append($('<td/>').append(pista.nombre));
      tr.append($('<td/>').append(pista.duracion));

      let a = $('<a href="#"><span class="fas fa-file-contract"></span></a>');
      a.click(function (e) {
        letra(album.id, pista.id);
      });
      tr.append($('<td/>').append(a));

      tabla.append(tr);
    });

    $('#album').removeClass('d-none');
    $('#albumes').addClass('d-none');
  }
}

function letra(id, pista_id) {
  const nuevo = datos.albumes.filter(album => album.id === id);
  if (nuevo.length > 0) {
    let album = nuevo[0];
    const nueva = album.pistas.filter(pista => pista.id === pista_id);
    if (nueva.length > 0) {
      $('#letra').text(nueva[0].letra);
      $('#letra2').text(nueva[0].letra2);
      $('#dialogoLetra').modal('show');
    }
  }
}
