let answer = "";
let score = 0;
let question = "";


if (question == "سلام"){
    console.log(answer = "درود بر تو ای بزرگوار");
}else if (question == "اسمت چیه؟"){
    console.log(answer = "میرزا");
}else if(question == "چند سالته؟"){
    answer = Math.random()*101;
    console.log(answer);
    if (answer <= 35){
        console.log("you are young");
    }else if (answer > 35 && answer < 60){
        console.log("you are middle-age");
    }else{
        console.log("you are old");
    }
}else if(question == "معدلت چنده؟"){
    score = Math.random()*101;
    score = score.toFixed(2);
    console.log(score);
    if(score>=50 && score<=100){
        console.log("قبول");
    }else{
        console.log("رد")
    }
}else{
    console.log("اطلاعات ورودی نادرست می‌باشد");
}
