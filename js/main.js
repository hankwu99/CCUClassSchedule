import { init, clear } from "./init.js"
import { getCourse, newCourse } from "./course.js"

const PLACES_TO_NUMBER = 
{
    '文學院': 0,
    '理學院': 1,
    '社會科學學院': 2,
    '工學院': 3,
    '管理學院': 4,
    '法學院': 5,
    '教育學院':	6,
    '其他': 7,
    '學院別': -1
}

const CHINESE_DEPART_TO_NUMBER =
{
    '文學院學士班': 1014, '中文系': 1104, '中文所': 1106, '外文系': 1154, '外文所': 1156,'歷史系': 1204, '歷史所': 1206, '哲學系': 1254, '哲學所': 1256, '英語教學所': 1366, '台文創應所': 1416,
    '理學院學士班': 2014, '數學系': 2104, '應數所': 2106, '地震所': 2156, '物理系': 2204, '物理所': 2206, '統科所':2316, '地環系': 2354, '地環所': 2356, '數學所': 2406, '分子生物所': 2456, '生醫系': 2574, '生醫所': 2576, '化生系': 2604, '化生所': 2606, '跨領域科學國際博士學位學程': 2706,
    '社福系': 3104, '社福所': 3106, '心理系': 3154, '心理所': 3156, '勞工系': 3204, '勞工所': 3206, '政治系': 3304, '政治所': 3306, '傳播系': 3354, '電傳所': 3356, '戰略所':3416, '臨床心理所': 3656, '認知科學博士學位學程': 3706, 
    '工學院學士班': 4014, '工學院碩士班': 4016,'資工系': 4104, '資工所': 4106, '電機系': 4154, '電機所': 4156, '機械系': 4204, '機械所': 4206, '化工系': 4254, '化工所': 4256, '通訊系': 4304, '通訊所': 4306, '光機電所': 4416, '前瞻製造系統碩/博士學位學程': 4456,
    '經濟系': 5104, '財金系': 5154, '財金所': 5156, '企管系': 5204, '企管所': 5206, '會資系': 5264, '會資所': 5266, '資管系': 5304, '資管所': 5306, '國經所': 5106, '國際財管碩士學位學程': 5356, '行銷管理所': 5456, '醫療資訊管理所': 5556,
    '法學院學士班': 6014, '法律所': 6056, '法律系法學組': 6104, '法律系法制組': 6204, '財法系': 6304, '財法所': 6306,
    '成教系': 7104, '成教所': 7106, '犯防系': 7254, '犯防所': 7256, '運競系': 7364, '教育所': 7156, '師培中心': 7306, '休閒教育所': 7356, '教育領導碩士學位學程': 7456, '高齡者教育所': 7506,
    '體育中心': 'F000', '通識中心': 'I001', '軍訓': 'V000', '語言中心': 'Z121' 
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

var submit = document.getElementById("submit");
var clean = document.getElementById("clean");
submit.onclick = newCourse;
clean.onclick = clear;
init();

// var items =
// [
//     ['文學院學士班', '中文系', '中文所', '外文系', '外文所', '歷史系', '歷史所', '哲學系', '哲學所', '語言所', '英語教學所', '台文創應所'],
//     ['理學院學士班', '數學系', '應數所', '地震所', '物理系', '物理所', '統科所', '地環系', '地環所', '數學所', '分子生物所', '生醫系',  '生醫所', '化生系', '化生所', '跨領域科學國際博士學位學程'],
//     ['社福系', '社福所', '心理系', '心理所', '勞工系', '勞工所', '政治系', '政治所', '傳播系', '電傳所', '戰略所', '臨床心理所', '認知科學博士學位學程'],
//     ['工學院學士班', '工學院碩士班', '資工系', '資工所', '電機系', '電機所', '機械系', '機械所', '化工系', '化工所', '通訊系', '通訊所', '光機電所','前瞻製造系統碩/博士學位學程'],
//     ['經濟學系', '國經所', '財金系', '財金所', '企管系', '企管所', '會資系', '會資所', '資管系', '資管所', '國際財管碩士學位學程', '行銷管理所', '醫療資訊管理所'],
//     ['法學院學士班',  '法律所', '法學組', '法制組', '財法系', '財法所'],
//     ['成教系',  '成教所', '教育所', '犯防系', '犯防所', '師培中心', '休閒教育所', '運競系', '課研所', '教育領導碩士學位學程', '高齡教育所'],
//     ['體育中心', '通識中心', '軍訓', '語言中心']
// ]

// let e = document.getElementById("Select4");

// e.addEventListener('change', (event) =>
// {
//     if(PLACES_TO_NUMBER[e.options[e.selectedIndex].text] == -1)
//     {
//         document.getElementById("Select5").setAttribute('disabled', 'disabled')
//         document.getElementById("Select6").setAttribute('disabled', 'disabled')
//         document.getElementById("Select7").setAttribute('disabled', 'disabled')
//         document.getElementById("search").setAttribute('disabled', 'disabled')
//     }
//     else
//     {
//         document.getElementById("Select7").setAttribute('disabled', 'disabled')
//         let places =  e.options[e.selectedIndex].text;
//         var str = '<option selected>系所</option>'
//         for (var item of items[PLACES_TO_NUMBER[places]])
//             str += "<option>" + item + "</option>"
//         document.getElementById("Select5").innerHTML = str;
//         document.getElementById("Select5").removeAttribute('disabled')
//     }
// });

// let depart = document.getElementById("Select5");
// depart.addEventListener('change', (event) =>
// {
//     let departs =  depart.options[depart.selectedIndex].text;
//     if(departs === '通識中心')
//     {
//         document.getElementById("Select7").setAttribute('disabled', 'disabled')
//         document.getElementById("search").setAttribute('disabled', 'disabled')
//         document.getElementById("Select6").removeAttribute('disabled')
//         var str = '<option selected value = "-1">向度</option>'
//         var list = ['基礎概論', '資訊能力', '藝術與美學', '能源、環境與生態', '人文思維與生命探索', '公民與社會參與', '經濟與國際脈動', '自然科學與技術']
//         for (let i = 0; i < list.length; ++i)
//             str += "<option value = '" + i + "'>" + list[i] + "</option>"
//         document.getElementById("Select6").innerHTML = str;
//     }
//     else if(departs !== "系所")
//     {
//         document.getElementById("Select6").setAttribute('disabled', 'disabled')
//         document.getElementById("search").removeAttribute('disabled')
//         var str = '<option selected>課程選擇</option>'
//         var data = fetchAsync("https://ccuclassscheduleapi.hankwu99.repl.co/test_api/" + CHINESE_DEPART_TO_NUMBER[departs])
//         for(var item of data)
//             str += "<option>" + item[2] + "</option>"
//         document.getElementById("Select7").innerHTML = str;
//     }
//     else
//     {
//         document.getElementById("Select7").setAttribute('disabled', 'disabled')
//         document.getElementById("search").setAttribute('disabled', 'disabled')
//     }
// });

// let dimension = document.getElementById("Select6");
// depart.addEventListener('change', (event) =>
// {
//     let dimen =  dimension.options[depart.selectedIndex].value;
//     if(dimen === "-1")
//     {
//         document.getElementById("Select7").setAttribute('disabled', 'disabled')
//         document.getElementById("search").setAttribute('disabled', 'disabled')
//     }
//     else 
//     {
//         document.getElementById("search").removeAttribute('disabled')
//     }

// });



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
        localStorage.used = JSON.stringify(storedUsed);
        localStorage.courses = JSON.stringify(storedcourses);//done
        getCourse();
    }
});
