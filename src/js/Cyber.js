var Cyber={
  srcHtml: './src/html/',
  init: function(){
    this.initNavBar();
  },

  onLogin: function(){
    $('#pdv-login').fadeIn(1000);
    // validar formulario
    var rules={
      'nick': {'req':true, 'min':3, 'max':50},
      'password': {'req':true, 'min':3, 'max':50}
    };
    uForm.validForm('#form_login', '#btn-login', rules, function(res){
      res && $('#form_login').submit();
    });
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
    var this_=this;
    $.ajax({
      url: this_.srcHtml+"usuarios.php", 
      success: function(res){
        $("#pdv-content").empty().html(res);
      }
    });
  },
  perfil: function(){
    console.log('[ perfil ]');
  },
  logout: function(){
    console.log('[ logout ]');
  },
  /**
   * Carga de forma dinámica por medio de ajax un script
   * @param  {[type]} src      [dirección del script]
   * @param  {[type]} callback [acción que se ejecutará al cargarse el script]
   * @return {[type]}          [description]
   */
  loadScript: function(src, callback){
    $.getScript(src)
      .done(function(script, status) {
        (typeof callback !== 'undefined' && jQuery.isFunction(callback)) &&
          callback(script, status);
      })
      .fail(function(jqxhr, settings, exception) {
        (typeof callback !== 'undefined' && jQuery.isFunction(callback)) &&
          (console.log('Auch!! error al cargar el script '+src+'.', jqxhr, settings, exception));
    });
  },
  /**
   * Manejo de notificaciones
   * https://github.com/CodeSeven/toastr
   * @param  {[type]} cfg   [description]
   * @return {[type]}       [description]
   */
  loadToastr: function(cfg){
    cfg = cfg || {};
    var title = cfg.title || false,
        msg = cfg.msg || '',
        ty = cfg.type || 'success',
        closeButton = cfg.closeButton || false,
        progressBar = cfg.progressBar || false,
        positionClass = cfg.positionClass || 'toast-top-center',
        preventDuplicates = cfg.preventDuplicates || false,
        onclick = cfg.onclick || null,
        showDuration = cfg.showDuration || '300',
        hideDuration = cfg.hideDuration || '1000',
        timeOut = cfg.timeOut || '5000',
        extendedTimeOut = cfg.extendedTimeOut || '1000',
        showEasing = cfg.showEasing || 'swing',
        hideEasing = cfg.hideEasing || 'linear',
        showMethod = cfg.showMethod || 'fadeIn',
        hideMethod = cfg.hideMethod || 'fadeOut';

    toastr.options = {
      "closeButton": closeButton,
      "debug": false,
      "newestOnTop": true,
      "progressBar": progressBar,
      "positionClass": positionClass,
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": showDuration,
      "hideDuration": hideDuration,
      "timeOut": timeOut,
      "extendedTimeOut": extendedTimeOut,
      "showEasing": showEasing,
      "hideEasing": hideEasing,
      "showMethod": showMethod,
      "hideMethod": hideMethod
    }
    // lanzando notificación
    title ? toastr[ty](msg, title):toastr[ty](msg);
  },
  loadNotif: function(cfg, callback){
    cfg=cfg||{};
    var cfg_={
      title: cfg.title||null,
      text: cfg.msg||null,
      icon: cfg.type||"success"
    };
    cfg.button && (cfg_.button=cfg.button);
    cfg.buttons && (cfg_.buttons=cfg.buttons);

    swal(cfg_).then((value) => {
      if(value){
        (typeof callback !== 'undefined' && jQuery.isFunction(callback)) &&
          callback(value);
      }
    });;
  },
};