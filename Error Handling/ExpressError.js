class ExpressError extends Error{
    constructor(status, message){
        super(); //Calls parent class constructor
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;