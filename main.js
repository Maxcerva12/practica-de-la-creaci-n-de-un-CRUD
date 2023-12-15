$(document).ready(function(){
    tablaPersonas = $("#tablaPersonas").DataTable({
        "columnDefs":[{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"
        }],
        // Language settings for DataTable
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });

    $("#btnNuevo").click(function(){
        $("#formPersonas").trigger("reset");
        $(".modal-header").css("background-color", "#28a745");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("New Person");
        $("#modalCRUD").modal("show");
        ID = null;
        opcion = 1; // Add
    });

    var fila; // Capture the row to edit or delete

    // EDIT button
    $(document).on("click", ".btnEditar", function(){
        fila = $(this).closest("tr");
        ID = parseInt(fila.find('td:eq(0)').text());
        nombre = fila.find('td:eq(1)').text();
        Apellido = fila.find('td:eq(2)').text();
        email = fila.find('td:eq(3)').text();
        telefono = fila.find('td:eq(4)').text();

        $("#nombre").val(nombre);
        $("#Apellido").val(Apellido);
        $("#email").val(email);
        $("#telefono").val(telefono);
        opcion = 2; // Edit

        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Edit Person");
        $("#modalCRUD").modal("show");

    });

    // DELETE button
    $(document).on("click", ".btnBorrar", function(){
        fila = $(this).closest("tr");
        ID = parseInt(fila.find('td:eq(0)').text());
        opcion = 3; // Delete
        var respuesta = confirm("Are you sure you want to delete the record: " + ID + "?");
        if(respuesta){
            tablaPersonas.row(fila).remove().draw(false); // Remove the row from the DataTable without redrawing
            $.ajax({
                url: "bd/crud.php",
                type: "POST",
                dataType: "json",
                data: {opcion: opcion, ID: ID},
                success: function(){
                    // Optionally, you can handle any server-side deletion logic here if needed
                }
            });
        }
    });


    $("#formPersonas").submit(function(e){
        e.preventDefault();
        nombre = $.trim($("#nombre").val());
        Apellido = $.trim($("#Apellido").val());
        email = $.trim($("#email").val());
        telefono = $.trim($("#telefono").val());
        $.ajax({
            url: "bd/crud.php",
            type: "POST",
            dataType: "json",
            data: {nombre: nombre, Apellido: Apellido, email: email, telefono: telefono, ID: ID, opcion: opcion},
            success: function(data){
                console.log(data);
                ID = data[0].ID;
                nombre = data[0].nombre;
                Apellido = data[0].Apellido;
                email = data[0].email;
                telefono = data[0].telefono;
                if(opcion == 1){
                    tablaPersonas.row.add([ID, nombre, Apellido, email, telefono]).draw();
                } else {
                    tablaPersonas.row(fila).data([ID, nombre, Apellido, email, telefono]).draw();
                }
            }
        });
        $("#modalCRUD").modal("hide");
    });
});
