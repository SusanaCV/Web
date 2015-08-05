var CHAMBAS= CHAMBAS || {

		Usuario: function (nombre, cedula,telefono) {
	  this.nombre = nombre;
	  this.cedula = cedula;
	  this.telefono = telefono;

	  this.save = function() {
	  	//insert into 
	  localStorage.setItem("nombre",this.nombre); 
      localStorage.setItem("cedula",this.cedula); 
      localStorage.setItem("telefono",this.telefono); 
      alert("Datos Guardados en LocalStorage");
	  	// save to localstorage
	  };
	},

	leerDatos: function (){
	document.forms[0].nombre.value=localStorage.getItem("nombre");
   document.forms[0].cedula.value=localStorage.getItem("cedula");
   document.forms[0].telefono.value=localStorage.getItem("telefono");
	alert("Nombre: "+localStorage.getItem("nombre")+"\n"+"Apellido: "+localStorage.getItem("cedula")+"\n"+"Telefono: "+localStorage.getItem("telefono"));
	},

	saveClient: function() {
		/*var contents = $('#contents');*/
		var nombre = document.getElementById('nombre').value;
		var cedula = document.getElementById('cedula').value;
		var telefono = document.getElementById('telefono').value;


		var usuario = new TAREA.Usuario(nombre, cedula,telefono);
		usuario.save();
	},


};