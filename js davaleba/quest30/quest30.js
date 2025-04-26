const body = document.body;
if(body.classList.contains('night')){
    body.classList.remove('night');
    console.log("mode: day");
}else{
    body.classList.add('night');
    console.log("mode: night");
}