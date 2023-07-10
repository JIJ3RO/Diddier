
        //CALENDARIO DE CITA
        $(function(){
            $('#fecha').datepicker({
                dateFormat: 'dd/mm/yy',
                firstDay: 0
            });
        });
        // BOTON DE CONFIRMAR CITA
        $(function() {
            $('#confirmar-btn').on('click', function() {
                var horaSeleccionada = $('#hora-cita').val();
                var fechaSeleccionada = $('#fecha').val();

                // Muestra el aviso de "Cita agendada"
                $('#aviso-cita').text('Cita agendada').show();
                setTimeout(function() {
                    $('#aviso-cita').hide();
                }, 2000);
            });
        });
        