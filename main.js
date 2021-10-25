function newCourse()
{
    let className = document.getElementById("input").value;
    let classLocation = document.getElementById("input2").value;
    let classType = document.getElementById("type").value;
    alert(`${className} ${classLocation} ${classType}`);
    var el = document.querySelector('.list');
    el.innerHTML = `<li style = "color: rgb(164, 255, 192);">課程名稱: ${className} --- 教室位置: ${classLocation}</li>`;
}
var submit = document.getElementById("button");
submit.onclick = newCourse;