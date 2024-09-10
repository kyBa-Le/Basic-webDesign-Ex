function getSum() {
    var sem1 = parseFloat(document.getElementById("sm1").value);
    var sem2 = parseFloat(document.getElementById("sm2").value);
    var nam = parseInt(document.getElementById("year").value)
    if(sem1  > 10 || sem2 > 10){
        alert("The number is unvalid!");
    }else{
        var sum = (sem1 + sem2) / 2;
        document.getElementById("sum").value = sum;
    }
    var kq = document.getElementById("kq");
    if(sum < 5){
        kq.value = "Ket qua nam " + nam + ": Hoc sinh trung binh";
    }else if(sum < 8){
        kq.value = "Ket qua nam " + nam + ": Hoc sinh kha";
    }else{
        kq.value = "Ket qua nam " + nam + ": Hoc sinh gioi";
    }

}
function function2(){
    const arr = document.getElementsByTagName("input");
    for(let i of arr){
        i.value = "";
    }
    document.getElementsById("kq").value = "";
}

function function3(){
    alert("you can't change!");
}