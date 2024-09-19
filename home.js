
document.getElementById('btnAddMoney')
.addEventListener('click',function(event){
  event.preventDefault();
// gat the input amount whice need to add
  const addMoneyInput=document.getElementById('input-add-money').value;
  console.log('adding money =' +  addMoneyInput);
//   get the pin number
const pinNumber=document.getElementById('input-pin-number').value;
console.log('pin-number='+ pinNumber);
// checking the pin number
if(pinNumber==='1234'){
    console.log('adding the amount');
    // get the current Balance
    const balance=document.getElementById('account-balance').innerText;
    console.log('curent Balance is='+  balance);
    // Add Money input value in current  Balance
    // convert string to number
    const addMoneyNumber=parseFloat(addMoneyInput);
    console.log(typeof addMoneyNumber);
    const balanceNumber=parseFloat(balance);
    console.log(typeof balanceNumber);
    const newBalance=addMoneyNumber + balanceNumber;
    console.log(newBalance);

    document.getElementById('account-balance').innerText=newBalance;

    

}else{
    alert('Wrong pasword');
}

})