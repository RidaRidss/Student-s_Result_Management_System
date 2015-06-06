var sno=0;
//function show (){  a=document.getElementById("form");    a.style.display="Block"}
function show2(){
var a;
var tableData=[];
var table;
sno +=1;
    a=document.getElementById('studentdiv');
    a.style.display="Block";
//name= document.getElementById('n').nodeValue;
//age  = document.getElementById('a').nodeValue;
tableData=[document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td")];
var tableRow = document.createElement('tr');
table=document.getElementById("student");
table.appendChild(tableRow);
tableRow.appendChild(tableData[0]);
tableRow.appendChild(tableData[1]);
tableRow.appendChild(tableData[2]);
tableRow.appendChild(tableData[3]);
tableRow.appendChild(tableData[4]);
tableRow.appendChild(tableData[5]);
tableRow.appendChild(tableData[6]);
tableRow.appendChild(tableData[7]);
tableData[0].innerHTML=sno;
tableData[1].innerHTML=document.getElementById('n')['value'];
tableData[2].innerHTML=Number(document.getElementById('a')['value']);
tableData[3].innerHTML=Number(document.getElementById('N')['value']);
tableData[4].innerHTML=Number(document.getElementById('D')['value']);
tableData[5].innerHTML=Number(document.getElementById('AI')['value']);
tableData[6].innerHTML=Number(document.getElementById('J')['value']);
 var per : number =[Number(document.getElementById('N')['value']) + Number(document.getElementById('D')['value']) + Number(document.getElementById('AI')['value'])+Number(document.getElementById('J')['value'])]/400;
per=per*100;
tableData[7].innerHTML=per + "%";
}
//    sno+=1;
//    a=document.getElementById("studentdiv");
//    a.style.display="Block";
//    var tr=document.createElement("tr");
//    var td1=document.createElement("td");
//    var td2=document.createElement("td");
//    var td3=document.createElement("td");
//    var td4=document.createElement("td");
//    var td5=document.createElement("td");
//    var link= document.createElement("a");
//    link.href="#";
//    td4.appendChild(link);
//    var elink=document.createElement("a")
//    elink.href="#";
//    td5.appendChild(elink);
//
//    var table =document.getElementById("student");
//    table.appendChild(tr);
//    tr.appendChild(td1);
//    tr.appendChild(td2);
//    tr.appendChild(td3);
//    tr.appendChild(td4);
//    tr.appendChild(td5);
//    td1.innerHTML=document.getElementById("n").nodeValue;
//    td2.innerHTML=document.getElementById("a").nodeValue;
//    td3.innerHTML=sno;
//    link.innerHTML="delete";
//    link.onclick= function (){
//        link.parentNode.parentNode.parentNode.removeChild(link.parentNode.parentNode)
//
//    }
//    elink.innerHTML="edit";
//    elink.onclick=function(){
//        var editName= elink.parentNode.parentNode.childNodes[0].innerHTML;
//        var editAge = elink.parentNode.parentNode.childNodes[1].innerHTML;
//        document.getElementById("n").nodeValue=editName;
//        document.getElementById("a").nodeValue=editAge;
//    }
//
//
//
//
//}
