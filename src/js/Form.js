uForm={
  /**
   * Crea un objeto de bloque input y se añade a un contenedor si es que
   * se especifica, si no se especifica, simplemente retorna el objeto creado.
   * El bloque consiste de un div con la clase de bootstrap "form-group", 
   * una etiqueta label, un tipo input y un hel-block.
   * Ejemplo:
   * var input = {
      'ty':'file',
      'class_':null,
      'id':'img-frm-'+no,
      'label':'Imagen',
      'help':null
    };
    uForm.addInput(input, '#new-image');
   * @param {Object} input Json con las opciones para crear el bloque del input
   * @param {String} to    contenedor a añadir el bloque input
   */
  addInput: function(input, to){
    input || (input={});
    if(input instanceof Array){
      for(x in input){
        this.addInput(input[x], to);
      }
    }
    else{
      var ty = input.ty || 'text';
      var class_ = input.class || 'form-control';
      var id = input.id || null;
      var placeholder = input.placeholder || null;
      var label = input.label || null;
      var value = input.value || '';
      var help = input.help || false;
      var err = input.error || false;
      var html = input.html || '';
      var inputFrm = '';
      switch(ty){
        case 'text':
        case 'email':
        case 'number':
          var other = '';
          if(ty=='number'){
            (input.step!==undefined) && (other+=' step="'+input.step+'" ');
            (input.min!==undefined) && (other+=' min="'+input.min+'" ');
            (input.max!==undefined) && (other+=' max="'+input.max+'" ');
          }
          inputFrm = ''+
          '<div class="form-group">'+
            '<label for="'+id+'">'+label+'</label>'+
            '<input type="'+ty+'" class="'+class_+'" id="'+id+'" value="'+value+'" '+(placeholder ? 'placeholder="'+placeholder+'"' : '')+other+' />'+
            (help||err ? '<p id="error_'+id+'" class="help-block">'+(help?help:'')+'</p>' : '')+
          '</div>';
          break;
        case 'checkbox':
          inputFrm = ''+
          '<div class="checkbox">'+
            '<label>'+
              '<input type="checkbox" class="'+class_+'" id="'+id+'" '+(value?'checked':'')+'> '+label
            '</label>'+
            (help||err ? '<p id="error_'+id+'" class="help-block">'+(help?help:'')+'</p>' : '')+
          '</div>';
console.log('kokokkokoko', value);
          break;
        case 'select':
          var options='';
          for(op in input.options){
            var op=input.options[op]
            options+='<option value="'+op.val+'" '+(input.sel==op.val?'selected':'')+'>'+op.str+'</option>';
          }
          inputFrm = ''+
          '<div class="form-group">'+
            '<label for="'+id+'">'+label+'</label>'+
            '<select class="form-control '+class_+'" id="'+id+'">'+
              options+
            '</select>'+
            (help||err ? '<p id="error_'+id+'" class="help-block">'+(help?help:'')+'</p>' : '')+
          '</div>';
          break;
        case 'button':
        case 'submit':
          inputFrm = ''+
            '<div class="form-group">'+
              '<div class="">'+
                '<button type="'+ty+'" id="'+id+'" class="'+class_+'">'+label+'</button>'+
              '</div>'+
            '</div>';
          break;
        case 'other':
          inputFrm+=html;
          break;
      }
      to && $(to).append(inputFrm);
      return inputFrm;
    }
  },
  /**
   * Verifica que el archivo del inputfile esté dentro del array ext
   * @param  {String} id  id o clase del input file a verificar
   * @param  {Array} exts array que contiene las extensiones permitidas
   * @return {[type]}     [description]
   */
  checkFile: function(id, exts){
    if(id){
      var frm = $(id).val();
      var ext = frm.split('.').pop()
      if(exts instanceof Array)
        return exts.indexOf(ext)>-1;
      else
        return ext==exts;
    }else return false;
  },
  validForm: function(selectorFrm, selectorSub, rules, callback){
    $(selectorSub).on('click', function(e){
      e.preventDefault();
console.log(selectorFrm, selectorSub, rules);
      uForm.valid($(selectorFrm), rules, function(res){
        if(res.length){
          e.preventDefault();
          var idErr = res[0].split('|');
          var topErr = $('#'+idErr[0]).position().top;
          $('body,html').animate({scrollTop : topErr}, 500);
          (typeof callback !== 'undefined' && jQuery.isFunction(callback)) &&
            callback(false, res);
        }
        else
          (typeof callback !== 'undefined' && jQuery.isFunction(callback)) &&
            callback(true, res);
      });
    });
  },
  valid: function(id, rules, callback){
    var errors = [];
    $(id).find(':input').each(function() {
      var input = this.id;
      if(rules[input]){
        for (var rule in rules[input]) {
          var valid = uForm[rule]('#'+input, rules[input][rule]);
          if(!valid.res){
            $('#'+input).parent('div.form-group').addClass('has-error');
            $('#error_'+input).text(valid.txt);
            errors.push(input+'|'+valid.txt);
            break;
          }else{
            $('#'+input).parent('div.form-group').removeClass('has-error');
            $('#error_'+input).text('');
          }
        }
      }
    });
    callback && callback(errors);
  },
  // funciones para validación [req, min, max]
  req: function(id, val){
    return {'res':$(id).val() ? true : false, 'txt':'Campo requerido'};
  },
  min: function(id, val){
    return {'res':$(id).val().length >= val, 'txt':'Mínimo '+val+' carácteres.'};
  },
  max: function(id, val){
    return {'res':$(id).val().length <= val, 'txt':'Máximo '+val+' carácteres.'};
  },
  email: function(id, val){
    return {'res':/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(id).val()), 'txt':'Correo no válido.'};
  }
}