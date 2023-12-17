class Simuration {

    constructor(){
        this.TextEN = "";
        this.before_time = 0;
        this.after_time = 0;
        this.cnt = 0;
    }

    start(){
        this.before_time = new Date().getTime();
        this.after_time = before_time;       
    }


    SetWord(){
        let len = data.length;
        let rand = Math.floor( Math.random() * len );
        let labelJP = document.getElementById("TypimngInputJP")
        let labelEN = document.getElementById("TypimngInputEN")
        labelJP.textContent = data[rand][0];
        labelEN.textContent = data[rand][1];
        this.TextEN =labelEN.textContent;
    }

    update(){
        document.getElementById("TypingKey").focus();
        
        let keyword = document.getElementById("TypingKey");
        if(this.TextEN == keyword.value){
            keyword.value = "";
            this.SetWord(); 
        }

        this.after_time = new Date().getTime();;
        let diff_time = this.after_time - this.before_time;

        if(diff_time >= 1000){
            this.before_time = this.after_time;
            let Timer = document.getElementById("Timer")
            this.cnt += 1;
            Timer.textContent = this.cnt;           
        }
    }
    
}
