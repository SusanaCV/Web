var INVOICES= INVOICES || {

	Usuario: function (invoice,cliente, descripcion,fecha,monto) {
        this.invoice = invoice;
        this.cliente = cliente;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.monto = monto;

	  //Se guarda el arreglo en LocalStorage.
	  this.save = function(invoices) {
	  	localStorage.setItem("invoices",JSON.stringify(invoices)); 
	  	alert("Datos Guardados en LocalStorage");
	  };
	},

	saveClient: function() {
		//Valida si ya se creo el arreglo, si no, se crea para ingresar los datos.
		if (localStorage.getItem("invoices") == null){
			var invoices = new Array();
			localStorage.setItem("invoices",JSON.stringify(invoices));
		}
        //Variables que obtienen los valores ingresados por el usuario.
        var invoice = document.getElementById('invoice').value;
        var cliente = document.getElementById('cliente').value;
        var descripcion = document.getElementById('descripcion').value;
        var fecha = document.getElementById('fecha').value;
        var monto = document.getElementById('monto').value;
        //se crea un usuario y se le asignan los valores
        var usuario = new Usuario(invoice,cliente, descripcion,fecha,monto);
        //Se crea una variable invoices donde se optienen el arreglo de invoices.
        var invoices=JSON.parse(localStorage.getItem("invoices"));
        //Se agrega el usuario al arreglo invoices.
        invoices.push(usuario);
        //Se envia el arreglo invoices con los datos.
        usuario.save(invoices);
	},
};