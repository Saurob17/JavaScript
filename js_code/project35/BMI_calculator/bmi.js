const weight=document.getElementById('weight');
const height=document.getElementById('height');

const btn=document.getElementById('button');

const result=document.getElementById('result');

btn.addEventListener('click',

    function calculateBMI(){
        var h=height.value;
        const w=weight.value;

        h=(h*0.3048);
        const bmi=((w/(h*h)).toFixed(2));

        let status='';

        if(bmi<18.5){
            status='Underweight';
        }
        else if(bmi>=18.5 && bmi<24.9){
            status='Normal weight';
        }
        else if(bmi>=25 && bmi<29.9){
            status='Overweight';
        }
        else{
            status='Obesity';
        }  

        if( isNaN(w) || isNaN(h) || w<=0 || h<=0){

            result.innerHTML='Please enter valid weight and height';
            result.style.color='red';
            result
            return;
        }
        result.style.color='black';
        result.style.fontWeight='bold';
        result.style.fontSize='20px';
        result.style.textAlign='center';
        result.style.paddingTop='15px';

        result.innerHTML=`Your BMI = ${bmi} <br> The BMI is ${status}`;
        
})
