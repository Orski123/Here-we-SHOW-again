const sampleArray = 
[469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


let kataheading = document.createElement('h1')
let kata_text = document.createTextNode("Here we SHOW again ") 
kataheading.appendChild(kata_text)
document.body.append(kataheading)

//----- kata1 - Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)

let kata1_heading = document.createElement('h3')
let kata1_text = document.createTextNode("Kata 1: ") 
kata1_heading.appendChild(kata1_text) 
document.body.append(kata1_heading)
let kataOne=[]
 for(let i= 1;i<=20;i++)
    {  
         kataOne.push(i)    
    }  
    document.body.append(kataOne)

//----- kata 2 -Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)

let kata2_heading = document.createElement('h3')
let kata2_text = document.createTextNode("Kata 2: ") 
kata2_heading.appendChild(kata2_text) 
document.body.append(kata2_heading)
let kataTwo=[]
 for(let i= 2;i<=20;i+=2)
    {  
         kataTwo.push(i)    
    }  
    document.body.append(kataTwo)
 
//----- kata 3 - Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)

let kata3_heading = document.createElement('h3')
let kata3_text = document.createTextNode("Kata 3: ") 
kata3_heading.appendChild(kata3_text) 
document.body.append(kata3_heading)
let kataThree=[]
 for(let i= 1;i<20;i+=2)
    {  
         kataThree.push(i)    
    }  
    document.body.append(kataThree)

//----- kata 4 - Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)

let kata4_heading = document.createElement('h3')
let kata4_text = document.createTextNode("Kata 4: ") 
kata4_heading.appendChild(kata4_text) 
document.body.append(kata4_heading)
    let kata4=[]
    for(let i= 5;i<=100;i+=5)
        {  
            kata4.push(i)    
        }  
    document.body.append(kata4)

//----- kata 5 -Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)

let kata5_heading = document.createElement('h3')
let kata5_text = document.createTextNode("Kata 5: ") 
kata5_heading.appendChild(kata5_text) 
document.body.append(kata5_heading)
let kata5=[]
 for(let i= 1;i<=10; i+=1)
    {  
        kata5.push(i*i)    
    }  
 document.body.append(kata5)

    //----- kata 6 -Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)

let kata6_heading = document.createElement('h3')
let kata6_text = document.createTextNode("Kata 6: ") 
kata6_heading.appendChild(kata6_text) 
document.body.append(kata6_heading)
let kata6=[]
 for(let i= 20;i>0; i--)
    {  
        kata6.push(i)    
    }  
 document.body.append(kata6)

 //----- kata 7 -Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)

let kata7_heading = document.createElement('h3')
let kata7_text = document.createTextNode("Kata 7: ") 
kata7_heading.appendChild(kata7_text) 
document.body.append(kata7_heading)
let kata7=[]
 for(let i= 20;i>0; i-=2)
    {  
        kata7.push(i)    
    }  
 document.body.append(kata7)

 //----- kata 8 -Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)

 let kata8_heading = document.createElement('h3')
 let kata8_text = document.createTextNode("Kata 8: ") 
 kata8_heading.appendChild(kata8_text) 
 document.body.append(kata8_heading)
 let kata8=[]
  for(let i= 19;i>0; i-=2)
     {  
         kata8.push(i)    
     }  
  document.body.append(kata8)

  //----- kata 9 -Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)

 let kata9_heading = document.createElement('h3')
 let kata9_text = document.createTextNode("Kata 9: ") 
 kata9_heading.appendChild(kata9_text) 
 document.body.append(kata9_heading)
 let kata9=[]
  for(let i= 100;i>0; i-=5)
     {  
         kata9.push(i)    
     }  
  document.body.append(kata9)

 //----- kata 10 -Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)

let kata10_heading = document.createElement('h3')
let kata10_text = document.createTextNode("Kata 10: ") 
kata10_heading.appendChild(kata10_text) 
document.body.append(kata10_heading)
let kata10=[]
 for(let i= 10;i>0; i--)
    {  
        kata10.push(i*i)    
    }  
 document.body.append(kata10)

 //----- kata 11 -Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

 let kata11_heading = document.createElement('h3')
let kata11_text = document.createTextNode("Kata 11: ") 
kata11_heading.appendChild(kata11_text) 

document.body.append(kata11_heading)

document.body.append(sampleArray)

 //----- kata 12 -Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

let kata12_heading = document.createElement('h3')
let kata12_text = document.createTextNode("Kata 12: ") 
kata12_heading.appendChild(kata12_text) 
document.body.append(kata12_heading)
let kata12=[]
sampleArray.forEach(function(i)
 {
    if (i%2 == 0)
     kata12.push(i);
 })
document.body.append(kata12)

//----- kata 13 -Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

let kata13_heading = document.createElement('h3')
let kata13_text = document.createTextNode("Kata 13: ") 
kata13_heading.appendChild(kata13_text) 
document.body.append(kata13_heading)
let kata13=[]
sampleArray.forEach(function(i)
 {
    if (i%2 != 0)
     kata13.push(i);
 })
document.body.append(kata13)


//----- kata 14 -Display the square of each element in sampleArray. (219961, 570025, …, 222784)

let kata14_heading = document.createElement('h3')
let kata14_text = document.createTextNode("Kata 14: ") 
kata14_heading.appendChild(kata14_text) 
document.body.append(kata14_heading)
let kata14=[]
sampleArray.forEach(function(i)
 {
         kata14.push(i*i);
})
document.body.append(kata14)

//----- kata 15 -Display the sum of all the numbers from 1 to 20.

let kata15_heading = document.createElement('h3')
let kata15_text = document.createTextNode("Kata 15: ") 
kata15_heading.appendChild(kata15_text) 
document.body.append(kata15_heading)
let kata15 =0
 for(let i= 1; i<=20; i++)
    {  
        kata15 = kata15+i
    }   

     document.body.append(kata15)


//----- kata 16 -Display the sum of all the elements in sampleArray.

let kata16_heading = document.createElement('h3')
let kata16_text = document.createTextNode("Kata 16: ") 
kata16_heading.appendChild(kata16_text) 
document.body.append(kata16_heading)
let kata16=0
sampleArray.forEach(function(i)
    {
        kata16 = kata16 + i
    })
document.body.append(kata16)

//----- kata 17 -Display the smallest element in sampleArray.

let kata17_heading = document.createElement('h3')
let kata17_text = document.createTextNode("Kata 17: ") 
kata17_heading.appendChild(kata17_text) 
document.body.append(kata17_heading)

let  kata17 = Math.min(...sampleArray);

document.body.append(kata17)

//----- kata 18 -Display the largest element in sampleArray.

let kata18_heading = document.createElement('h3')
let kata18_text = document.createTextNode("Kata 18: ") 
kata18_heading.appendChild(kata18_text) 
document.body.append(kata18_heading)

let  kata18 = Math.max(...sampleArray);

document.body.append(kata18)



//----- 19 -Display 20 solid gray rectangles, each 20px high and 100px wide.
let no19_heading = document.createElement('h3')
let no19_text = document.createTextNode(" 19: ") 
no19_heading.appendChild(no19_text) 
document.body.append(no19_heading)
let div = document.createElement('div')//create div
div.style.width = "100px";
div.style.height = "20px";
div.style.background = "grey";

for (let i=0; i<20; i++)
   {
    document.body.append(div)
    }


