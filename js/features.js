document.getElementById('btn-show-cashout').addEventListener('click',function(){
    // activate the cashout form
    document.getElementById('cash-out-form').classList.remove('hidden');

   // Hidden the add money form when click to cash out
    document.getElementById('add-money-form').classList.add('hidden')


})

// show the add money form and hide the cash out form
document.getElementById('btn-show-addMoney').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})
