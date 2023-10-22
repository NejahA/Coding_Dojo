
console.log(homeworkReward("Wednesday",22))

function homeworkReward (day, time) {
    var reward ="";
    var evenTimeWednsday =["Strawberry ice cream","Cookies","Candy"];
    var evenTimeWeek = ["Vanilla ice cream","Cookies","Candy"];
    var oddTime = ["Hot chocolate","Tea","Cake"];
    var rnd = 0;
    if (time < 10) {
        reward = "Latte"
    }
    else if (10 <= time && time<15) {
        reward = "Hot chocolate"
    }
    else if (time ==15 || time == 17) {
            rnd =Math.floor (Math.random()*3);
            reward = oddTime[rnd]
    }
    else if (time == 16 || time == 18){
        rnd =Math.floor (Math.random()*3);
        if (day == "Wednesday") {
            reward = evenTimeWednsday[rnd]
        }
        else {
            reward = evenTimeWeek[rnd]
        }
    }
    else if (time< 22) {
        if (day == "Wednesday") {
            reward = "Strawberry ice cream"
        }
        else {
            reward = "Vanilla ice cream"
        }
    }
    else {
        reward = "Sleep"
    }
    return reward
}