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
	cargarDatos: function(){
		var select = document.getElementById("lista");
		var clientes=JSON.parse(localStorage.getItem("clientes"));
		for(var index = 0; index < clientes.length; index++) {
			select.options[select.options.length] = new Option(clientes[index].nombre);
		}
		editClient: function() {

			var nombre = document.getElementById('nombre').value;
			var cedula = document.getElementById('cedula').value;
			var telefono = document.getElementById('telefono').value;
			{
				var clientes=JSON.parse(localStorage.getItem("clientes"));
				for (var i = 0; i <= clientes.length; i++) {
					if(clientes[i].nombre==this.nombre)
					{
						clientes[i].nombre=this.nombre;
						clientes[i].cedula=this.cedula;
						clientes[i].telefono=this.telefono;
					};
				};

			}
		},

		ListarClient: function() {
			var table = document.getElementById("myTable");
			{
				var clientes=JSON.parse(localStorage.getItem("clientes"));
				for (var i = 0; i <= clientes.length; i++) {
					var row = table.insertRow(0);
					var CEDULA = row.insertCell(0);
					var NOMBRE = row.insertCell(1);
					var TELEFONO = row.insertCell(2);
					CEDULA.innerHTML = clientes[i].cedula;
					NOMBRE.innerHTML = clientes[i].nombre;
					TELEFONO.innerHTML = clientes[i].telefono;
				};

			}
		},
	};
