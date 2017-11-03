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
      <div id="pdv-login" class="col-md-12">
        <div class="pdv-login-cont col-md-4 col-md-offset-4">
          <h2>LOGIN</h2>
          <form class="pdv-login-bg2">
            <div class="form-group">
              <input type="text" class="form-control" id="nick" placeholder="Nick">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="password" placeholder="Contraseña">
            </div>
            <button type="submit" class="btn btn-default">Acceder</button>
          </form>
        </div>
      </div>
    </div>
  </div>

<script type="text/javascript" src="./src/libs/jquery/jquery.min.js"></script>
<script type="text/javascript" src="./src/libs/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="./src/js/Cyber.js?<?php echo time(); ?>"></script>
<script>
$(document).ready(function(){
  Cyber.onLogin();
});
</script>
</body>
</html>