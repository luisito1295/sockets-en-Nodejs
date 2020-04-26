const socket = io();

//Escuchar 
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos la conexion');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola'
}, function(res){
    console.log('Respuesta server:',res);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});