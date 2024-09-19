document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();
    const inputCashoutMoney=document.getElementById('input-cashout-money').value;
    const cashoutNumber=parseFloat(inputCashoutMoney);
    const pinNumber=document.getElementById('cashout-pin-number').value;

    if(pinNumber==='1234'){
        // console.log('cashout proccesing');

        const balance=document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);

        // New Balance
        const newBalance=balanceNumber - cashoutNumber;

        // update the main Balance
        document.getElementById('account-balance').innerText=newBalance;
        
    }else{
        alert('Please type the right pin number');
    }
})