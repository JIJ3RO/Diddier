
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
        function toggleClinicInfo(event) {
            event.preventDefault(); // Evita que se recargue la página al hacer clic en el enlace
            var clinicInfo = document.getElementById("clinic-info");
            clinicInfo.style.display = (clinicInfo.style.display === "none") ? "block" : "none";
        }
        
