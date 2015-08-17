var CLIENT= CLIENT || {

	

		Usuario: function (nombre, cedula,telefono) {
	  this.nombre = nombre;
	  this.cedula = cedula;
	  this.telefono = telefono;

	  //Se guarda el arreglo en LocalStorage.
	  this.save = function(clientes) {
	  localStorage.setItem("clientes",JSON.stringify(clientes)); 
      alert("Datos Guardados en LocalStorage");
	  };
	},

	leerDatos: function (){
	document.forms[0].nombre.value=localStorage.getItem("nombre");
   document.forms[0].cedula.value=localStorage.getItem("cedula");
   document.forms[0].telefono.value=localStorage.getItem("telefono");
	},

	saveClient: function() {
		//Valida si ya se creo el arreglo, si no, se crea para ingresar los datos.
		if (localStorage.getItem("clientes") == null){
			var clientes = new Array();
			localStorage.setItem("clientes",JSON.stringify(clientes));
		}
		//Variables que obtienen los valores ingresados por el usuario.
		var nombre = document.getElementById('nombre').value;
		var cedula = document.getElementById('cedula').value;
		var telefono = document.getElementById('telefono').value;
		//se crea un usuario y se le asignan los valores
		var usuario = new CLIENT.Usuario(nombre, cedula,telefono);
		//Se crea una variable cliente donde se optienen el arreglo de clientes.
		var clientes=JSON.parse(localStorage.getItem("clientes"));
		//Se agrega el usuario al arreglo clientes.
		clientes.push(usuario);
		//Se envia el arreglo clientes con los datos.
		usuario.save(clientes);
	},


};
