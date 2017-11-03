<?php
$src=__DIR__.'/src';
?>
<section>
  <div class="row">
    <div class="col-md-12 title-section">
      <h3>INVENTARIO</h3>
      <hr />
    </div>
  </div>
</section>

<article>
  <div class="row">
    <div class="col-md-12">
      <div id="pdv-panel-pcs" class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Lista de productos</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <button type="button" id="inv-add" class="btn btn-default"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Agregar</button>
            </div>
          </div>
          <div class="table-responsive">
          <table id="inv-listado" class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Estado</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>

<script>
var productos=[
  {
    idProducto: 1,
    nombreProducto: 'Folder t/c azul',
    descripcionProducto: 'Folder tamaño carta color azul, marca libre.',
    existencias: 50,
    precio: 2.00,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 2,
    nombreProducto: 'Folder t/c beige',
    descripcionProducto: 'Folder tamaño carta color beige, marca libre.',
    existencias: 50,
    precio: 2,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 3,
    nombreProducto: 'Goma migajón',
    descripcionProducto: 'Goma de migajón marca xxx.',
    existencias: 20,
    precio: 4,
    categoria: 'papeleria',
    activo: 0,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 4,
    nombreProducto: 'Lapiz N2',
    descripcionProducto: 'Lápiz N2, marca Scool.',
    existencias: 100,
    precio: 3.5,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 5,
    nombreProducto: 'Boligrafo tinta negra',
    descripcionProducto: 'Bolígrafo tinta negra, marca Scool.',
    existencias: 12,
    precio: 4.00,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 6,
    nombreProducto: 'Bolígrafo tinta azul',
    descripcionProducto: 'Bolígrafo tinta azul, marca Scool.',
    existencias: 12,
    precio: 4.00,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 7,
    nombreProducto: 'Hojas color',
    descripcionProducto: 'Hojas de color: negro, verde, verde oscuro, rojo, rosa. Marca eurcol arcoiris.',
    existencias: 100,
    precio: 1.00,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },

  {
    idProducto: 8,
    nombreProducto: 'Paleta piña',
    descripcionProducto: 'Paletas de piña con chile, marca Vero.',
    existencias: 50,
    precio: 2.00,
    categoria: 'dulces',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 9,
    nombreProducto: 'Carlos V Stick',
    descripcionProducto: 'Carlos V stick.',
    existencias: 50,
    precio: 2.00,
    categoria: 'dulces',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 10,
    nombreProducto: 'Chicles canels',
    descripcionProducto: 'Chicles canels.',
    existencias: 20,
    precio: 1.00,
    categoria: 'dulces',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 11,
    nombreProducto: 'Caramelo acidulado',
    descripcionProducto: 'Caramelos acidulado.',
    existencias: 100,
    precio: 0.50,
    categoria: 'papeleria',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 12,
    nombreProducto: 'Nug',
    descripcionProducto: 'Chocolate Nug.',
    existencias: 12,
    precio: 4.00,
    categoria: 'dulces',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 13,
    nombreProducto: 'mini rock',
    descripcionProducto: 'Mini rocko.',
    existencias: 12,
    precio: 2.00,
    categoria: 'dulces',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 14,
    nombreProducto: 'Instalación app',
    descripcionProducto: 'Instalación de app en celular.',
    existencias: 0,
    precio: 10.00,
    categoria: 'servicios',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },

  {
    idProducto: 14,
    nombreProducto: 'Instalación app',
    descripcionProducto: 'Instalación de app en celular.',
    existencias: 0,
    precio: 10.00,
    categoria: 'servicios',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 15,
    nombreProducto: 'Copias b/n',
    descripcionProducto: 'Copias blanco y negro.',
    existencias: 0,
    precio: 1.00,
    categoria: 'servicios',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 16,
    nombreProducto: 'Copias color',
    descripcionProducto: 'Copias color.',
    existencias: 0,
    precio: 3.00,
    categoria: 'servicios',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 17,
    nombreProducto: 'Escaneo',
    descripcionProducto: 'Escaneo.',
    existencias: 0,
    precio: 2.00,
    categoria: 'servicios',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
  {
    idProducto: 18,
    nombreProducto: 'Investigación',
    descripcionProducto: 'Investigación, tarea, etc.',
    existencias: 0,
    precio: 10.00,
    categoria: 'servicios',
    activo: 1,
    datecreate: '2017-10-01',
    dateUpdate: '2017-10-01'
  },
];

$(document).ready(function(){
  var tbody = '';
  for(var prod in productos){
    var p = productos[prod];
    tbody+='<tr class="'+(p.activo||'warning')+'">'+
      '<td>'+p.nombreProducto+'</td>'+
      '<td>'+p.descripcionProducto+'</td>'+
      '<td class="text-center">'+p.existencias+'</td>'+
      '<td class="text-center">'+p.precio+'</td>'+
      '<td><span class="label label-default">'+p.categoria+'</span></td>'+
      '<td>'+p.activo+'</td>'+
      '<td class="text-center"><button type="button" class="btn btn-warning" data-idUp="'+p.idProducto+'"> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td>'+
      '<td class="text-center"><button type="button" class="btn btn-danger" data-idDel="'+p.idProducto+'"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>'+
    '</tr>';
  }
  $('#inv-listado tbody').empty().append(tbody);
});
</script>
