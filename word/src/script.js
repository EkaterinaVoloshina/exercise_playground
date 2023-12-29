var ctr = 0
var score_ctr = 0

function validate(value, id) {
    if (id == 'ctr1' && (value.toLowerCase() == "риск")) {
        ctr = ctr + 1;
        correct_answer(id);
        document.getElementById(id).value = "риск";
    }
    else if (id == 'ctr2' && (value.toLowerCase() == "дефолта")) {
        ctr = ctr + 1;
        correct_answer(id);
        document.getElementById(id).value = "дефолта";
    }
    else if (id == 'ctr3' && (value.toLowerCase() == "состояния")) {
        ctr = ctr + 1;
        correct_answer(id);
        document.getElementById(id).value = "состояния";
    }
    else
    {
        document.getElementById(id).style.backgroundColor = '#ff0000';
        document.getElementById(id).style.cursor = "default";
    }
};
	
function correct_answer (id) {
             score_ctr = (ctr * 100) / 3 
             document.getElementById('label_score').innerHTML = score_ctr.toFixed(0) + '%'
             document.getElementById(id).disabled=true;
             document.getElementById(id).style.backgroundColor = '#c1d82f'
             document.getElementById(id).style.cursor="default"

};