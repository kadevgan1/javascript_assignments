<!DOCTYPE html>
<html>
<body id="bodyid" onload = "homePageLoad()">
 
<table border="1" id="table1" >
<tr>
<th>S.NO</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email Address</th>
<th>Phone Number</th>
</tr>

<tr border=1 id="tr1">
<td> 1</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr2">
<td> 2</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr3">
<td> 3</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr4">
<td> 4</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr5">
<td> 5</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>


<tr border=1 id="tr6">
<td> 6</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr7">
<td> 7</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr8">
<td> 8</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr9">
<td> 9</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr10">
<td> 10</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr11">
<td> 11</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr12">
<td> 12</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr13">
<td> 13</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr14">
<td> 14</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

<tr border=1 id="tr15">
<td> 15</td>
<td> Dev </td>
<td> Kanikaram </td>
<td> Dev@gmail.com</td>
<td> 1234567890</td>
</tr>

</table>

<!--<button onClick ="getFiveRows()"> Submit </button> -->


<input type = "button" name="previous" value="Previous" id="btnprevious" onClick="previousbtnclick()">
<input type = "button" name="next" value="Next" id="btnnext" onClick="nextbtnclick()">

<select id="dropdownid" onchange="dropDownclick()">
 <option value="5">5 </option>
 <option value="10">10</option>
 <option value="15">15</option>
</select>

<!-- JavaScript Function to load only first 5 records from table of rows-->

<script language="JavaScript">

//To Load the Home page with Previous button disabled..
function homePageLoad(){
			let row1 = document.getElementById("tr1");
				row1.style.display = "";
			let row2 = document.getElementById("tr2");
				row2.style.display = "";
			let row3 = document.getElementById("tr3");
				row3.style.display = "";
			let row4 = document.getElementById("tr4");
				row4.style.display = "";
			let row5 = document.getElementById("tr5");
				row5.style.display = "";
			let row6 = document.getElementById("tr6");
				row6.style.display = 'none';
			let row7 = document.getElementById("tr7");
				row7.style.display = 'none';
			let row8 = document.getElementById("tr8");
				row8.style.display = 'none';
			let row9 = document.getElementById("tr9");
				row9.style.display = 'none';
			let row10 = document.getElementById("tr10");
				row10.style.display = 'none';
			let row11 = document.getElementById("tr11");
				row11.style.display = 'none';
			let row12 = document.getElementById("tr12");
				row12.style.display = 'none';
			let row13 = document.getElementById("tr13");
				row13.style.display = 'none';
			let row14 = document.getElementById("tr14");
				row14.style.display = 'none';
			let row15 = document.getElementById("tr15");
				row15.style.display = 'none';
				
				document.getElementById("btnprevious").disabled = true;
				document.getElementById("btnnext").disabled = false;
				
}
	
	// To load the records from 6 to 10 with both buttons enabled
		function getSecondFiveRows(){
		
			let row1 = document.getElementById("1");
				row1.style.display = 'none';
			let row2 = document.getElementById("2");
				row2.style.display = 'none';
			let row3 = document.getElementById("3");
				row3.style.display = 'none';
			let row4 = document.getElementById("4");
				row4.style.display = 'none';
			let row5 = document.getElementById("5");
				row5.style.display = 'none';
			
			let row6 = document.getElementById("6");
				row6.style.display = "";
			let row7 = document.getElementById("7");
				row7.style.display = "";
			let row8 = document.getElementById("8");
				row8.style.display = "";
			let row9 = document.getElementById("9");
				row9.style.display = "";
			let row10 = document.getElementById("10");
				row10.style.display = "";
			let row11 = document.getElementById("11");
				row11.style.display = 'none';
			let row12 = document.getElementById("12");
				row12.style.display = 'none';
			let row13 = document.getElementById("13");
				row13.style.display = 'none';
			let row14 = document.getElementById("14");
				row14.style.display = 'none';
			let row15 = document.getElementById("15");
				row15.style.display = 'none';
				
				document.getElementById("btnprevious").disabled = false;
				document.getElementById("btnnext").disabled = false;
		}
		
		
		// To load 11 to 15 with next button disabled
		function getThirdFiveRows(){
		
			let row1 = document.getElementById("1");
				row1.style.display = 'none';
			let row2 = document.getElementById("2");
				row2.style.display = 'none';
			let row3 = document.getElementById("3");
				row3.style.display = 'none';
			let row4 = document.getElementById("4");
				row4.style.display = 'none';
			let row5 = document.getElementById("5");
				row5.style.display = 'none';
			
			let row6 = document.getElementById("6");
				row6.style.display = 'none';
			let row7 = document.getElementById("7");
				row7.style.display = 'none';
			let row8 = document.getElementById("8");
				row8.style.display = 'none';
			let row9 = document.getElementById("9");
				row9.style.display = 'none';
			let row10 = document.getElementById("10");
				row10.style.display = 'none';
			let row11 = document.getElementById("11");
				row11.style.display = "";
			let row12 = document.getElementById("12");
				row12.style.display = "";
			let row13 = document.getElementById("13");
				row13.style.display = "";
			let row14 = document.getElementById("14");
				row14.style.display = "";
			let row15 = document.getElementById("15");
				row15.style.display = "";
				
				document.getElementById("btnnext").disabled = true;
				document.getElementById("btnprevious").disabled = false;
		}
		
		
	function loadTenRecords(){
	
	let row1 = document.getElementById("tr1");
				row1.style.display = "";
			let row2 = document.getElementById("tr2");
				row2.style.display = "";
			let row3 = document.getElementById("tr3");
				row3.style.display = "";
			let row4 = document.getElementById("tr4");
				row4.style.display = "";
			let row5 = document.getElementById("tr5");
				row5.style.display = "";
			let row6 = document.getElementById("tr6");
				row6.style.display = "";
			let row7 = document.getElementById("tr7");
				row7.style.display = "";
			let row8 = document.getElementById("tr8");
				row8.style.display = "";
			let row9 = document.getElementById("tr9");
				row9.style.display = "";
			let row10 = document.getElementById("tr10");
				row10.style.display = "";
			let row11 = document.getElementById("tr11");
				row11.style.display = "none";
			let row12 = document.getElementById("tr12");
				row12.style.display = "none";
			let row13 = document.getElementById("tr13");
				row13.style.display = "none";
			let row14 = document.getElementById("tr14");
				row14.style.display = "none";
			let row15 = document.getElementById("tr15");
				row15.style.display = "none";
				
		document.getElementById("btnprevious").disabled = true;
		document.getElementById("btnnext").disabled = false;
				
	}
	
	function loadAllRecords(){
	
	let row1 = document.getElementById("tr1");
				row1.style.display = "";
			let row2 = document.getElementById("tr2");
				row2.style.display = "";
			let row3 = document.getElementById("tr3");
				row3.style.display = "";
			let row4 = document.getElementById("tr4");
				row4.style.display = "";
			let row5 = document.getElementById("tr5");
				row5.style.display = "";
			let row6 = document.getElementById("tr6");
				row6.style.display = "";
			let row7 = document.getElementById("tr7");
				row7.style.display = "";
			let row8 = document.getElementById("tr8");
				row8.style.display = "";
			let row9 = document.getElementById("tr9");
				row9.style.display = "";
			let row10 = document.getElementById("tr10");
				row10.style.display = "";
			let row11 = document.getElementById("tr11");
				row11.style.display = "";
			let row12 = document.getElementById("tr12");
				row12.style.display = "";
			let row13 = document.getElementById("tr13");
				row13.style.display = "";
			let row14 = document.getElementById("tr14");
				row14.style.display = "";
			let row15 = document.getElementById("tr15");
				row15.style.display = "";
				
				document.getElementById("btnprevious").disabled = true;
				document.getElementById("btnnext").disabled = true;
	}
		
		
	function dropDownclick(){
	let x = document.getElementById("dropdownid").value;
	if(x==="5")
	{
		 homePageLoad();
	}
	if(x==="10"){
	loadTenRecords();
	}
	if(x==="15")
	{
		 loadAllRecords();
	}
	}
	

</script>
	  
</body>
</html>
