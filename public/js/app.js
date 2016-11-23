var socket = io();
socket.on('connect',function(){
    console.log('connected to socket.io server!')
});

socket.on('message',function(data){
    //window.alert(data.text);
    $('.messages').append('<p>' + data.text + '</p>');
});

//Handles submitting of new message
var $form = $('#message-form');

$form.on('submit',function(event){
    var $message = $form.find('input[name=message]');
    event.preventDefault(); //allows you to handle the submit event on our own
    socket.emit('message',{
        text: $message.val()
    });

    $message.val('');

});