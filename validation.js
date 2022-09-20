//Validation
const input1=document.getElementById('input_1');//PAN Number
const input2=document.getElementById('input_2');//Phone Number
const input3=document.getElementById('input_3');//Email Id

// input1.addEventListener('input',()=>{
//     let len = input1.value.length;
//     let a = input1.value;
//     let pattern = '/[A-Z]{5}[0-9]{4}[A-Z]{1}$/';

//     if(len>10){
//         window.alert("PAN card is only 10 characters long!");
//     }
//     else if( len<10 && !pattern.match(a)){
//         document.getElementById('w1').classList.remove('hide');
//     }
//     else if(len==10 && pattern.match(a)){
//         document.getElementById('w1').classList.add('hide');
//     }
// });
function validate(){
    let len = input1.value.length;
    let a = input1.value;
    const pattern =/[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    let b = input2.value;
    const phone =/[1-9]{1}[0-9]{9}/;

    let c =input3.value;
    const email =/\w+[0-9]+@\w+[.]com$/;


    if(pattern.test(a)){
        if(!document.getElementById('w1').classList.contains('hide'))
            document.getElementById('w1').classList.add('hide');
        input1.value="";
    }
    else{
        document.getElementById('w1').classList.remove('hide');
    }


    if(phone.test(b)){
        if(!document.getElementById('w2').classList.contains('hide'))
            document.getElementById('w2').classList.add('hide');
        input2.value="";
    }
    else{
        document.getElementById('w2').classList.remove('hide');
    }

    if(email.test(c)){
        if(!document.getElementById('w3').classList.contains('hide')){
            document.getElementById('w3').classList.add('hide');
        } 
        input3.value="";
    }
    else{
        document.getElementById('w3').classList.remove('hide');
    }
    //   /[A-Z]{5}[0-9]{4}[A-Z]{1}$/
}