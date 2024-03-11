let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

//Showing input slider value
sliderValue.textContent  = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})

//Function to generate password

function generatePassword(){
    let genPassword = "";

    genPassword = Math.random();
    return genPassword;
}

