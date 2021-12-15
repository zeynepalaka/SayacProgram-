var deger=document.getElementById("degeri_al");
var programla=document.getElementById("programla");
var baslat=document.getElementById("baslat");
var durdur=document.getElementById("durdur");

var kutu=document.getElementsByClassName("kutu")[0];
var durum=document.getElementsByClassName("durum")[0];
var saniye=document.getElementsByClassName("deger")[0];

/*console.log(saniye); emin adımlarla ilerlemek ve kodun çalıştığına console bakmak için bu kod parçacığınnı kullanabiliriz.
//setInterval nedir: Belirli bir fonksiyopnu belirli saniyelerde tekrar eder. İki deger girilmeli kaç milisaniye dönmesini istersek ikinci değere ms yazılır.
var x=5;
//örnek olması açısından küçük bir kod parçacağı ile belirttim.
setInterval(geriSay, 1000);

function geriSay(){
   
    if(x>0){
        x--;
        console.log(x);
    }
    else{
        clearInterval();//sonsuz döngüye girmesini engellemek için kullanılır. 
    }
}*/
var x; 
programla.addEventListener("click",()=>{
    saniye.innerHTML=deger.value;
    durum.classList.remove("gorun");
});

baslat.addEventListener("click", ()=>{
    x=setInterval(geriSay, 1000);
    function geriSay(){
        var degeri_al=Number(saniye.textContent);
        if(degeri_al>0){
            degeri_al-=1;
            saniye.innerHTML=degeri_al.toString();//number stringe çevirip innerhtml içine koymuş olduk.
            kutu.classList.toggle("tetik");
        }
        else{
            clearInterval();//sonsuza kadar gitmesini engelledik.
            durum.classList.add("gorun");
        }
    }
});

durdur.addEventListener("click",()=>{
    clearInterval(x);
});
