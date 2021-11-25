const CHINESE_WORD_TO_NUMBER = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '日': 7,
}
const CLASS_MAP = {
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
const CLASS_TO_TIME = {
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
var courses = []
var dayCheck = ['一', '二', '三', '四', '五']
var timeCheck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
var isUsed = new Array(); 
for(var i = 0; i < 5; ++i)
{ 
    isUsed[i] = new Array();
    for(var j = 0; j < 30; ++j)
        isUsed[i][j] = false;
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
    else if(parseInt(start) > parseInt(end))
        alert('您的課程時間資訊錯誤。')
    else
    {
        for(var i = start - 1; i < end; ++i)
        {
            if(isUsed[CHINESE_WORD_TO_NUMBER[classDay]][i])
            {
                alert("您的課堂有所衝突!");
                return;
            }
        }
        var str = document.createElement("li");
        str.textContent = `課程名稱: ${className} / 教室位置: ${classLocation} / 課程時間: ${classDay} ${start} ~ ${end}\n`;
        str.setAttribute('class', 'list-group-item');
        str.setAttribute('style', "color : black;");
        document.querySelector('.list-group').appendChild(str);
        courses.push({課程名稱: className, 上課教室: classLocation, 上課時間: {星期: classDay, 開始節次: start, 結束節次: end}});
        for(var i = start - 1; i < end; ++i)
            isUsed[CHINESE_WORD_TO_NUMBER[classDay]][i] = true;
    }
}

function doRowspan()
{
    for(let i = 1; i <= 5; ++i)
        $("#curriculum").rowspan(i)
}
async function resetTable()
{
    var cloneTable = $("#curriculum").clone()
    $("#curriculum").remove()
    cloneTable.html(`
    <tbody>
        <tr>
            <th>時間 / 星期</th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
        </tr>
        <tr>
            <td>07:00</td>
        </tr>
        <tr>
            <td>07:00</td>
        </tr>
        <tr>
            <td>08:00</td>
        </tr>
        <tr>
            <td>08:00</td>
        </tr>
        <tr>
            <td>09:00</td>
        </tr>
        <tr>
            <td>09:00</td>
        </tr>
        <tr>
            <td>10:00</td>
        </tr>
        <tr>
            <td>10:00</td>
        </tr>
        <tr>
            <td>11:00</td>
        </tr>
        <tr>
            <td>11:00</td>
        </tr>
        <tr>
            <td>12:00</td>
        </tr>
        <tr>
            <td>12:00</td>
        </tr>
        <tr>
            <td>13:00</td>
        </tr>
        <tr>
            <td>13:00</td>
        </tr>
        <tr>
            <td>14:00</td>
        </tr>
        <tr>
            <td>14:00</td>
        </tr>
        <tr>
            <td>15:00</td>
        </tr>
        <tr>
            <td>15:00</td>
        </tr>
        <tr>
            <td>16:00</td>
        </tr>
        <tr>
            <td>16:00</td>
        </tr>
        <tr>
            <td>17:00</td>
        </tr>
        <tr>
            <td>17:00</td>
        </tr>
        <tr>
            <td>18:00</td>
        </tr>
        <tr>
            <td>18:00</td>
        </tr>
        <tr>
            <td>19:00</td>
        </tr>
        <tr>
            <td>19:00</td>
        </tr>
        <tr>
            <td>20:00</td>
        </tr>
        <tr>
            <td>20:00</td>
        </tr>
        <tr>
            <td>21:00</td>
        </tr>
        <tr>
            <td>21:00</td>
        </tr>
    </tbody>
    `)
    $(".table-div").append(cloneTable)
    let rows = $("#curriculum > tbody > tr").get().slice(1)
    rows.forEach(row => {
        for(let i = 0; i < 5; ++i)
            $(row).find("td:last").after("<td></td>")
    })
    $("#curriculum").show()
}

function createCurriculum(courses)
{
    return new Promise((resolve, reject) => {
        let rows = $("#curriculum > tbody > tr").get();
        console.log(courses);
        for(var index = 0; index < courses.length; index++)
        {
            let courseName = courses[index]["課程名稱"]
            let courseTime = courses[index]["上課時間"]
            let courseClassroom = courses[index]["上課教室"]
            let day = CHINESE_WORD_TO_NUMBER[courseTime["星期"]]
            let startClass = 0
            let endClass = 0
            let startTime = CLASS_TO_TIME[courseTime["開始節次"]]
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
                $(tds[day]).append(`<div class = "course-time"><b>${startTime}</b></div>`)
                $(tds[day]).append(`<div class = "course-name">【${courseName}】</div>`)
                $(tds[day]).append(`<div class = "course-classroom">${courseClassroom}</div>`)
                $(tds[day]).addClass('used-td')
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
        a.download = "image.jpg";
        a.click();
    });
}

async function getCourse()
{
    if(courses.length == 0)
        alert("你沒有填入任何課程資訊!")
    else
    {
        await resetTable()
        createCurriculum(courses).then($("#curriculum").rowspanizer())
        $("#curriculum").show()
    }
}
var submit = document.getElementById("submit");
var setup = document.getElementById("setup");
var print = document.getElementById("print");

submit.onclick = newCourse;
setup.onclick = getCourse;
print.onclick = block_capture;