/*const showDice = () => {
    const n = Math.floor(Math.random()*6)+1;
    console.log("주사위선택")
    show("none","block","none","block","block");
    const s1 = document.querySelector("#s1")


    s1.innerHTML = `<img src = "./images/${n}.png"/>`
    console.log("주사위선택")
}*/

//전역 변수
let n ;
//요소 보이기 함수
const show = (dspS1,dspS2,dspS3,dspBT1,dspBT2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBT1;
    bt2.style.display = dspBT2;
}

//주사위 번호 선택
const showDice = () => {
    n = Math.floor(Math.random() * 6) + 1 ;
    //const s1 = document.querySelector("#s1")
    console.log(n)
    show("none","block","none","block","block");


    //s1.innerHTML = `<img src = "./images/${n}.png"/>`
}
 
//주사위 번호 결과 확인
const showOk = () => {
    const radios = document.querySelectorAll("input[type=radio");
    //사용자가 선택한 숫자
    let usern;
    for(let r of radios){
        if(r.checked){
            //숫자로 이루어진 문자열을 숫자로 변환
            usern = parseInt(r.value);
            //console.log(r);
            break;
        }
    }
    console.log(n, usern)
    let tag;
    //비교연산자 === : ==와 비교
    if(n === usern) tag = "o";
    else tag = "x";

    document.querySelector("form").reset();

    document.querySelector("#s1").innerHTML = `<img src = "./images/${n}.png">`;
    document.querySelector("#s3").innerHTML = `<img src = "./images/${tag}.png">`;
    
    show("block","none","block","block","none");
}  



//DOM이 로드가 된 후
document.addEventListener("DOMContentLoaded", () => {
    show("none","none","none","block","block");
});