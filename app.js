function calculateValue() {
    let val = parseInt(document.querySelector('#quantity').value);
    let opt1 = document.querySelector('#option1');
    let opt2 = document.querySelector('#option2');
    let opt3 = document.querySelector('#option3');
    const result = document.querySelector('#result');

    if(opt1.checked){
       let sum = (opt1.value * val)/100;
       result.innerHTML = `You have to pay <span style='color: #5463FF;'>$${sum}</span> in tips`;
    }

    if(opt2.checked){
        let sum = (opt2.value * val)/100;
        result.innerHTML = `You have to pay <span style='color: #5463FF;'>$${sum}</span> in tips`;
     }

     if(opt3.checked){
        let sum = (opt3.value * val)/100;
        result.innerHTML = `You have to pay <span style='color: #5463FF;'>$${sum}</span> in tips`;
     }

     let clearBtn = document.querySelector('#clearBtn');

     clearBtn.style.display = 'initial';

     let customPercentage = document.querySelector('#percentageInput').value;

     if(opt1.checked === false && opt2.checked === false && opt3.checked === false && customPercentage.length > 0) {
        let sum = (parseInt(customPercentage) * val)/100;
        result.innerHTML = `You have to pay <span style='color: #5463FF;'>$${sum}</span> in tips`;
    }

}

const clearResult = () => {
    document.location.reload();
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
}