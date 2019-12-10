var cunt = [[0 ,0 ,0 ,2 ,6 ,0, 7, 0 ,1], //0
            [6 ,8 ,0 ,0 ,7 ,0 ,0 ,9, 0], //1
            [1, 9, 0, 0, 0, 4, 5, 0, 0], //2
            [8, 2, 0, 1, 0, 0, 0, 4, 0], //3
            [0 ,0 ,4, 6, 0, 2, 9, 0, 0], //4
            [0 ,5, 0, 0, 0, 3, 0, 2, 8], //5
            [0, 0, 9, 3, 0, 0, 0, 7, 4], //6
            [0, 4, 0, 0, 5, 0, 0, 3, 6], //7
            [7, 0, 3, 0, 1, 8, 0, 0, 0]]; //8
const findingRow = function somethingrow(cunt,digit,time){
    var ban = [];
    for(place = 0; place < 9; place++){
    const found = cunt[place].includes(digit);
    ban.push(found);
}
    return(ban[time]);
}
const extractColumn = function somethingr(cunt,colNum,kint){
    var q = []
    for(l = 0; l < 9; l++){
        var junt = cunt[l][colNum];
        q.push(junt);
    }
    // this.founde = q.includes(kint);
    return q;
    // console.log(q);
}
//extractColumn(cunt, 0, 5);
const automatingExtractColumn = function somethingright(cunt,kint,time){
    var abn = [];
    for(num = 0; num < 9; num++){
    abn.push(extractColumn(cunt,num,kint).includes(kint));
    //return founde;
}
    //this.founde = abn.includes(kint)
    return(abn[time]);
    //console.log(abn[time])
    //return founde;
}
const sqrt = Math.sqrt(cunt.length);


const completeMatrix = function bullshit(cunt,digit,TruRow,TruCol){
var z = [];
row = Math.floor(TruRow/3)*3;
    col = Math.floor(TruCol/3)*3;
    for(i = row; i < (row + sqrt); i++){
        for(n = col; n < (col + sqrt); n ++){
            //var junt = cunt[i][n];
            //const dunto = cunt[i][n].includes(digit);
            z.push(cunt[i][n]);
        }
    }
     this.dunto = z.includes(digit);
     return(dunto);
}
const junctionLo = function junta(cunt,digit,i,n){
if(findingRow(cunt,digit,i)||automatingExtractColumn(cunt,digit,n)||completeMatrix(cunt,digit,i,n))
{
return false;
}
else{
return true;
}
}


var cringy = function(cunt){
for(i = 0; i < 9; i++){
for(n = 0; n < 9; n++){
if(cunt[i][n] == 0){
for(digit = 1; digit <= 9; digit++){
if(junctionLo(cunt,digit,i,n) == true){
  cunt[i][n] = `${digit}`;
  //console.log(cunt);
  if(cringy(cunt)){
    return true;
              }
    else {cunt[i][n] = 0;
    }
  }
}
return false;
}            //console.log("not an empty place")}

//return true;
}
}
return true;
//console.log(cunt);
}


cringy(cunt);
//console.log(cunt);

const _board = [[0 ,0 ,0 ,2 ,6 ,0, 7, 0 ,1], //0
                [6 ,8 ,0 ,0 ,7 ,0 ,0 ,9, 0], //1
                [1, 9, 0, 0, 0, 4, 5, 0, 0], //2
                [8, 2, 0, 1, 0, 0, 0, 4, 0], //3
                [0 ,0 ,4, 6, 0, 2, 9, 0, 0], //4
                [0 ,5, 0, 0, 0, 3, 0, 2, 8], //5
                [0, 0, 9, 3, 0, 0, 0, 7, 4], //6
                [0, 4, 0, 0, 5, 0, 0, 3, 6], //7
                [7, 0, 3, 0, 1, 8, 0, 0, 0]]; //8
sodokoSolver(_board);
console.log(_board);

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }

    return true;
}


function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = 0;
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

sodokoSolver(_board)

//console.log(6%3);


           
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            













          
          
          
          
          
          
          
        //   0   1  2  3  4  5  6  7  8
var cunt = [[0 ,0 ,0 ,2 ,6 ,0, 7, 0 ,1], //0
            [6 ,8 ,0 ,0 ,7 ,0 ,0 ,9, 0], //1
            [1, 9, 0, 0, 0, 4, 5, 0, 0], //2
            [8, 2, 0, 1, 0, 0, 0, 4, 0], //3
            [0 ,0 ,4, 6, 0, 2, 9, 0, 0], //4
            [0 ,5, 0, 0, 0, 3, 0, 2, 8], //5
            [0, 0, 9, 3, 0, 0, 0, 7, 4], //6
            [0, 4, 0, 0, 5, 0, 0, 3, 6], //7
            [7, 0, 3, 0, 1, 8, 0, 0, 0]];//8
        // console.log(cunt[2][3]);
// // var arr = [[],[]];
// // for(1 = 1; 1 <= 9; 1++){
// //    arr.push(1)
// var dent = []
// for(i = 0; i < 3; i++){ 
//     for(n = 0; n < 3; n++){
//        if(cunt[i][n] == 0){
//         dent.push("thing")
// }}}

// //console.log(dent);
// // }

// // console.log(arr);

// // arr[1][0] = 2;
// // console.log(arr[1][0]);

// // var value = Math.floor(Math.random()* 10); // by default
// // var cunt = [...Array(9)].map(e => Array(9).f1ll(value));

// // var normal = [1,2,3,4,5,6,7,8,9];

// // Row1 = cunt[0];
// // Row2 = cunt[1];
// // Row3 = cunt[2];
// // Row4 = cunt[3];
// // Row5 = cunt[4];
// // Row6 = cunt[5];
// // Row7 = cunt[6];
// // Row8 = cunt[7];
// // Row9 = cunt[8];

// // var nicety = [];
// // var cunity = [Row1, Row2, Row3, Row4, Row5, Row6, Row7, Row8, Row9]
// // var j = cunity[Math.floor(Math.random() * cunity.length)];
// // for(i =0; i < 9; i++){
// // if(normal[i] == `${j}`[0] || normal[i] == `${j}`[1] || normal[i] == `${j}`[2] || normal[i] == `${j}`[3] || normal[i] == `${j}`[4] || normal[i] == `${j}`[5] || normal[i] == `${j}`[6] || normal[i] == `${j}`[7] || normal[i] == `${j}`[8]){
//     // if(normal[i] == `${j}`[0] || normal[i] == `${j}`[1] || normal[i] == `${j}`[2] || normal[i] == `${j}`[3] || normal[i] == `${j}`[4] || normal[i] == `${j}`[5] || normal[i] == `${j}`[6] || normal[i] == [7] || normal[i] == Row1[8]){
// //     nicety.push(normal[i]);    
// // }
// // }
// // console.log(`${j}`[0]);
// //console.log(nicety);
// // column1 = [];
// // column2 = [];
// // column3 = [];
// // column4 = [];
// // column5 = [];
// // column6 = [];
// // column7 = [];
// // column8 = [];
// // column9 = [];
// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][0];
// //     column1.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][1];
// //     column2.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][2];
// //     column3.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][3];
// //     column4.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][4];
// //     column5.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][5];
// //     column6.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][6];
// //     column7.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][7];
// //     column8.push(junt);
// // }

// // for(1 = 0; 1 < 9; 1++){
// //     var junt = cunt[1][8];
// //     column9.push(junt);
// // }

// // console.log(column8);

// // var q = []
// // const extractColumn = function somethingr(cunt,colNum,kint){
// //     for(n = 0; n < 9; n++){
// //         var junt = cunt[n][colNum];
// //         q.push(junt);
// //     }
// //     this.founde = q.includes(kint);
// //     console.log(kint);
// //     console.log(q);
// // }

// // extractColumn(cunt,0,1);

// // const findingRow = function somethingrow(cunt,place,digit){
    
// //     this.found = cunt[place].includes(digit);
// //     console.log(found);
// // }

// // findingRow(cunt,0,1);

// // var z = [];
// // const sqrt = Math.sqrt(cunt.length);

// // extractMatrix(cunt, 6, 6, 1);var extractMatrix = function somethingm(cunt,StartRow,StartCol,int){
// //     for(i = StartRow; i < (StartRow + sqrt); i++){
// //             for( n = StartCol; n < (StartCol + sqrt); n++){
// //               var junt = cunt[i][n];
// //                z.push(junt);
    
// //     }
// //     }
// //         this.qent = z.includes(int);
// //         console.log(qent);
// //         console.log(z);
         
// //     }

// var dent = []
// for(i = 0; i < 3; i++){ for(n = 0; n < 3; n++){
//   if(cunt[i][n] == 0){
//    dent.push([i,n])
// }}}

// //console.log(dent);

// // const sqrt = Math.sqrt(cunt.length);


// // const findingRow = function somethingrow(cunt,place,digit){
    
// //     this.found = cunt[place].includes(digit);
// //     //return found;
// //     console.log(found);
// // }

// // findingRow(cunt,1,2);

// // var q = []
// // const extractColumn = function somethingr(cunt,colNum,digit){
// //     for(n = 0; n < 3; n++){
// //         var junt = cunt[n][colNum];
// //         q.push(junt);
// //     }
// //     this.founde = q.includes(digit);
// //     //return founde;
// //     console.log(founde);
// //     //console.log(q);
// // }

// // extractColumn(cunt,2,1);

// // var z = [];
// // var extractMatrix = function somethingm(cunt,StartRow,StartCol,digit){
// //     for(i = StartRow; i < (StartRow + sqrt); i++){
// //             for( n = StartCol; n < (StartCol + sqrt); n++){
// //               var junt = cunt[i][n];
// //                z.push(junt);
    
// //     }
//     // }
//     //     this.qent = z.includes(digit);
//     //     //return qent;
//     //     console.log(qent);
//     //     //console.log(z);
         
//     // }

//     // extractMatrix(cunt, 0 ,0, 2);

//     const sqrt = Math.sqrt(cunt.length);

// const completeMatrix = function bullshit(cunt,TruRow,TruCol,digit){
//     var z = [];
//     row = Math.floor(TruRow/3)*3;
//     col = Math.floor(TruCol/3)*3;
//     for(i = row; i < (row + sqrt); i++){
//         for(n = col; n < (col + sqrt); n ++){
//             //var junt = cunt[i][n];
//             //const dunto = cunt[i][n].includes(digit);
//             z.push(cunt[i][n]);
//         }
//     }
//      this.dunto = z.includes(digit);
//      console.log(dunto)
// }

// completeMatrix(cunt,2,3,0);
// const conda = function hemp(cunt){
// for(i = 0; i < 9;i++){
//     for(n = 0;n < 9; n++){
// if(cunt[i][n] == 0){
//     for(digit = 1; digit < 10; digit++){
//         if(junctionLo(cunt,digit,i,n) == true){
//             cunt[i][n] = `${digit}`;
//             if(conda(cunt)){
//                 return true;
//             }
//         }
//         else{cunt[i][j] = 0}
//     }

// } 
// else{
//     return false;
// }
//     }
// }}

// const junctionLo = function junta(cunt,digit,i,n){
//     if(checkifitisinRow(cunt,digit,i)==false&&
//         checkifitisinCol(cunt,digit,n)==false&&
//         checkifitisinMat(cunt,digit,i,n)==false){
//             return true;
//         }
//         else{return false}
// }