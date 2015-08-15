var CLIENT= CLIENT || {

		Usuario: function (nombre, cedula,telefono) {
	  this.nombre = nombre;
	  this.cedula = cedula;
	  this.telefono = telefono;

	  this.save = function() {
	  localStorage.setItem("nombre",this.nombre); 
      localStorage.setItem("cedula",this.cedula); 
      localStorage.setItem("telefono",this.telefono); 
      alert("Datos Guardados en LocalStorage");
	  };
	},

	leerDatos: function (){
	document.forms[0].nombre.value=localStorage.getItem("nombre");
   document.forms[0].cedula.value=localStorage.getItem("cedula");
   document.forms[0].telefono.value=localStorage.getItem("telefono");
	},

	saveClient: function() {
		var nombre = document.getElementById('nombre').value;
		var cedula = document.getElementById('cedula').value;
		var telefono = document.getElementById('telefono').value;
		var clientes = [];
		var cliente = ['carmen','23','888'];

		var usuario = new CLIENT.Usuario(nombre, cedula,telefono);
		usuario.save();
	},


};
