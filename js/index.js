(function(){
    //set default value for date of birth
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById("birthdate").value = new Date().toISOString().substr(0, 10);
    });
})()

//initialize constructor function
function Customer(name, phone, email, city, date, gender){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.date = date;
    this.city = city;
    this.gender = gender;
}

//generate a random image source based on gender (therea re two images for each gender)
Customer.prototype.generateRandomPic = function(){
    const pic = this.gender === '0'? 'm' + Math.round(Math.random()): 'f' + Math.round(Math.random());
    return `./images/${pic}.JPG`
}

//generate user id based on city (first character to decimal value), date, and gender
Customer.prototype.createId = function(){
    return  this.city.charCodeAt(0) + this.date.replace(/-/g, "") + this.gender;
}

//crate an ID card
Customer.prototype.setCard = function(){
    var d1 = document.getElementById('card');
    console.log(this.generateRandomPic());
    const newElem = `
            <div class="card-container">
                <img src="${this.generateRandomPic()}" alt="Avatar" class="avatar">
                <div class="user-info">
                    <div class="desc"><p class="desc-title">ID</p> :<span class="desc-user">${this.createId()}</span></div>
                    <div class="desc"><p class="desc-title">Name</p> :<span class="desc-user">${this.name}</span></div>
                    <div class="desc"><p class="desc-title">Phone</p> :<span class="desc-user">${this.phone}</span></div>
                    <div class="desc"><p class="desc-title">Email</p> :<span class="desc-user">${this.email}</span></div>
                    <div class="desc"><p class="desc-title">BoD</p>: <span class="desc-user">${this.date}</span></div>
                    <div class="desc"><p class="desc-title">Gender</p> :<span class="desc-user">${this.gender === '0'? 'Male': 'Female'}</span></div>
                </div>
            </div>`;
    d1.insertAdjacentHTML('afterbegin', newElem);
}

//get value
const submitForm = () => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("birthdate").value;
    let city = document.getElementById("city").value;
    let gender = document.getElementById("gender").value;
    
    customer = new Customer(name, phone, email, city, date, gender);
    customer.setCard();
}