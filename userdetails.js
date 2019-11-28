<!DOCTYPE html>
<html>
<body>
 
<table border="1" id="table1">
<tr>
<th>S.NO</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email Address</th>
<th>Phone Number</th>
</tr>

<tr border=1 id="r1">
<td> <input type="text" id ="sno1"> </td>
<td> <input type="text" id ="fname1"> </td>
<td> <input type="text" id ="lname1"> </td>
<td> <input type="text" id ="email1"> </td>
<td> <input type="text" id ="phone1"> </td>
</tr>

<tr border=1 id="r2">
<td> <input type="text" id ="sno2"> </td>
<td> <input type="text" id ="fname2"> </td>
<td> <input type="text" id ="lname2"> </td>
<td> <input type="text" id ="email2"> </td>
<td> <input type="text" id ="phone2"> </td>
</tr>

<tr border=1 id="r3">
<td> <input type="text" id ="sno3"> </td>
<td> <input type="text" id ="fname3"> </td>
<td> <input type="text" id ="lname3"> </td>
<td> <input type="text" id ="email3"> </td>
<td> <input type="text" id ="phone3"> </td>
</tr>

<tr border=1 id="r4">
<td> <input type="text" id ="sno4"> </td>
<td> <input type="text" id ="fname4"> </td>
<td> <input type="text" id ="lname4"> </td>
<td> <input type="text" id ="email4"> </td>
<td> <input type="text" id ="phone4"> </td>
</tr>

<tr border=1 id="r5">
<td> <input type="text" id ="sno5"> </td>
<td> <input type="text" id ="fname5"> </td>
<td> <input type="text" id ="lname5"> </td>
<td> <input type="text" id ="email5"> </td>
<td> <input type="text" id ="phone5"> </td>
</tr>


<tr border=1 id="r6">
<td> <input type="text" id ="sno6"> </td>
<td> <input type="text" id ="fname6"> </td>
<td> <input type="text" id ="lname6"> </td>
<td> <input type="text" id ="email6"> </td>
<td> <input type="text" id ="phone6"> </td>
</tr>

<tr border=1 id="r7">
<td> <input type="text" id ="sno7"> </td>
<td> <input type="text" id ="fname7"> </td>
<td> <input type="text" id ="lname7"> </td>
<td> <input type="text" id ="email7"> </td>
<td> <input type="text" id ="phone7"> </td>
</tr>

<tr border=1 id="r8">
<td> <input type="text" id ="sno8"> </td>
<td> <input type="text" id ="fname8"> </td>
<td> <input type="text" id ="lname8"> </td>
<td> <input type="text" id ="email8"> </td>
<td> <input type="text" id ="phone8"> </td>
</tr>

<tr border=1 id="r9">
<td> <input type="text" id ="sno9"> </td>
<td> <input type="text" id ="fname9"> </td>
<td> <input type="text" id ="lname9"> </td>
<td> <input type="text" id ="email9"> </td>
<td> <input type="text" id ="phone9"> </td>
</tr>

<tr border=1 id="r10">
<<td> <input type="text" id ="sno10"> </td>
<td> <input type="text" id ="fname10"> </td>
<td> <input type="text" id ="lname10"> </td>
<td> <input type="text" id ="email10"> </td>
<td> <input type="text" id ="phone10"> </td>
</tr>

<tr border=1 id="r11">
<td> <input type="text" id ="sno11"> </td>
<td> <input type="text" id ="fname11"> </td>
<td> <input type="text" id ="lname11"> </td>
<td> <input type="text" id ="email11"> </td>
<td> <input type="text" id ="phone11"> </td>
</tr>

<tr border=1 id="r12">
<td> <input type="text" id ="sno12"> </td>
<td> <input type="text" id ="fname12"> </td>
<td> <input type="text" id ="lname12"> </td>
<td> <input type="text" id ="email12"> </td>
<td> <input type="text" id ="phone12"> </td>
</tr>

<tr border=1 id="r13">
<td> <input type="text" id ="sno13"> </td>
<td> <input type="text" id ="fname13"> </td>
<td> <input type="text" id ="lname13"> </td>
<td> <input type="text" id ="email13"> </td>
<td> <input type="text" id ="phone13"> </td>
</tr>

<tr border=1 id="r14">
<td> <input type="text" id ="sno14"> </td>
<td> <input type="text" id ="fname14"> </td>
<td> <input type="text" id ="lname14"> </td>
<td> <input type="text" id ="email14"> </td>
<td> <input type="text" id ="phone14"> </td>
</tr>

<tr border=1 id="r15">
<td> <input type="text" id ="sno15"> </td>
<td> <input type="text" id ="fname15"> </td>
<td> <input type="text" id ="lname15"> </td>
<td> <input type="text" id ="email15"> </td>
<td> <input type="text" id ="phone15"> </td>
</tr>

</table>

<button onClick ="getFiveRows()"> Submit </button>
<!--<input type = "submit" value="submit" onClick="getRows()"> -->
<input type = "button" value="previous" disabled>
<input type = "button" value="next" >

<!-- JavaScript Function to load only first 5 records from table of rows-->

<script language="JavaScript">
	
	function getFiveRows(){
		let tb1 = document.getElementById("table1")
		if(tb1.row.length != null){
		let rowsLength = tb1.row.length;
		for(let i =1; i<=rowsLength ;i++){
		
		if(i<6){
			let row = document.getElementById("r"+i);
				row.style.display = "";
		}
		
		if(i>5){
			let row = document.getElementById("r"+i);
				row.style.display = 'none';
		}
		
		}
	}
		}


</script>
	  
</body>
</html>
