
    // Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

import { findByLabelText } from "@testing-library/react";

    
    let getEven = ()=>
    {
        const Arr=[1,2,3,4,5,6,7,8,9,10];
        for(let i=0; i<=Arr.length; i++)
        {
            if(Arr[i]%2==0)
            {
                console.log(Arr[i]);
            }
        }
    }
    getEven();


    // Find the maximum consecutive 1's in an array of 0's and 1's.
    // Example:
    // a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
    // b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

     const getConsecutive = () =>
    {
        const arr=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
        // const arr1=[1,0,0,0,0,1,0,0,0,1];
        let count=0;
        let max=0;

        for(let i=0; i<arr.length; i++)
        {
            if (arr[i]==0)
            {
               count=0;
            }   
            else
            {
               count++;
               max=count>max?count:max;
            }   
        }
        console.log(max);
    }
     getConsecutive();

// Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);


      const getDuplicate = () =>
       {
        var array =[1,2,3,1];
        var array=[]
        var arraynew=[];
        //loop data
        for(var m=0;m<=101;m++)
        {
            if(m==7)
            {
                array.push(m)
            }
            array.push(m)
        }
        for(var i =0;i<array.length;i++)
        {
            var check1 = array.includes(array[i])
            var value = array[i];
            delete array[i]
            var check2 = array.includes(value)
            if(check1&&check2)
            {
                arraynew.push(value)
            }
        }
        console.log(arraynew)
      }   
     getDuplicate();

//     Assume we have a form e.g
// <form>
//    <input type=”text” name=”firstname” />
//    <input type=”check” name=”checkme” />
//    <input type=”submit” value=”submit”
// </form>
// For the above form, write validation in javascript so that if the firstname is empty or if checkme is not checked, it will not allow the form to submit.

    const validateform =()=>
    {
        var x=document.forms["myForm"]
        ["firstname"].value;
        if(x=="")
        {
            alert("Name must be filled. otherwise you can't submit theform");
            return false;
        }
        var y=document.forms["myform"]
        ["checkme"].value;
        if(!this.form.checkbox.checked)
        {
            alert("checkbox must bechecked");
            return false;
        }
    }
    

//     Support you have a html tag like this 
// <div>Javascript Developer</div>
// Write a small html code to add a class on this div. Add a rounded border box on this div and also there should be a gap of 5px between the text and the rounded box and the text. 


<div class="head">Javascript Developer</div>    //HTML code
//CSS
// .head{
//       border-radius:25px;
//       padding:5px;

// }


// Write css to center a box on the page. Let’s see we have a blank empty page and we want to create a box of size 100px x 100px 
// and it should be the center of the page always. How will you do it?

//  <div class="box">This is a Box</div>    //HTML code
// CSS
// .box{
//     border:1px solid green;
//     margin:auto;
//     vertical-align:middle;
//     // display:flex;
//     // justify-content:centre;
//     height:100px;
//     width:100px;

// }


// Let’s see we an api url www.example.com/api/get/1 
// Write a sample code to call this url via ajax and print its response



		let fetchBtn = document.getElementById("fetchBtn"); 
		fetchBtn.addEventListener("click", buttonclickhandler); 
		function buttonclickhandler() { 
			const xhr = new XMLHttpRequest(); 
			xhr.open("GET", "www.example.com/api/get/1", true); 
			xhr.onload = function () { 
				if (this.status === 200) { 

					// Changing string data into JSON Object 
					obj = JSON.parse(this.responseText); 

					// Getting the ul element 
					let list = document.getElementById("list"); 
					str = "" 
					for (key in obj.data) { 
						str += 
						`<li>${obj.data[key].employee_name}</li>`; 
					} 
					list.innerHTML = str; 
				} 
				else { 
					console.log("File not found"); 
				} 
			} 
			xhr.send(); 
		} 


        // Assume there is a object of this format 
        // var obj = {
        //  “id” : 4, “name” : “abc”,
        //  “id” : 10, “name” : “ab2”,
        //  “id” : 5, “name” : “abc3”,
        //  “id” : 6, “name” : “abc5”
        // }
        // write a code to sort the object by id.

//     var obj = 
//         {
//             “id” : 10, 
//             “name” : “ab2”
//         },
//         {
//             “id” : 5, 
//             “name” : “abc3”
//         },
//         {
//             “id” : 6,
//             “name” : “abc5”
//         },
//         {    
//             “id” : 4, 
//             “name” : “abc”
//         }
//     const getSort=()=>
//     {
//         obj.sort(function(a,b)
//         {
//             return a.id - b.id;
//         });
//     }
// getSort();