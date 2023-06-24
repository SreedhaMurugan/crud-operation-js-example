var array = [
    
];
const parentelement = document.getElementById("content-container");
const ul = document.getElementById("unlist");
const buttn = document.getElementById("but");
console.log(array)

buttn.addEventListener(("click"),()=>{ add()})
function add(){
    var name =document.getElementById("product").value
    var designation =document.getElementById("cost").value
    array.push({name,designation})
    alert(JSON.stringify(array))
    li=document.createElement("li");
    array.forEach((element)=>{
       
         li.textContent = element.name;
        ul.appendChild(li);
        parentelement.appendChild(ul);
    })
    
 }
// const tbo = document.getElementById("tbo")
// var arr =[];



// function add(){
//                var product = document.getElementById("product").value
//                var cost = document.getElementById("cost").value
               
               
               
//                arr.push({product,cost})
//             //    alert(JSON.stringify(arr))
//             //    console.log(arr)
          
//                arr.forEach(element => {
//                 const row = document.createElement('tr');
    
            
//                 row.innerHTML = `
//                   <td>${element.product}</td>
//                   <td>${element.cost}</td>
                  
//                 `;
                
//                 // Add row 
//                 tbo.appendChild(row);
//       });
              
// }

// function search(arr){
//     var search = document.getElementById("search").value
//     return arr.filter(arr.product.toLowerCase().includes(search.toLowerCase()));

// }