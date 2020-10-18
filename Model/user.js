class User {
    constructor(firstName, lastName, gender, birthday, email, password, ssn, interest, match, image){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.ssn = ssn;
        this.interest = interest; 
        this.match = match;
        this.image = image;
    }
}

class PaymentUser extends User{
    constructor(firstName, lastName, gender, birthday, email, password, ssn, interest, match, image, ccn){
        super(firstName, lastName, gender, birthday, email, password, ssn, interest, match, image);
        this.ccn = ccn;
    }
}
class FreeUser extends User{
    constructor(firstName, lastName, gender, birthday, email, password, ssn, interest, match, image){
        super(firstName, lastName, gender, birthday, email, password, ssn, interest, match, image)
    }
}

module.exports = PaymentUser, FreeUser;


