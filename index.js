console.log('Project 5');
const insert=document.getElementById("insert");
window.addEventListener("keydown",(e)=>{           //here we add event lister to the entire windows
  insert.innerHTML=`<div class=key >
  
  <table>
  <tr>
    <th>key</th>                                               
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key=== " " ? "space" : e.key}  </td>                                           
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>`
 
})

//here at the table data e.key is used to give the name of key that is pressed
//and e.keycode isused to get the code
//e.code is used to get thew code
//note if we press the spacebar we dget empty in the key value blank space 
 // so for that we say if e.key ==== "  " then print space and otherwise give the natural output of key that is preseed
 