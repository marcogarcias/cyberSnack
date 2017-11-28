<?php
$src=__DIR__.'/src';
?>
<section>
  <div class="row">
    <div class="col-md-12 title-section">
      <h3>Usuarios</h3>
      <hr />
    </div>
  </div>
</section>

<article>
  <div class="row">
    <div class="col-md-12">
      <div id="pdv-panel-pcs" class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Lista de usuarios</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <button type="button" id="usr-add" class="btn btn-default"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Agregar</button>
            </div>
          </div>
          <div class="table-responsive">
          <table id="usr-listado" class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Nick</th>
                <th>Correo</th>
                <th>Alta</th>
                <th>Perfil</th>
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
$(document).ready(function(){
  Cyber.loadScript('./src/js/Usuarios.js', function(script, status){
    Usuarios.init();
  });
});
</script>
