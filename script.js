    var selectedRow=null;

    function onFormSubmit(){
     var formData=readFormData();
     if(selectedRow==null)
     insertNewRecord(formData);
     else
    updateRecord(formData)
     resetForm();
    }
    function readFormData(){
     var formData={};
     formData["fullName"]=document.getElementById("fullName").value;
     formData["address"]=document.getElementById("address").value;
     formData["mobno"]=document.getElementById("mobno").value;
     formData["gender"]=document.querySelector('input[name="gender"]:checked').value;
     return formData;
    }
    function insertNewRecord(data){
        var table=document.getElementById("studentList").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length)
        cell1=newRow.insertCell(0);
        cell1.innerHTML=data.fullName;
        cell2=newRow.insertCell(1);
        cell2.innerHTML=data.address;
        cell3=newRow.insertCell(2);
        cell3.innerHTML=data.mobno;
        cell4=newRow.insertCell(3);
        cell4.innerHTML=data.gender;
        cell5=newRow.insertCell(4)
        cell5.innerHTML=` <button class="p-2 m-2 bg-green-500 text-white border-solid border-1 border-slate-900 rounded-lg" input type="submit" onClick="onEdit(this)" value="Submit">Edit</button>
                       
        <button class="p-2 m-2 bg-green-500 text-white border-solid border-1 border-slate-900 rounded-lg" input type="submit" onClick="onDelete(this)" value="Submit">Delete</button>`;

    }

    function resetForm(){
        document.getElementById("fullName").value="";
        document.getElementById("address").value="";
        document.getElementById("mobno").value="";
        document.getElementById("gender").value="";
        selectedRow=null;
        }

    function onEdit(td){
     selectedRow=td.parentElement.parentElement;
     document.getElementById("fullName").value=selectedRow.cells[0].innerHTML;
     document.getElementById("address").value=selectedRow.cells[1].innerHTML;
     document.getElementById("mobno").value=selectedRow.cells[2].innerHTML;
     document.getElementById("gender").value=selectedRow.cells[3].innerHTML;
    }

    function updateRecord(formData){
        selectedRow.cells[0].innerHTML=formData.fullName;
        selectedRow.cells[1].innerHTML=formData.address;
        selectedRow.cells[2].innerHTML=formData.mobno;
        selectedRow.cells[3].innerHTML=formData.gender;
    }

    function onDelete(td){
     row=td.parentElement.parentElement;
     document.getElementById("studentList").deleteRow(row.rowIndex);
     resetForm();
    }
