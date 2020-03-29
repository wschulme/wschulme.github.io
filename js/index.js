values = {
 1: "As much filtration as possible",
 2: "Prioritize filtration",
 3: "Balanced between filtration and breathability",
 4: "Prioritize breathability",
 5: "As much breathability as possible"
}
q1 = 3;
q2 = -1;
q3 = -1;
sewing = -1;


$("#beginner").click(function(){
    window.location.href = '/beginner.html';
    sewing = 0;
})

$("#advanced").click(function(){
    window.location.href = '/advanced.html';
    sewing = 1;
})

$(".calculate").click(function(){
    if(q2 == -1 || q3 == -1) {
        alert("Please answer all questions.") 
    }
    else {
        window.location.href = '/result.html';
    }
})

function valueUpdate(value, id) {
    $("#q" + id + "_value").text(values[value]);
    q1 = value;
}

function updateYesNo(question, value) {
    if(question == 2) q2 = value;
    else q3 = value;
}