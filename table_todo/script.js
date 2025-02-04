//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function showrow1(rowid){
  var row1 = document.getElementById(rowid);
  if(row1.style.display == "block"){
    row1.style.display ="none";
  }else{
    row1.style.display="block";
  }
}
function showrow2(rowid2){
  var row2 = document.getElementById(rowid2);
  if(row2.style.display == "block"){
    row2.style.display ="none";
  }else{
    row2.style.display="block";
  }
}
function showrow3(rowid3){
  var row3 = document.getElementById(rowid3);
  if(row3.style.display == "block"){
    row3.style.display ="none";
  }else{
    row3.style.display="block";
  }
}

const table = document.getElementById("myTable");
const tickRows = table.getElementsByTagName("input");
let countBox = 0;
hiddenRows();
function hiddenRows(){
  var count = 0;
  var submitBtn = document.getElementById("button");
  for(var i = 0; i < tickRows.length; i++){
    var row = tickRows[i].parentNode.parentNode;

    if(!tickRows.checked){
      count++;
      row.querySelector("td")[8].classList.add("colHide");
      row.querySelector("td")[9].classList.add("colHide");
    }

    if(tickRows.length === count){
      submitBtn.style.backgroundColor = "gray";
      submitBtn.style.borderColor = "gray";
      submitBtn.style.cursor = "initial";
      submitBtn.disabled = true;
       document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("colHide");
       document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("colHide");
    }
  }
}
selectedRow();

let boolean = true; 
function delRow(r){
  const o = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTabele").delRow(i);
  alert("Selected Row Deleted");
  hiddenRows();
  selectedRow();
}

function editRow(r){
  alert("Edit the Student Details")
  selectedRow();
}

function addStud(){
  const row = table.insertRow(table.rows.length);
  const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="showrow1('row1')" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${Math.ceil(rowCount/ 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount/ 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  selectedRow();
  addNewRow();
  hiddenRows();
}
window.addEventListener("click", () => {

  let submitBtn = document.getElementById("button");

  if (countBoxPresent > 0) {    
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
}
)
function addNewRow() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")
  
  row.innerHTML = 
      '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectedRow();
}

var rowName;

function selectedRow(){
  for (let i=0; i<tickRows.length; i++){
    const row = tickRows[i].parentNode.parentNode;
    rowName = tickRows;

    tickRows[i].addEventListener("click",()=>{
      if (tickRows[i].checked){
        countBoxPresent++;
        row.style.backgroundColor="yellow";
        
        row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit Row</button></td>";
        row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='delRow(this)'>Delete Row</button></td>";
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("colHide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("colHide");
        row.querySelectorAll("td")[8].classList.remove("colHide");
        row.querySelectorAll("td")[9].classList.remove("colHide");
      }else {
        countBoxPresent--;
        row.style.backgroundColor = "white";
        row.lastElementChild.innerHTML = "";
        row.lastElementChild.previousElementSibling.innerHTML = "";
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("colHide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("colHide");
        row.querySelectorAll("td")[8].classList.add("colHide");
        row.querySelectorAll("td")[9].classList.add("colHide");
      }
    })
  }
}