var Usuarios={
  srcHtml: './src/html/',
  usersJson: {},
  init: function(){
    this.loadUsers();
    this.usersToJson(this.users);
    this.addUserEvent();
    this.updateUserEvent();
    this.deleteUser();
  },
  loadUsers: function(){
    // listando usuarios
    var tbody = '';
    for(var usr in this.users){
      var u = this.users[usr];
      tbody+='<tr class="'+(u.activo||'warning')+'">'+
        '<td>'+u.nombreUsuario+' '+u.apPaterno+' '+u.apMaterno+'</td>'+
        '<td>'+u.nick+'</td>'+
        '<td>'+u.correo+'</td>'+
        '<td>'+u.datecreate+'</td>'+
        '<td><span class="label label-default">'+u.nombrePerfil+'</span></td>'+
        '<td class="text-center"><button type="button" class="btn btn-warning usr-update" data-idUp="'+u.idUsuario+'"> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td>'+
        '<td class="text-center"><button type="button" class="btn btn-danger usr-del" data-idDel="'+u.idUsuario+'"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>'+
      '</tr>';
    }
    $('#usr-listado tbody').empty().append(tbody);
  },
  addUserEvent: function(){
    var this_=this;
    $('#usr-add').on('click', function(){
      this_.addUserModal();
      this_.validForm();
      $('#inv-modal').modal('toggle');
    });
  },
  updateUserEvent: function(){
    var this_=this;
    $('#usr-listado').on('click', '.usr-update', function(){
      var idUsr = $(this).attr('data-idUp');
      var user = this_.usersJson[idUsr] || {};
      this_.addUserModal(user);
      this_.validForm();
      $('#inv-modal').modal('toggle');
    });
  },
  deleteUser: function(){
    $('#usr-listado').on('click', '.usr-del', function(){
      var this_=this;
      Cyber.loadNotif({
        title: "¡Cuidado!",
        msg: "¿Estas seguro de eliminar este usuario?",
        type:'warning',
        buttons: ['Cancelar', 'Aceptar'],
      }, function(){
        var idUsr = $(this_).attr('data-idDel');
        Cyber.loadNotif({
          title: "¡Excelente!",
          msg: "El usuario ha sido eliminado del sistema.",
          button: "Aceptar",
        }, function(){
            location.reload(true);
        });
      });
    });
  },
  /**
   * Construye una ventana modal
   * @param {[type]} usr [description]
   */
  addUserModal: function(usr){
    usr = usr || {};
    var this_=this;
    // ventana modal de agregar/modificar usuario
    var frm = '<form id="formUser"></form>';
    $('#inv-modal #inv-modal-cont').empty().html(frm);
    uForm.addInput([{
      ty: 'text',
      id: 'nick',
      placeholder: 'nick',
      label: 'Nick',
      value: usr.nick || '',
      error: true,
    },{
      ty: 'text',
      id: 'nombreUsuario',
      placeholder: 'nombre',
      label: 'Nombre(s)',
      value: usr.nombreUsuario || '',
      error: true,
    },{
      ty: 'text',
      id: 'apPaterno',
      placeholder: 'apellido paterno',
      label: 'Apellido Paterno',
      value: usr.apPaterno || '',
      error: true,
    },{
      ty: 'text',
      id: 'apMaterno',
      placeholder: 'apellido materno',
      label: 'Apellido Materno',
      value: usr.apMaterno || '',
      error: true,
    },{
      ty: 'email',
      id: 'correo',
      placeholder: 'correo@email.com',
      label: 'Correo electrónico',
      value: usr.correo || '',
      error: true,
    },{
      ty: 'number',
      id: 'telefono',
      placeholder: '00000000',
      label: 'Teléfono',
      value: usr.telefono || '',
      step: 1,
      min: 0,
      max:9999999999999,
      error: true,
    },{
      ty: 'password',
      id: 'contrasena',
      placeholder: 'contraseña',
      label: 'Contraseña',
      value: usr.contrasena || '',
      error: true,
    },{
      ty: 'select',
      id: 'perfil',
      label: 'Perfil',
      options: [
        {'val':'', 'str':'Elige un perfil'},
        {'val':1, 'str':'Admin'},
        {'val':2, 'str':'Usuario'}, 
        {'val':3, 'str':'Invitado'}
      ],
      sel: usr.perfil || 0,
      error: true,
    },{
      ty: 'checkbox',
      id: 'activo',
      label: 'Inactivo',
      value: usr.activo,
      class: '_',
    },{
      ty: 'other',
      html: '<hr />',
    },{
      ty: 'button',
      id: 'btn-aceptar-modal',
      label: 'Aceptar',
      class: 'btn btn-primary',
    }], '#formUser');
  },
  validForm: function(){
    // validar formulario
    var this_=this;
    var rules={
      'nick': {'req':true, 'min':3, 'max':50},
      'nombreUsuario': {'req':true, 'min':3, 'max':50},
      'apPaterno': {'req':true, 'min':3, 'max':50},
      'apMaterno': {'req':true, 'min':3, 'max':50},
      'correo': {'req':true, 'min':5, 'max':100, 'email':true},
      //'telefono': {'type': 'numeric'},
      'contrasena': {'req':true, 'min':3, 'max':50},
      'perfil': {'req':true},
    };
    uForm.validForm('#formUser', '#btn-aceptar-modal', rules, function(res, e){
      if(res){
        this_.addUser();
        Cyber.loadNotif({
          title: "¡Excelente!",
          msg: "Un nuevo usuario a sido registrado a la plataforma.",
          button: "Aceptar",
        }, function(){
            location.reload(true);
        });
      }else{
        Cyber.loadToastr({
          type: 'warning',
          title: 'ATENCIÓN',
          msg: 'Uno o varios campos son incorrectos. Favor de rectificarlos.',
          closeButton: true
        });
      }
    });
  },
  addUser: function(){
    
    console.log('Agregando uisuario');
  },
  /**
   * Pasa el arreglo de usuarios a formato json
   * @param  {[Array]} users [arreglo de usuarios]
   * @return {[type]}       [description]
   */
  usersToJson: function(users){
    var usrJ = this.usersJson;
    for(var usr in users)
      usrJ[users[usr].idUsuario] = users[usr];
  },
  users: [
    {
      idUsuario: 1,
      nick: 'max',
      correo: 'marcogarcias.2012@gmail.com',
      nombreUsuario: 'Marco Antonio',
      apPaterno: 'García',
      apMaterno: 'Sánchez',
      telefono: 1111111111,
      activo: 1,
      perfil: 1,
      nombrePerfil: 'admin',
      datecreate: '2017-10-01',
      dateUpdate: '2017-10-01'
    },
    {
      idUsuario: 2,
      nick: 'Goku',
      correo: 'songoku@dbz.com',
      nombreUsuario: 'Son Goku',
      apPaterno: 'Hernandez',
      apMaterno: 'Pietro',
      telefono: 1111111111,
      activo: 0,
      perfil: 2,
      nombrePerfil: 'usuario',
      datecreate: '2017-10-01',
      dateUpdate: '2017-10-01'
    },
    {
      idUsuario: 3,
      nick: 'Fede',
      correo: 'fede@email.com',
      nombreUsuario: 'Federico',
      apPaterno: 'Godinez',
      apMaterno: 'Godin',
      telefono: 5566998866,
      activo: 1,
      perfil: 2,
      nombrePerfil: 'usuario',
      datecreate: '2017-10-01',
      dateUpdate: '2017-10-01'
    }
  ]
};