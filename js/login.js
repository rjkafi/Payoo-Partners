document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    
    if(phoneNumber ==='1234' && pinNumber==='555'){
        console.log('now you can visit ');
        window.location.href='/home.html';
    }else{
        alert('Wrong Pin or Phone number')
    }
    
})