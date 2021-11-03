function newCourse()
{
    let className = document.getElementById("Course name").value;
    let classLocation = document.getElementById("Classroom").value;
    let classType = document.getElementById("inputGroupSelect").value;
    // 用 createElement 增加一個 DOM 節點
    var str = document.createElement("li");
    // 先用 JS 寫好要增加的內容
    str.textContent = `課程名稱: ${className} / 教室位置: ${classLocation} / 課程類型: ${classType} \n`;
    // 動態掛一個 class 屬性
    str.setAttribute('class', 'list-group-item');
    str.setAttribute('style', "color : black;")
    // 用 appendChild() 把上面寫好的子節點掛在既有的 h1 下面，新增的內容會依序排列在後面，不會被洗掉
    document.querySelector('.list-group').appendChild(str);

}
var submit = document.getElementById("submit");
submit.onclick = newCourse;