<?php
$src=__DIR__.'/src';
?>
<section>
  <div class="row">
    <div class="col-md-12 title-section">
      <h3>PUNTO DE VENTA</h3>
      <hr />
    </div>
  </div>
</section>

<article>
  <div class="row">
    <div class="col-md-6">
      <div id="pdv-panel-pcs" class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">PC's (6xhora)</h3>
        </div>
        <div class="panel-body">
          <form>
            <div class="col-md-6">
              <div class="form-group">
                <select class="form-control">
                  <option value="0">Elige un PC</option>
                  <option value="1">PC 1</option>
                  <option value="2">PC 2</option>
                  <option value="3">PC 3</option>
                  <option value="4">PC 4</option>
                </select>
              </div>

              <div class="form-group">
                Total: <input type="number" class="form-control" min="0" placeholder="0.00">
              </div>

              <button type="submit" class="btn btn-default">Agregar</button>
            </div>
            <div class="col-md-6">
              <div class="pdv-panel-img">
                <img src="./src/imgs/varios/pc01.png" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Productos</h3>
        </div>
        <div class="panel-body">
          <form class="form-horizontal">
            <div class="col-md-6">
              <div class="form-group">
                <label class="checkbox-inline">
                  <input type="checkbox" id="filter-check-1" value="papeleria"> papelería
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="filter-check-2" value="dulces"> dulces
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="filter-check-3" value="servicios"> servicios
                </label>
              </div>

              <div class="form-group">
                <select class="form-control">
                  <option value="0">Elige un producto</option>
                  <option value="1">Folder t/c</option>
                  <option value="2">Lápiz</option>
                  <option value="3">Pluma</option>
                  <option value="4">Hojas de color</option>
                  <option value="5">Hojas blancas</option>
                </select>
              </div>
              
              <div class="form-group">
                <div class="produc-desc">
                  Elige un producto para agregar a la venta...
                </div>
              </div>

              <div class="form-group">
                <label class="col-md-3 control-label"> Cantidad: </label>
                <div class="col-md-5">
                  <input type="number" class="form-control"  min="0" placeholder="0">
                </div>
              </div>

              <div class="form-group">
                <label class="col-md-3 control-label"> Total: </label>
                <div class="col-md-5">
                  <input type="number" class="form-control" min="0" placeholder="0.00">
                </div>
              </div>

              <button type="submit" class="btn btn-default">Agregar</button>
            </div>
            <div class="col-md-6">
              <div class="form-group has-success has-feedback">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Buscar">
                  <span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
                </div>
              </div>
              <div class="pdv-panel-img">
                <img src="./src/imgs/varios/products01.png" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Videojuegos (15xhora)</h3>
        </div>
        <div class="panel-body">
          contenido...
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Detalle</h3>
        </div>
        <div class="panel-body">
          contenido...
        </div>
      </div>
    </div>
  </div>
</article>