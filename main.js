const areaText = document.getElementById('textarea');
const totalChars = document.querySelector('.total');
const remainChars = document.querySelector('.remain');

areaText.addEventListener('keyup', function(){
    totalChars.textContent = areaText.value.length;
    remainChars.textContent = areaText.getAttribute('maxlength') - areaText.value.length;
})