function newCourse()
{
    let className = document.getElementById("input").value;
    let classLocation = document.getElementById("input2").value;
    let classType = document.getElementById("type").value;
    alert(`${className} ${classLocation} ${classType}`);
}
var submit = document.getElementById("button");
submit.onclick = newCourse;