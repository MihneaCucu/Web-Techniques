function drawTable(nrows, ncols) {
   tabel = document.createElement("table");
   tabel.id = "tabel";
   for(let cntr = 0; cntr < nrows; cntr = cntr + 1){
      let rand = document.createElement("tr");
      for(let cntr2 = 0; cntr2 < ncols; cntr2 = cntr2 + 1)
      {
         let coloana = document.createElement("td");
         coloana.id = cntr + "." + cntr2;
         rand.appendChild(coloana);
      }
      tabel.appendChild(rand);
   }
   document.getElementById("container").appendChild(tabel);
}
function colorCol(column, color){
   for(let i = 0; i < document.getElementById("tabel").childNodes.length; i++){
      document.getElementById(i + "." + column).style.backgroundColor = color;
   }
}

function colorRow(row, color) {
   for(let i = 0; i < document.getElementById("tabel").firstChild.childNodes.length; i++){
      document.getElementById(row + "." + i).style.backgroundColor = color;
   }
}

function rainbow(target) {
   let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
   if(target == "v"){
      cntr = document.getElementById("tabel").firstChild.childNodes.length / 10;
      for(let c = 0; c < cntr; c++){
         for(let i = 0; i < 10; i++){
            colorCol(cntr*i + c, colors[i]);
         }
      }
   }
   else
   {
      cntr = document.getElementById("tabel").childNodes.length / 10;
      for(let c = 0; c < cntr; c++){
         for(let i = 0; i < 10; i++){
            colorRow(cntr*i + c, colors[i]);
         }
      }
   }
}

function getNthChild(element, n) {
   return(element.childsNodes[n-1]);
}

function drawPixel(row, col, color) {
   document.getElementById(row + "." + col).style.backgroundColor = color;
}

function drawLine(r1, c1, r2, c2, color) {
   if(r1 == r2){
      for(let i = c1; i <= c2; i++){
         drawPixel(r1,i,color);
      }
   }
   else
   {
      if(c1 == c2){
         for(let i = r1; i <= r2; i++){
            drawPixel(c1,i,color);
         }
      }
   }
}

function drawRect(r1, c1, r2, c2, color) {
   for(let i = r1; i <= r2; i++){
      drawLine(i,c1,i,c2,color);
   }
}

function drawPixelExt(row, col, color) {
   rows = document.getElementById("tabel").childNodes.length;
   columns = document.getElementById("tabel").firstChild.childNodes.length;
   if(row < rows && col < columns)
   {
      drawPixel(row,col,color);
   }
   else
   {
      document.getElementById("container").removeChild(document.getElementById("tabel"));
      drawTable(row+1 , col+1);
      drawPixel(row,col,color);
   }
}

function colorMixer(colorA, colorB, amount){
   let cA = colorA * (1 - amount);
   let cB = colorB * (amount);
   return parseInt(cA + cB);
}

function drawPixelAmount(row, col, color, amount) {
   
   /* 
   9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
   în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1). 
   Dacă 'amount' are valoarea:
   1, atunci celula va fi colorată cu 'color'
   0, atunci celula își va păstra culoarea inițială
   pentru orice altă valoare, culoarea inițială și cea dată de argumentul 
   'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci 
   culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%). 
   */

   /*   
   Hint 1: folosiți funcția colorMixer de mai sus.

   Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
   let newColorArray = color.match(/\d+/g); 
   pentru a obține un Array cu trei elemente, corespunzătoare valorilor
   asociate celor trei culori - newColorArray = [x, y, z]
   
   Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
   metoda getComputedStyle(element). Accesând proprietatea backgroundColor 
   a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
   */
}

function delRow(row) {
/*
   10. Ștergeți linia cu numărul 'row' din tabla de desenat.
*/
}

function delCol(col) {
/*
   10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
*/
}

function shiftRow(row, pos) {
/*
   11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
   elementelor de pe linia cu numărul 'row' din tabla de desenat. 
*/
}

function jumble() {
/*
   12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
   cu un număr aleator de poziții fiecărei linii din tabla de desenat.
*/
}

function transpose() {
/*
   13. Transformați tabla de desenat în transpusa ei.
*/
}

function flip(element) {
/*
   14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
*/
}

function mirror() {
/*
   15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei, 
   aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
*/
}

function smear(row, col, amount) {
/*
   16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
   învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
   Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește. 
   Hint: folosiți funcția 'drawPixelAmount'.
*/
}


window.onload = function(){
    const rows = 100;
    const cols = 100;
    drawTable(rows, cols);

    document.getElementById("curcubeu").onclick = function(){rainbow("h");}

    document.getElementById("clear").onclick = function(){drawRect(0,0,rows-1,cols-1,"white");}

    for( let i = 0; i < rows; i++)
      for( let j = 0; j < cols; j++)
         document.getElementById(i + "." + j).onclick = function() 
         {  let form = document.getElementById("formular");
            let culoare = form.elements[0].value;
            drawPixel(i, j, culoare);
         }

    
}


