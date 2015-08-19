var INVOICES= INVOICES || {

	Usuario: function (cliente, descripcion,fecha,monto) {
		this.cliente = cliente;
		this.descripcion = descripcion;
		this.fecha = fecha;
		this.monto = monto;

	  //Se guarda el arreglo en LocalStorage.
	  this.save = function(clientes) {
	  	localStorage.setItem("clientes",JSON.stringify(clientes)); 
	  	alert("Datos Guardados en LocalStorage");
	  };
	},

	leerDatos: function (){
		document.forms[0].nombre.value=localStorage.getItem("nombre");
		document.forms[0].descripcion.value=localStorage.getItem("descripcion");
		document.forms[0].fecha.value=localStorage.getItem("fecha");
		document.forms[0].monto.value=localStorage.getItem("monto");
	},

	saveClient: function() {
		//Valida si ya se creo el arreglo, si no, se crea para ingresar los datos.
		if (localStorage.getItem("clientes") == null){
			var clientes = new Array();
			localStorage.setItem("clientes",JSON.stringify(clientes));
		}
		//Variables que obtienen los valores ingresados por el usuario.
		var cliente = document.getElementById('cliente').value;
		var fecha = document.getElementById('fecha').value;
		var descripcion = document.getElementById('descripcion').value;
		var monto = document.getElementById('monto').value;
		//se crea un usuario y se le asignan los valores
		var usuario = new INVOICES.Usuario(nombre, cedula,telefono);
		//Se crea una variable cliente donde se optienen el arreglo de clientes.
		var clientes=JSON.parse(localStorage.getItem("clientes"));
		//Se agrega el usuario al arreglo clientes.
		clientes.push(usuario);
		//Se envia el arreglo clientes con los datos.
		usuario.save(clientes);
	},

};