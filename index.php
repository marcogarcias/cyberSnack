<?php
$src=__DIR__.'/src';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CYBERSNACK - Punto de venta</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./src/libs/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="./src/libs/toastr/toastr.min.css">
  <link rel="stylesheet" href="./src/css/styles.css?<?php echo time(); ?>">
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <header>
          <div class="header-logo">
            <img src="./src/imgs/varios/cybersnack-logo-min.png" />
          </div>
          <div class="header-title">
            <h1>PUNTO DE VENTA CYBERSNACK</h1>
          </div>
        </header>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <nav class="navbar navbar-default nav-pdv">
          <div class="container-fluid">
            <!-- Menú cuando es muy pequeña la ventana -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Menú</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="nav-menu">
              <ul class="nav navbar-nav">
                <li><a href="#" class="menu" data-menu="dashboard">Dashboard</a></li>
                <li><a href="#" class="menu" data-menu="pdv">P.D.V</a></li>
                <li><a href="#" class="menu" data-menu="inventario">Inventario</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Reportes <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#" class="menu" data-menu="">Action</a></li>
                    <li><a href="#" class="menu" data-menu="">Another action</a></li>
                    <li><a href="#" class="menu" data-menu="">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" class="menu" data-menu="">Separated link</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" class="menu" data-menu="">One more separated link</a></li>
                  </ul>
                </li>
                <li><a href="#" class="menu" data-menu="cortes">Cortes</a></li>
                <li><a href="#" class="menu" data-menu="pagos">Pagos</a></li>
                <li><a href="#" class="menu" data-menu="usuarios">Usuarios</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Usuario <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#" class="menu" data-menu="perfil">Perfil</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" class="menu" data-menu="logout">Cerrar Sesión</a></li>
                  </ul>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>
    </div>

    <div class="row">
      <div id="pdv-content" class="col-md-12">
        
      </div>
    </div>
  </div>

<!-- Modal -->
<div class="modal fade" id="inv-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        <div id="inv-modal-cont"><button type="submit" id="btn-aceptar-modal" class="btn btn-default">Acceder</button></div>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript" src="./src/libs/jquery/jquery.min.js"></script>
<script type="text/javascript" src="./src/libs/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="./src/libs/toastr/toastr.min.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="./src/libs/sweetalert/sweetalert.min.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="./src/js/Cyber.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="./src/js/Form.js?<?php echo time(); ?>"></script>
<script>
$(document).ready(function(){
  Cyber.init();
  $.ajax({
    url: "./src/html/pdv.php", 
    success: function(res){
      $("#pdv-content").html(res);
    }
  });
});
</script>
</body>
</html>