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
    else if(parseInt(start) > parseInt(end) || !isdigit(start) || !isdigit(end))
        alert('您的課程時間資訊錯誤。')
    else
    {
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
            let list = $(".coursesGroup").get();
            var isUsed = JSON.parse(localStorage.used);
            var courses = JSON.parse(localStorage.courses);
            $(list).append(`<div class = "courselist">[課程名稱]:${className} - [教室位置]: ${classLocation} - [課程時間]: ${classDay} ${start} ~ ${end}<button class = "btn-delete"><i class = "fa fa-trash-o"></i>刪除</button></div>`)
            courses.push({課程名稱: className, 上課教室: classLocation, 上課時間: {星期: classDay, 開始節次: start, 結束節次: end}});
            for(var i = startClass - 1; i < endClass; ++i)
                isUsed[CHINESE_WORD_TO_NUMBER[classDay] - 1][i] = true;
            localStorage.used = JSON.stringify(isUsed);
            localStorage.courses = JSON.stringify(courses);
        }
    }
}
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
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            var img = new Image();
            img.crossOrigin = "Anonymous";
            img.id = "getshot";
            img.src = canvas.toDataURL("image/png", 0.5);
            var url = canvas
                .toDataURL("image/jpeg", 0.92)
                .replace("image/jpeg", "image/octet-stream");
            var myWindow = window.open("", "width = 1080, height = 1920");
            myWindow.document.write('<a href = "' + url + '"><img src = "' + url + '"></a>');
        }
        else
        {
            a = document.createElement("a");
            a.href = canvas
                .toDataURL("image/jpeg", 0.92)
                .replace("image/jpeg", "image/octet-stream");
            a.download = "curriculum.jpg";
            a.click();
        }
    });
}
async function getCourse()
{
    await resetTable()
    createCurriculum().then($("#curriculum").rowspanizer())
    $("#curriculum").show()
    document.getElementById("curriculum").style.visibility = "visible"; 
}

var submit = document.getElementById("submit");
var setup = document.getElementById("setup");
var print = document.getElementById("print");
submit.onclick = newCourse;
setup.onclick = getCourse;
print.onclick = block_capture;

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
            let list = $(".coursesGroup").get();
            
            for(var index = 0; index < storedcourses.length; index++)
            {
                let className = storedcourses[index]["課程名稱"]
                let courseTime = storedcourses[index]["上課時間"]
                let classLocation = storedcourses[index]["上課教室"]
                let startClass = 0
                let endClass = 0
                $(list).append(`<div class = "courselist">[課程名稱]: ${className} - [教室位置]: ${classLocation} - [課程時間]: ${courseTime["星期"]} ${courseTime["開始節次"]} ~ ${courseTime["結束節次"]}<button type = "button" class = "btn-delete"><i class = "fa fa-trash-o"></i>刪除</button></div>`)
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
            document.getElementById("curriculum").style.visibility = "hidden";
        localStorage.used = JSON.stringify(isUsed);
    }
    else
    {
        localStorage.used = JSON.stringify(isUsed);
        localStorage.courses = JSON.stringify(courses);
        document.getElementById("curriculum").style.visibility = "hidden";
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
            if(target.parentNode.textContent.includes(storedcourses[i]["課程名稱"]) && target.parentNode.textContent.includes(storedcourses[i]["上課時間"]["開始節次"]))
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
        target.parentNode.remove()
        localStorage.used = JSON.stringify(storedUsed);
        localStorage.courses = JSON.stringify(storedcourses);//done
    }
});
