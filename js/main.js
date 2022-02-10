const PLACES_TO_NUMBER = 
{
    '文學院': 0,
    '理學院': 1,
    '社會科學學院': 2,
    '工學院': 3,
    '管理學院': 4,
    '法學院': 5,
    '教育學院':	6,
    '其他': 7
}

const CHINESE_WORD_TO_NUMBER =
{
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6
}

const CLASS_MAP =
{
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    '11': 11,
    '12': 12,
    '13': 13,
    '14': 14,
    '15': 15,
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10
}

const CLASS_TO_TIME =
{
    '1': '07:10',
    '2': '08:10',
    '3': '09:10',
    '4': '10:10',
    '5': '11:10',
    '6': '12:10',
    '7': '13:10',
    '8': '14:10',
    '9': '15:10',
    '10': '16:10',
    '11': '17:10',
    '12': '18:10',
    '13': '19:10',
    '14': '20:10',
    '15': '21:10',
    'A': '07:15',
    'B': '08:45',
    'C': '10:15',
    'D': '11:45',
    'E': '13:15',
    'F': '14:45',
    'G': '16:15',
    'H': '17:45',
    'I': '19:15',
    'J': '20:45'
}

function isdigit(str)
{
    return /^\d+$/.test(str);
}

var courses = []
var dayCheck = ['一', '二', '三', '四', '五', '六']
var timeCheck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
var xssSimpleCheck = [";", "/", "?", ":", "@", "&", "=", "+", "$", ",", "<", ">", "alert", "\\", "\/", ".", "]", "[", "\\", "^", "-", "_", "`", "\"", "'"]

async function resetTable()
{
    var cloneTable = $("#curriculum").clone()
    $("#curriculum").remove()
    cloneTable.html(`
    <tbody>
        <tr>
            <th> </th>
            <th colspan = "2">節次</th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
            <th>星期六</th>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">1<br>07:10</td>
            <td class = "time-td">A<br>07:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">1<br>07:10</td>
            <td class = "time-td">A<br>07:15</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">2<br>08:10</td>
            <td class = "time-td">A<br>07:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">2<br>08:10</td>
            <td class = "time-td">B<br>08:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">3<br>09:10</td>
            <td class = "time-td">B<br>08:45</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">3<br>09:10</td>
            <td class = "time-td">B<br>08:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">4<br>10:10</td>
            <td class = "time-td">C<br>10:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">4<br>10:10</td>
            <td class = "time-td">C<br>10:15</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">5<br>11:10</td>
            <td class = "time-td">C<br>10:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">5<br>11:10</td>
            <td class = "time-td">D<br>11:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">6<br>12:10</td>
            <td class = "time-td">D<br>11:45</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">6<br>12:10</td>
            <td class = "time-td">D<br>11:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">7<br>13:10</td>
            <td class = "time-td">E<br>13:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">7<br>13:10</td>
            <td class = "time-td">E<br>13:15</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">8<br>14:10</td>
            <td class = "time-td">E<br>13:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">8<br>14:10</td>
            <td class = "time-td">F<br>14:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">9<br>15:10</td>
            <td class = "time-td">F<br>14:45</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">9<br>15:10</td>
            <td class = "time-td">F<br>14:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">10<br>16:10</td>
            <td class = "time-td">G<br>16:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">10<br>16:10</td>
            <td class = "time-td">G<br>16:15</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">11<br>17:10</td>
            <td class = "time-td">G<br>16:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">11<br>17:10</td>
            <td class = "time-td">H<br>17:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">12<br>18:10</td>
            <td class = "time-td">H<br>17:45</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">12<br>18:10</td>
            <td class = "time-td">H<br>17:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">13<br>19:10</td>
            <td class = "time-td">I<br>19:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">13<br>19:10</td>
            <td class = "time-td">I<br>19:15</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">14<br>20:10</td>
            <td class = "time-td">I<br>19:15</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">14<br>20:10</td>
            <td class = "time-td">J<br>20:45</td>
        </tr>
        <tr>
            <td>⠀</td>
            <td class = "time-td">15<br>21:10</td>
            <td class = "time-td">J<br>20:45</td>
        </tr>
        <tr>
            <td>⠀⠀</td>
            <td class = "time-td">15<br>21:10</td>
            <td class = "time-td">J<br>20:45</td>
        </tr>
    </tbody>
    `)
    $(".table-div").append(cloneTable)
    let rows = $("#curriculum > tbody > tr").get().slice(1)
    rows.forEach(row => {
        for(let i = 0; i < 6; ++i)
            $(row).find("td:last").after("<td></td>")
    })
    $("#curriculum").show()
}
function createCurriculum()
{
    return new Promise((resolve, reject) => {
        let rows = $("#curriculum > tbody > tr").get();
        var storedcourses = JSON.parse(localStorage.courses);
        for(var index = 0; index < storedcourses.length; index++)
        {
            let courseName = storedcourses[index]["課程名稱"]
            let courseTime = storedcourses[index]["上課時間"]
            let courseClassroom = storedcourses[index]["上課教室"]
            let day = CHINESE_WORD_TO_NUMBER[courseTime["星期"]]
            let startClass = 0
            let endClass = 0
            let startTime = CLASS_TO_TIME[courseTime["開始節次"]];
            if(courseTime["開始節次"] >= 'A' && courseTime["開始節次"] <= 'J')
            {
                startClass = 1 + (CLASS_MAP[courseTime["開始節次"]] - 1) * 3
                endClass = 3 + (CLASS_MAP[courseTime["結束節次"]] - 1) * 3
            }
            else 
            {
                startClass = 1 + (CLASS_MAP[courseTime["開始節次"]] - 1) * 2
                endClass = CLASS_MAP[courseTime["結束節次"]] * 2 
            }
            for(let i = startClass; i <= endClass; ++i)
            {
                tds = $(rows[i]).children('td')
                $(tds[day + 2]).append(`<div class = "course-time">${startTime}</div>`)
                $(tds[day + 2]).append(`<div class = "course-name" style = "font-weight: bold;">${courseName}</div>`)
                $(tds[day + 2]).append(`<div class = "course-classroom">${courseClassroom}</div>`)
                $(tds[day + 2]).addClass('used-td')
            }
        }
        resolve(1);
    });
}
function block_capture() 
{
    html2canvas(document.querySelector("#curriculum")).then(function (canvas)
    {
        a = document.createElement("a");
        a.href = canvas
            .toDataURL("image/jpeg", 0.92)
            .replace("image/jpeg", "image/octet-stream");
        a.download = "curriculum.jpg";
        a.click();
    });
}

async function getCourse()
{
    await resetTable()
    createCurriculum().then($("#curriculum").rowspanizer())
    $("#curriculum").show()
    document.getElementById("curriculum").style.visibility = "visible"; 
}

function newCourse()
{
    let className = document.getElementById("Course name").value;
    let classLocation = document.getElementById("Classroom").value;
    let e = document.getElementById("Select1");
    let classDay = e.options[e.selectedIndex].text;
    let start = document.getElementById("Select2").value;
    let end = document.getElementById("Select3").value;
    if(className === '')
        alert('您的課程名稱不得為空。')
    else if(classLocation === '')
        alert('您的課程教室不得為空。')
    else if(!dayCheck.includes(classDay))
        alert('您的課程日期錯誤。')
    else if(!timeCheck.includes(start) || !timeCheck.includes(end))
        alert('您的課程時間資訊錯誤。')
    else if(parseInt(start) > parseInt(end) || (isdigit(start) && !isdigit(end)) || (!isdigit(start) && isdigit(end)))
        alert('您的課程時間資訊錯誤。')
    else
    {
        for(var i = 0; i < xssSimpleCheck.length; ++i)
        {
            if(classLocation.includes(xssSimpleCheck[i]) || className.includes(xssSimpleCheck[i]))
            {
                alert('您的輸入有不合法字元!');
                return;
            }
        }
        let startClass = 0;
        let endClass = 0;
        if(start >= 'A' && end <= 'J')
        {
            startClass = 1 + (CLASS_MAP[start] - 1) * 3
            endClass = 3 + (CLASS_MAP[end] - 1) * 3
        }
        else 
        {
            startClass = 1 + (CLASS_MAP[start] - 1) * 2
            endClass = CLASS_MAP[end] * 2 
        }
        function check()
        {
            var storedUsed = JSON.parse(localStorage.used);
            for(var i = startClass - 1; i < endClass; ++i)
            {
                if(storedUsed[CHINESE_WORD_TO_NUMBER[classDay] - 1][i])
                {
                    alert("您的課堂有所衝突!");
                    return false;
                }
            }
            return true;
        }
        if(check())
        {
            let list = $("#accordion").get();
            var isUsed = JSON.parse(localStorage.used);
            var courses = JSON.parse(localStorage.courses);
            var elem = document.getElementById("default")
            if(list.length === 1 && elem)
                elem.parentNode.removeChild(elem);
            $('#accordion > tbody:last-child').append(`<tr><td>${className}</td><td>${classLocation}</td><td>${classDay} ${start} ~ ${end}</td><td><button type = "button" class = "btn-delete"><i class = "fa fa-trash-o"></i>刪除</button></td></tr>`);
            $("#accordion").show();
            courses.push({課程名稱: className, 上課教室: classLocation, 上課時間: {星期: classDay, 開始節次: start, 結束節次: end}});
            for(var i = startClass - 1; i < endClass; ++i)
                isUsed[CHINESE_WORD_TO_NUMBER[classDay] - 1][i] = true;
            localStorage.used = JSON.stringify(isUsed);
            localStorage.courses = JSON.stringify(courses);
            getCourse();
        }
    }
}

var submit = document.getElementById("submit");
var print = document.getElementById("print");
var clean = document.getElementById("clean");
submit.onclick = newCourse;
print.onclick = block_capture;
clean.onclick = clear;

var items =
[
    ['文學院學士班', '中文系', '中文所', '外文系', '外文所', '歷史系', '歷史所', '哲學系', '哲學所', '語言所', '英語教學所', '台文創應所'],
    ['理學院學士班', '數學系', '應數所', '地震所', '物理系', '物理所', '統科所', '地環系', '地環所', '數學所', '分子生物所', '生醫系',  '生醫所', '化生系', '化生所', '跨領域科學國際博士學位學程'],
    ['社福系', '社福所', '心理系', '心理所', '勞工系', '勞工所', '政治系', '政治所', '傳播系', '電傳所', '戰略所', '臨床心理所', '認知科學博士學位學程'],
    ['工學院學士班', '工學院碩士班', '資工系', '資工所', '電機系', '電機所', '機械系', '機械所', '化工系', '化工所', '通訊系', '通訊所', '光機電所','前瞻製造系統碩/博士學位學程'],
    ['經濟學系', '國經所', '財金系', '財金所', '企管系', '企管所', '會資系', '會資所', '資管系', '資管所', '國際財管碩士學位學程', '行銷管理所', '醫療資訊管理所'],
    ['法學院學士班',  '法律所', '法學組', '法制組', '財法系', '財法所'],
    ['成教系',  '成教所', '教育所', '犯防系', '犯防所', '師培中心', '休閒教育所', '運競系', '課研所', '教育領導碩士學位學程', '高齡教育所'],
    ['體育中心', '通識中心', '軍訓', '語言中心']
]
//console.log(items)
//let e = document.getElementById("Select4");
/*
e.addEventListener('change', (event) =>
{
    document.getElementById("Select7").setAttribute('disabled', 'disabled')
    let places =  e.options[e.selectedIndex].text;
    var str = '<option selected>系所</option>'
    for (var item of items[PLACES_TO_NUMBER[places]])
        str += "<option>" + item + "</option>"
    document.getElementById("Select5").innerHTML = str;
});

let depart = document.getElementById("Select5");
depart.addEventListener('change', (event) =>
{
    let departs =  depart.options[depart.selectedIndex].text;
    if(departs === '通識中心')
    {
        document.getElementById("Select7").setAttribute('disabled', 'disabled')
        document.getElementById("Select6").removeAttribute('disabled')
        var str = '<option selected>向度</option>'
        var list = ['基礎概論', '資訊能力', '藝術與美學', '能源、環境與生態', '人文思維與生命探索', '公民與社會參與', '經濟與國際脈動', '自然科學與技術']
        for (var item of list)
            str += "<option>" + item + "</option>"
        document.getElementById("Select6").innerHTML = str;
    }
    else
    {
        document.getElementById("Select6").setAttribute('disabled', 'disabled')
        document.getElementById("Select7").removeAttribute('disabled')
        var str = '<option selected>課程選擇</option>'
        //scraper(departs)
        for (var item of list)
            str += "<option>" + item + "</option>"
        document.getElementById("Select7").innerHTML = str;
    }
    
});
*/
async function init()
{
    var isUsed = new Array(); 
    for(var i = 0; i < 6; ++i)
    { 
        isUsed[i] = new Array();
        for(var j = 0; j < 30; ++j)
            isUsed[i][j] = false;
    }
    if(localStorage.courses !== undefined)
    {
        var storedcourses = JSON.parse(localStorage.courses);
        if(storedcourses.length !== 0)
        {
            for(var index = 0; index < storedcourses.length; index++)
            {
                let className = storedcourses[index]["課程名稱"]
                let courseTime = storedcourses[index]["上課時間"]
                let classLocation = storedcourses[index]["上課教室"]
                let startClass = 0
                let endClass = 0
                $('#accordion > tbody:last-child').append(`<tr><td>${className}</td><td>${classLocation}</td><td>${courseTime["星期"]} ${courseTime["開始節次"]} ~ ${courseTime["結束節次"]}</td><td><button type = "button" class = "btn-delete"><i class = "fa fa-trash-o"></i>刪除</button></td></tr>`);
                $("#accordion").show();
                if(courseTime["開始節次"] >= 'A' && courseTime["開始節次"] <= 'J')
                {
                    startClass = 1 + (CLASS_MAP[courseTime["開始節次"]] - 1) * 3
                    endClass = 3 + (CLASS_MAP[courseTime["結束節次"]] - 1) * 3
                }
                else 
                {
                    startClass = 1 + (CLASS_MAP[courseTime["開始節次"]] - 1) * 2
                    endClass = CLASS_MAP[courseTime["結束節次"]] * 2 
                }
                for(var i = startClass - 1; i < endClass; ++i)
                    isUsed[CHINESE_WORD_TO_NUMBER[courseTime["星期"]] - 1][i] = true;
            }
            await resetTable()
            createCurriculum().then($("#curriculum").rowspanizer())
            $("#curriculum").show()
            document.getElementById("curriculum").style.visibility = "visible";
        }
        else
        {
            getCourse()
            $("#curriculum").show();
            $("#accordion").hide();
            var list = $("#course").get()
            $(list).append(`<div id = "default">尚無任何課程資訊，輸入資訊以建立您的課表</div>`)
        }
        localStorage.used = JSON.stringify(isUsed);
    }
    else
    {
        var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop1'), {
            keyboard: false
        })
        myModal.show();
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            print.style.display = "none";
            var myModal2 = new bootstrap.Modal(document.getElementById('staticBackdrop2'), {
                keyboard: false
            })
            myModal2.show();
        }
        localStorage.used = JSON.stringify(isUsed);
        localStorage.courses = JSON.stringify(courses);
        document.getElementById("curriculum").style.visibility = "hidden";
        $("#accordion").hide();
        var list = $("#course").get()
        $(list).append(`<div id = "default">尚無任何課程資訊，輸入資訊以建立您的課表</div>`)
        getCourse()
    }
}

init();

document.querySelector('.coursesGroup').addEventListener('click', function(event)
{
    const target = event.target;
    if(target.classList.contains('btn-delete'))
    {
        var storedcourses = JSON.parse(localStorage.courses);
        var storedUsed = JSON.parse(localStorage.used);
        for(var i = 0; i < storedcourses.length; i++)
        {
            if(target.parentNode.parentNode.textContent.includes(storedcourses[i]["課程名稱"]) && target.parentNode.parentNode.textContent.includes(storedcourses[i]["上課時間"]["開始節次"]))
            { 
                
                let start = 0;
                let end = 0;
                let day = CHINESE_WORD_TO_NUMBER[storedcourses[i]["上課時間"]["星期"]];
                if(storedcourses[i]["上課時間"]["開始節次"] >= 'A' && storedcourses[i]["上課時間"]["開始節次"] <= 'J')
                {
                    start = 1 + (CLASS_MAP[storedcourses[i]["上課時間"]["開始節次"]] - 1) * 3
                    end = 3 + (CLASS_MAP[storedcourses[i]["上課時間"]["結束節次"]] - 1) * 3
                }
                else 
                {
                    start = 1 + (CLASS_MAP[storedcourses[i]["上課時間"]["開始節次"]] - 1) * 2
                    end = CLASS_MAP[storedcourses[i]["上課時間"]["結束節次"]] * 2 
                }
                for(var j = start - 1; j < end; ++j)
                    storedUsed[day - 1][j] = false;
                storedcourses.splice(i, 1);
                break;
            }
        }
        var row = target.parentNode.parentNode;
        row.parentNode.removeChild(row);
        //target.parentNode.parentNode.remove()
        localStorage.used = JSON.stringify(storedUsed);
        localStorage.courses = JSON.stringify(storedcourses);//done
        getCourse();
    }
});


function clear()
{
    var e = document.querySelector("#accordion");
    e.innerHTML = ""
    if(e.style.display != "none")
    {
        $("#accordion").hide();
        var list = $("#course").get()
        $(list).append(`<div id = "default">尚無任何課程資訊，輸入資訊以建立您的課表</div>`)
        var storedcourses = JSON.parse(localStorage.courses);
        var storedUsed = JSON.parse(localStorage.used);
        for(var i = 0; i < storedcourses.length; i++)
        {
            let start = 0;
            let end = 0;
            let day = CHINESE_WORD_TO_NUMBER[storedcourses[i]["上課時間"]["星期"]];
            if(storedcourses[i]["上課時間"]["開始節次"] >= 'A' && storedcourses[i]["上課時間"]["開始節次"] <= 'J')
            {
                start = 1 + (CLASS_MAP[storedcourses[i]["上課時間"]["開始節次"]] - 1) * 3
                end = 3 + (CLASS_MAP[storedcourses[i]["上課時間"]["結束節次"]] - 1) * 3
            }
            else 
            {
                start = 1 + (CLASS_MAP[storedcourses[i]["上課時間"]["開始節次"]] - 1) * 2
                end = CLASS_MAP[storedcourses[i]["上課時間"]["結束節次"]] * 2 
            }
            for(var j = start - 1; j < end; ++j)
                storedUsed[day - 1][j] = false;
        }
        cou = []
        localStorage.used = JSON.stringify(storedUsed);
        localStorage.removeItem("courses");
        localStorage.courses = JSON.stringify(cou);
        getCourse();
    }
}