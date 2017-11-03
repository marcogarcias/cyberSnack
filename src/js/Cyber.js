var Cyber={
  srcHtml: './src/html/',
  init: function(){
    this.initNavBar();
  },

  onLogin: function(){
    $('#pdv-login').fadeIn(1000);
  },
  initNavBar: function(){
    var this_ = this;
    $(".navbar-collapse li").hover(function() {
      $(this).addClass( "active" );
    }, function() {
      $(this).removeClass( "active" );
    });
    $(".menu").on('click', function(e){
      e.preventDefault();
      var section = $(this).attr('data-menu');
      console.log(section);
      section && this_[section]();
    });
  },

  dashboard: function(){
    console.log('[ dashboard ]');
  },
  pdv: function(){
    console.log('[ pdv ]');
    var this_=this;
    $.ajax({
      url: this_.srcHtml+"pdv.php", 
      success: function(res){
        $("#pdv-content").empty().html(res);
      }
    });
  },
  inventario: function(){
    console.log('[ inventario ]');
    var this_ = this;
    $.ajax({
      url: this_.srcHtml+"inventario.php", 
      success: function(res){
        $("#pdv-content").empty().html(res);

        //evento agregar producto
        $('#inv-add').on('click', function(){
          this_.addProductoFrm();
        });
      }
    });
  },
  addProductoFrm: function(){
    var frm = '<form>'+
      '<div class="form-group">'+
        '<label for="nombreProducto">Nombre</label>'+
        '<input type="text" class="form-control" id="nombreProducto" placeholder="Nombre producto">'+
      '</div>'+
      '<div class="form-group">'+
        '<label for="descripcionProducto">Descripción</label>'+
        '<textarea class="form-control" id="descripcionProducto" rows="3"></textarea>'+
      '</div>'+
      '<div class="form-group">'+
        '<label for="existencias">N. existencias</label>'+
        '<input type="number" class="form-control" id="existencias" min="0" placeholder="0">'+
      '</div>'+
      '<div class="form-group">'+
        '<label for="precio">Precio</label>'+
        '<input type="number" class="form-control" id="precio" min="0" placeholder="0">'+
      '</div>'+
      '<div class="form-group">'+
        '<label for="precio">Categoría</label>'+
        '<select class="form-control">'+
          '<option value="papeleria">Papelería</option>'+
          '<option value="dulceria">Dulces</option>'+
          '<option value="servicios">Servicios</option>'+
        '</select>'+
      '</div>'+
      '<div class="checkbox">'+
        '<label>'+
          '<input type="checkbox"> Activo'+
        '</label>'+
      '</div>'+
    '</form>';
    $('#inv-modal #inv-modal-cont').empty().html(frm);
    $('#inv-modal').modal('toggle');
  },
  cortes: function(){
    console.log('[ cortes ]');
  },
  pagos: function(){
    console.log('[ pagos ]');
  },
  usuarios: function(){
    console.log('[ usuarios ]');
  },
  perfil: function(){
    console.log('[ perfil ]');
  },
  logout: function(){
    console.log('[ logout ]');
  },
};