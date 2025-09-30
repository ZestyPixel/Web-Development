const student = {
    name : "Umar",
    maths : 53,
    science : 67,
    english : 97,
    getAvg(){
        let avg = (this.maths + this.english + this.science)/3;
        console.log(avg);
    }
}

student.getAvg();