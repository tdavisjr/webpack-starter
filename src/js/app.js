import $ from 'jquery'

$(function(){
    var el = $("<div />").html("<h1>Hello Webpack</h1>")

    $('body').append(el.html())   
})
