// card-1
document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputFieldValueById('donation-amount');
    const donateMoney = getTextFieldValueById ('at-noakhali');

    if(donationAmount >= 0 && !isNaN(donationAmount)){
        const balance = getTextFieldValueById('main-balance');
        const mainBalance = balance - donationAmount;
        const newBalance = donateMoney + donationAmount;
        document.getElementById('main-balance').innerText = mainBalance;
        document.getElementById('at-noakhali').innerText = newBalance;
        document.getElementById('my_modal_4').showModal();
        
    }
    else{
        alert('Invalid donation amount');
    }
});

// card-2
document.getElementById('btn-donate2').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputFieldValueById('donation-amount2');
    const donateMoney = getTextFieldValueById ('at-feni');

    if(donationAmount >= 0 && !isNaN(donationAmount)){
        const balance = getTextFieldValueById('main-balance');
        const mainBalance = balance - donationAmount;
        const newBalance = donateMoney + donationAmount;
        document.getElementById('main-balance').innerText = mainBalance;
        document.getElementById('at-feni').innerText = newBalance;
        document.getElementById('my_modal_4').showModal();
        
    }
    else{
        alert('Invalid donation amount');
    }
});

//card-3
document.getElementById('btn-donate3').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputFieldValueById('donation-amount3');
    const donateMoney = getTextFieldValueById ('at-quota-movement');

    if(donationAmount >= 0 && !isNaN(donationAmount)){
        const balance = getTextFieldValueById('main-balance');
        const mainBalance = balance - donationAmount;
        const newBalance = donateMoney + donationAmount;
        document.getElementById('main-balance').innerText = mainBalance;
        document.getElementById('at-quota-movement').innerText = newBalance;
        document.getElementById('my_modal_4').showModal();
        
    }
    else{
        alert('Invalid donation amount');
    }
});

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href='./blog.html'
});




function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
   return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber =parseFloat(textValue);
    return textNumber;
}

