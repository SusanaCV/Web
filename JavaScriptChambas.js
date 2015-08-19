var CHAMBAS= CHAMBAS || {

Usuario: function (cliente, descripcion,fecha,notas) {
		this.cliente = cliente;
		this.descripcion = descripcion;
		this.fecha = fecha;
		this.notas = notas;

	  //Se guarda el arreglo en LocalStorage.
	  this.save = function(chambas) {
	  	localStorage.setItem("chambas",JSON.stringify(chambas)); 
	  	alert("Datos Guardados en LocalStorage");
	  };
	},

	saveChambas: function() {
		//Valida si ya se creo el arreglo, si no, se crea para ingresar los datos.
		if (localStorage.getItem("chambas") == null){
			var chambas = new Array();
			localStorage.setItem("chambas",JSON.stringify(chambas));
		}
		//Variables que obtienen los valores ingresados por el usuario.
		var cliente = document.getElementById('cliente').value;
		var descripcion = document.getElementById('descripcion').value;
		var fecha = document.getElementById('fecha').value;
		var notas = document.getElementById('notas').value;
		//se crea un usuario y se le asignan los valores
		var usuario = new CHAMBAS.Usuario(cliente, descripcion,fecha,notas);
		//Se crea una variable cliente donde se optienen el arreglo de chambas.
		var chambas=JSON.parse(localStorage.getItem("chambas"));
		//Se agrega el usuario al arreglo chambas.
		chambas.push(usuario);
		//Se envia el arreglo chambas con los datos.
		usuario.save(chambas);
	},
};