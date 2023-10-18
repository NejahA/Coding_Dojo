function greet(name,time) {
    if (name =="Count Dooku"){
        return "I'm coming for you, Dooku!"
    }
    else {
        if (time == "day"){
            return "good day "+name; }

        else if (time =="evening"){
            return "good evening "+name;

        }
    } 

}

console.log (greet("Count Dooku","evening"));