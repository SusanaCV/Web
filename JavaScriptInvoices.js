var INVOICES= INVOICES || {

		Usuario: function (cliente, descripcion,fecha,monto) {
	  this.cliente = cliente;
	  this.descripcion = descripcion;
	  this.fecha = fecha;
	  this.monto = monto;

	  this.save = function() {
	  	//insert into 
	  localStorage.setItem("cliente",this.cliente); 
      localStorage.setItem("descripcion",this.descripcion);  
      localStorage.setItem("fecha",this.fecha);
      localStorage.setItem("monto",this.monto); 
      alert("Datos Guardados en LocalStorage");
	  	// save to localstorage
	  };
	},

	leerDatos: function (){
	document.forms[0].nombre.value=localStorage.getItem("nombre");
   document.forms[0].descripcion.value=localStorage.getItem("descripcion");
   document.forms[0].fecha.value=localStorage.getItem("fecha");
   document.forms[0].monto.value=localStorage.getItem("monto");
	alert("Cliente: "+localStorage.getItem("cliente")+"\n"+"Descripcion: "+localStorage.getItem("descripcion")+"fecha: "+localStorage.getItem("fecha")+"\n"+"monto: "+localStorage.getItem("monto"));
	},

	saveClient: function() {
		/*var contents = $('#contents');*/
		var cliente = document.getElementById('cliente').value;
		var fecha = document.getElementById('fecha').value;
		var descripcion = document.getElementById('descripcion').value;
		var monto = document.getElementById('monto').value;


		var usuario = new TAREA.Usuario(cliente, descripcion,fecha,monto);
		usuario.save();
	},


};