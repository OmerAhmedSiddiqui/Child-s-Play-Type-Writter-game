



let popUp2 = document.querySelector("#popUp2")
let visible = document.querySelector("#visible");
visible.style.visibility = "hidden"
popUp2.style.visibility = "hidden"

let levelUp = document.querySelector("#levelUp")
let levelUpsecond = document.querySelector("#levelUp2")
levelUp.style.visibility = "hidden"
levelUpsecond.style.visibility = "hidden"


let bodypick = document.querySelector("#bodypick");
let logo = document.querySelector("#logo");

let navbar = document.querySelector("#navbar");

$('[type="checkbox"]').click(function (e) {
   var isChecked = $(this).is(":checked");
   if (isChecked === true) {
      bodypick.style.backgroundColor = "black"
      logo.src = "imges/R-removebg-preview (1).png"
      navbar.classList.add("navbar-dark")

   }
   if (isChecked === false) {
      bodypick.style.backgroundColor = "#99edc3"
      logo.src = "imges/download__1_-removebg-preview.png"
      navbar.classList.remove("navbar-dark")

   }

});

let currentValue = "beginner";
let finishTime;

function handleClick(myRadio) {
   currentValue = myRadio.value;

   console.log(currentValue)

}
let popUp = document.querySelector("#popUp")
let allpress = document.querySelector("#all")
let correctpress = document.querySelector("#correct")
let wrongpress = document.querySelector("#wrong")


let startvar = document.querySelector("#Start")
let first = document.querySelector("#first")
let second = document.querySelector("#second")
let third = document.querySelector("#third")
let frth = document.querySelector("#frth")
let fifth = document.querySelector("#fifth")
let sixth = document.querySelector("#sixth")
let svth = document.querySelector("#svth")
let eigth = document.querySelector("#eigth")
let ninth = document.querySelector("#ninth")
let q = document.querySelector("#q")
let w = document.querySelector("#w")
let e = document.querySelector("#e")
let r = document.querySelector("#r")
let t = document.querySelector("#t")
let y = document.querySelector("#y")
let u = document.querySelector("#u")
let i = document.querySelector("#i")
let o = document.querySelector("#o")
let p = document.querySelector("#p")
let a = document.querySelector("#a")
let s = document.querySelector("#s")
let f = document.querySelector("#f")
let g = document.querySelector("#g")
let h = document.querySelector("#h")
let j = document.querySelector("#j")
let k = document.querySelector("#k")
let l = document.querySelector("#l")
let z = document.querySelector("#z")
let x = document.querySelector("#x")
let c = document.querySelector("#c")
let v = document.querySelector("#v")
let b = document.querySelector("#b")
let n = document.querySelector("#n")
let m = document.querySelector("#m")



let alphabets = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

var counter = 0;


let ran1;
let ran2;
let ran3;
let ran4;
let ran5;
let ran6;
let ran7;
let ran8;
let ran9;

let popAlphabets = []
let finishCalled = false;
function levelUpFunc() {
   
   levelUp.style.visibility = "hidden"
   levelUpsecond.style.visibility = "hidden"
}
function start() {

   setTimeout(levelUpFunc, 2000)

   ran1 = Math.floor(Math.random() * 26);
   ran2 = Math.floor(Math.random() * 26);
   ran3 = Math.floor(Math.random() * 26);
   ran4 = Math.floor(Math.random() * 26);
   ran5 = Math.floor(Math.random() * 26);
   ran6 = Math.floor(Math.random() * 26);
   ran7 = Math.floor(Math.random() * 26);
   ran8 = Math.floor(Math.random() * 26);
   ran9 = Math.floor(Math.random() * 26);







   first.innerHTML = alphabets[ran1];
   second.innerHTML = alphabets[ran2]
   third.innerHTML = alphabets[ran3]
   frth.innerHTML = alphabets[ran4]
   fifth.innerHTML = alphabets[ran5]
   sixth.innerHTML = alphabets[ran6]
   svth.innerHTML = alphabets[ran7]
   eigth.innerHTML = alphabets[ran8]
   ninth.innerHTML = alphabets[ran9]
   popAlphabets.push(alphabets[ran1], alphabets[ran2], alphabets[ran3], alphabets[ran4], alphabets[ran5], alphabets[ran6], alphabets[ran7], alphabets[ran8], alphabets[ran9])

   visible.style.visibility = "visible"
   startvar.style.visibility = "hidden"
   popUp.style.visibility = "hidden"
   popUp2.style.visibility = "visible"


   first.id = currentValue
   second.id = currentValue
   third.id = currentValue
   frth.id = currentValue
   fifth.id = currentValue
   sixth.id = currentValue
   svth.id = currentValue
   eigth.id = currentValue
   ninth.id = currentValue

   q.style.backgroundColor = "whitesmoke"
   w.style.backgroundColor = "whitesmoke"
   e.style.backgroundColor = "whitesmoke"
   r.style.backgroundColor = "whitesmoke"
   t.style.backgroundColor = "whitesmoke"
   y.style.backgroundColor = "whitesmoke"
   u.style.backgroundColor = "whitesmoke"
   i.style.backgroundColor = "whitesmoke"
   o.style.backgroundColor = "whitesmoke"
   p.style.backgroundColor = "whitesmoke"
   a.style.backgroundColor = "whitesmoke"
   s.style.backgroundColor = "whitesmoke"
   d.style.backgroundColor = "whitesmoke"
   f.style.backgroundColor = "whitesmoke"
   g.style.backgroundColor = "whitesmoke"
   h.style.backgroundColor = "whitesmoke"
   j.style.backgroundColor = "whitesmoke"
   k.style.backgroundColor = "whitesmoke"
   l.style.backgroundColor = "whitesmoke"
   z.style.backgroundColor = "whitesmoke"
   x.style.backgroundColor = "whitesmoke"
   c.style.backgroundColor = "whitesmoke"
   v.style.backgroundColor = "whitesmoke"
   b.style.backgroundColor = "whitesmoke"
   n.style.backgroundColor = "whitesmoke"
   m.style.backgroundColor = "whitesmoke"


   if (alphabets[ran1] === "Q" || alphabets[ran2] === "Q" || alphabets[ran3] === "Q" || alphabets[ran4] === "Q" || alphabets[ran5] === "Q" || alphabets[ran6] === "Q" || alphabets[ran7] === "Q" || alphabets[ran8] === "Q" || alphabets[ran9] === "Q") {
      q.style.backgroundColor = "#99edc3"
   }
   if (alphabets[ran1] === "W" || alphabets[ran2] === "W" || alphabets[ran3] === "W" || alphabets[ran4] === "W" || alphabets[ran5] === "W" || alphabets[ran6] === "W" || alphabets[ran7] === "W" || alphabets[ran8] === "W" || alphabets[ran9] === "W") {
      w.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "E" || alphabets[ran2] === "E" || alphabets[ran3] === "E" || alphabets[ran4] === "E" || alphabets[ran5] === "E" || alphabets[ran6] === "E" || alphabets[ran7] === "E" || alphabets[ran8] === "E" || alphabets[ran9] === "E") {
      e.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "R" || alphabets[ran2] === "R" || alphabets[ran3] === "R" || alphabets[ran4] === "R" || alphabets[ran5] === "R" || alphabets[ran6] === "R" || alphabets[ran7] === "R" || alphabets[ran8] === "R" || alphabets[ran9] === "R") {
      r.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "T" || alphabets[ran2] === "T" || alphabets[ran3] === "T" || alphabets[ran4] === "T" || alphabets[ran5] === "T" || alphabets[ran6] === "T" || alphabets[ran7] === "T" || alphabets[ran8] === "T" || alphabets[ran9] === "T") {
      t.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "Y" || alphabets[ran2] === "Y" || alphabets[ran3] === "Y" || alphabets[ran4] === "Y" || alphabets[ran5] === "Y" || alphabets[ran6] === "Y" || alphabets[ran7] === "Y" || alphabets[ran8] === "Y" || alphabets[ran9] === "Y") {
      y.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "U" || alphabets[ran2] === "U" || alphabets[ran3] === "U" || alphabets[ran4] === "U" || alphabets[ran5] === "U" || alphabets[ran6] === "U" || alphabets[ran7] === "U" || alphabets[ran8] === "U" || alphabets[ran9] === "U") {
      u.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "I" || alphabets[ran2] === "I" || alphabets[ran3] === "I" || alphabets[ran4] === "I" || alphabets[ran5] === "I" || alphabets[ran6] === "I" || alphabets[ran7] === "I" || alphabets[ran8] === "I" || alphabets[ran9] === "I") {
      i.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "O" || alphabets[ran2] === "O" || alphabets[ran3] === "O" || alphabets[ran4] === "O" || alphabets[ran5] === "O" || alphabets[ran6] === "O" || alphabets[ran7] === "O" || alphabets[ran8] === "O" || alphabets[ran9] === "O") {
      o.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "P" || alphabets[ran2] === "P" || alphabets[ran3] === "P" || alphabets[ran4] === "P" || alphabets[ran5] === "P" || alphabets[ran6] === "P" || alphabets[ran7] === "P" || alphabets[ran8] === "P" || alphabets[ran9] === "P") {
      p.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "A" || alphabets[ran2] === "A" || alphabets[ran3] === "A" || alphabets[ran4] === "A" || alphabets[ran5] === "A" || alphabets[ran6] === "A" || alphabets[ran7] === "A" || alphabets[ran8] === "A" || alphabets[ran9] === "A") {
      a.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "S" || alphabets[ran2] === "S" || alphabets[ran3] === "S" || alphabets[ran4] === "S" || alphabets[ran5] === "S" || alphabets[ran6] === "S" || alphabets[ran7] === "S" || alphabets[ran8] === "S" || alphabets[ran9] === "S") {
      s.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "D" || alphabets[ran2] === "D" || alphabets[ran3] === "D" || alphabets[ran4] === "D" || alphabets[ran5] === "D" || alphabets[ran6] === "D" || alphabets[ran7] === "D" || alphabets[ran8] === "D" || alphabets[ran9] === "D") {
      d.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "F" || alphabets[ran2] === "F" || alphabets[ran3] === "F" || alphabets[ran4] === "F" || alphabets[ran5] === "F" || alphabets[ran6] === "F" || alphabets[ran7] === "F" || alphabets[ran8] === "F" || alphabets[ran9] === "F") {
      f.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "G" || alphabets[ran2] === "G" || alphabets[ran3] === "G" || alphabets[ran4] === "G" || alphabets[ran5] === "G" || alphabets[ran6] === "G" || alphabets[ran7] === "G" || alphabets[ran8] === "G" || alphabets[ran9] === "G") {
      g.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "H" || alphabets[ran2] === "H" || alphabets[ran3] === "H" || alphabets[ran4] === "H" || alphabets[ran5] === "H" || alphabets[ran6] === "H" || alphabets[ran7] === "H" || alphabets[ran8] === "H" || alphabets[ran9] === "H") {
      h.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "J" || alphabets[ran2] === "J" || alphabets[ran3] === "J" || alphabets[ran4] === "J" || alphabets[ran5] === "J" || alphabets[ran6] === "J" || alphabets[ran7] === "J" || alphabets[ran8] === "J" || alphabets[ran9] === "J") {
      j.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "K" || alphabets[ran2] === "K" || alphabets[ran3] === "K" || alphabets[ran4] === "K" || alphabets[ran5] === "K" || alphabets[ran6] === "K" || alphabets[ran7] === "K" || alphabets[ran8] === "K" || alphabets[ran9] === "K") {
      k.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "L" || alphabets[ran2] === "L" || alphabets[ran3] === "L" || alphabets[ran4] === "L" || alphabets[ran5] === "L" || alphabets[ran6] === "L" || alphabets[ran7] === "L" || alphabets[ran8] === "L" || alphabets[ran9] === "L") {
      l.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "Z" || alphabets[ran2] === "Z" || alphabets[ran3] === "Z" || alphabets[ran4] === "Z" || alphabets[ran5] === "Z" || alphabets[ran6] === "Z" || alphabets[ran7] === "Z" || alphabets[ran8] === "Z" || alphabets[ran9] === "Z") {
      z.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "X" || alphabets[ran2] === "X" || alphabets[ran3] === "X" || alphabets[ran4] === "X" || alphabets[ran5] === "X" || alphabets[ran6] === "X" || alphabets[ran7] === "X" || alphabets[ran8] === "X" || alphabets[ran9] === "X") {
      x.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "C" || alphabets[ran2] === "C" || alphabets[ran3] === "C" || alphabets[ran4] === "C" || alphabets[ran5] === "C" || alphabets[ran6] === "C" || alphabets[ran7] === "C" || alphabets[ran8] === "C" || alphabets[ran9] === "C") {
      c.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "V" || alphabets[ran2] === "V" || alphabets[ran3] === "V" || alphabets[ran4] === "V" || alphabets[ran5] === "V" || alphabets[ran6] === "V" || alphabets[ran7] === "V" || alphabets[ran8] === "V" || alphabets[ran9] === "V") {
      v.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "B" || alphabets[ran2] === "B" || alphabets[ran3] === "B" || alphabets[ran4] === "B" || alphabets[ran5] === "B" || alphabets[ran6] === "B" || alphabets[ran7] === "B" || alphabets[ran8] === "B" || alphabets[ran9] === "B") {
      b.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "N" || alphabets[ran2] === "N" || alphabets[ran3] === "N" || alphabets[ran4] === "N" || alphabets[ran5] === "N" || alphabets[ran6] === "N" || alphabets[ran7] === "N" || alphabets[ran8] === "N" || alphabets[ran9] === "N") {
      n.style.backgroundColor = "#99edc3"
   } if (alphabets[ran1] === "M" || alphabets[ran2] === "M" || alphabets[ran3] === "M" || alphabets[ran4] === "M" || alphabets[ran5] === "M" || alphabets[ran6] === "M" || alphabets[ran7] === "M" || alphabets[ran8] === "M" || alphabets[ran9] === "M") {
      m.style.backgroundColor = "#99edc3"
   }


   // if (finishCalled === false) {
   //    if (currentValue === "beginner") {
   //       finishTime = 19500
   //    }
   //    else if (currentValue === "medium") {
   //       finishTime = 14800
   //    } if (currentValue === "expert") {
   //       finishTime = 8000
   //    }
   //    setTimeout(
   //       finish,
   //       finishTime
   //    )
   //    finishTime = true

   // }
   // if(first.style.marginTop === "300px"){
   //    finish()
   // }

   setTimeout(
      levelUp, 1000
   )
}
let inputKey;

let keys = document.onkeypress = function (e) {
   inputKey = e.key
   inputKey = inputKey.toUpperCase()
   ballons()

   // console.log(all)
   // if (all === 12 && finishCalled === false) {
   //    finish()
   //    popAlphabets = []
   //    finishTime = true
   // }
   allpress.innerHTML = `All : ${all}`;
   correctpress.innerHTML = `Correct : ${correct}`;
   wrongpress.innerHTML = `Wrong : ${wrong}`;


   // for (var i = 0; i < popAlphabets.length; i++) {
   //    if (inputKey != popAlphabets[i]) {
   //       q.style.backgroundColor = "red";
   //       w.style.backgroundColor = "red";
   //       // e.style.backgroundColor = "red"
   //       r.style.backgroundColor = "red"
   //       t.style.backgroundColor = "red"
   //       y.style.backgroundColor = "red"
   //       u.style.backgroundColor = "red"
   //       // i.style.backgroundColor = "red"
   //       o.style.backgroundColor = "red"
   //       p.style.backgroundColor = "red"
   //       a.style.backgroundColor = "red"
   //       s.style.backgroundColor = "red"
   //       d.style.backgroundColor = "red"
   //       f.style.backgroundColor = "red"
   //       g.style.backgroundColor = "red"
   //       h.style.backgroundColor = "red"
   //       j.style.backgroundColor = "red"
   //       k.style.backgroundColor = "red"
   //       l.style.backgroundColor = "red"
   //       z.style.backgroundColor = "red"
   //       x.style.backgroundColor = "red"
   //       c.style.backgroundColor = "red"
   //       v.style.backgroundColor = "red"
   //       b.style.backgroundColor = "red"
   //       n.style.backgroundColor = "red"
   //       m.style.backgroundColor = "red"

   //    }
   // }








};


let all = 0;
let correct = 0;
let wrong = 0;

async function ballons() {
   for (var i = 0; i < popAlphabets.length; i++) {
      if (popAlphabets[i] === inputKey) {
         if (first.innerHTML === inputKey) {
            first.style.visibility = "hidden"
            // correct = correct + 1

         }
         if (second.innerHTML === inputKey) {
            second.style.visibility = "hidden"

            // second.id = "second"
            // correct = correct + 1



         } if (third.innerHTML === inputKey) {
            third.style.visibility = "hidden"

            // third.id = "third"
            // correct = correct + 1



         } if (frth.innerHTML === inputKey) {
            frth.style.visibility = "hidden"

            // frth.id = "frth"
            // correct = correct + 1



         } if (fifth.innerHTML === inputKey) {
            fifth.style.visibility = "hidden"

            // fifth.id = "fifth"
            // correct = correct + 1


         } if (sixth.innerHTML === inputKey) {
            sixth.style.visibility = "hidden"

            // sixth.id = "sixth"
            // correct = correct + 1


         } if (svth.innerHTML === inputKey) {
            svth.style.visibility = "hidden"

            // svth.id = "svth"
            // correct = correct + 1


         } if (eigth.innerHTML === inputKey) {
            eigth.style.visibility = "hidden"

            // eigth.id = "eigth"
            // correct = correct + 1

         }
         if (ninth.innerHTML === inputKey) {
            ninth.style.visibility = "hidden"

            // ninth.id = "ninth"
            // correct = correct + 1


         }



      }

      //  if( inputKey !== popAlphabets[i]) {
      //    wrong = wrong + 1
      //    // all = all + 1

      // }

   }
   if (first.style.visibility === "hidden" && second.style.visibility === "hidden" && third.style.visibility === "hidden" && frth.style.visibility === "hidden" && fifth.style.visibility === "hidden" && sixth.style.visibility === "hidden" && svth.style.visibility === "hidden" && eigth.style.visibility === "hidden" && ninth.style.visibility === "hidden") {
      // finish()
      first.id = "first"
      second.id = "second"
      third.id = "third"
      frth.id = "frth"
      fifth.id = "fifth"
      sixth.id = "sixth"
      svth.id = "svth"
      eigth.id = "eigth"
      ninth.id = "ninth"



      first.style.visibility = "visible"
      second.style.visibility = "visible"
      third.style.visibility = "visible"
      frth.style.visibility = "visible"
      fifth.style.visibility = "visible"
      sixth.style.visibility = "visible"
      svth.style.visibility = "visible"
      eigth.style.visibility = "visible"
      ninth.style.visibility = "visible"
      popAlphabets = []

      levelUp.style.visibility = "visible"
      levelUpsecond.style.visibility = "visible"

      setTimeout(start, 500)

   }
   if (popAlphabets.includes(inputKey)) {
      correct = correct + 1
      all = all + 1

   }
   if (popAlphabets.includes(inputKey) === "false") {
      wrong = wrong + 1
   }

}




async function finish() {


   await Swal.fire({
      title: 'Play Again',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
       rgba(0,0,123,0.4)
       url("https://sweetalert2.github.io/images/nyan-cat.gif")
       left top
       no-repeat
     `
   })
   location.reload()
}