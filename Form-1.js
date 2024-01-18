let student = JSON.parse(localStorage.getItem("data")) || [];

// let deleterecord = (index) => {
//     student.splice(index, 1);
//     console.log("student", student);
//     localStorage.setItem("Data", JSON.stringify(student));
//     displaytable();
// }

const displaytable = () => {
    document.getElementById("tbl").innerHTML = student.map((item, index) => {
        return (
            `<tr>
                <td>${item.Fname}</td>
                <td>${item.Mname}</td>
                <td>${item.Lname}</td>
                <td>${item.gender ? "Male" : "Female"}</td>
                <td>${item.Age}</td>
                <td>${item.DOB}</td>
                <td>${item.Address}</td>
                <td>${item.city}</td>
                <td>${item.AadharNo}</td>
                <td>${item.Password}</td>
                <td>${item.Color}</td>
                <td>${item.lang}</td>
                <td>${item.Car}</td>
                <td>${item.File}</td>
                <td><button type="button" onclick="deleterecord(${index})">Delete</button></td>
                <td><button type="button">Edit</button></td>
                </tr>`
        )
    }).join('')
}
displaytable();

let Car = [];

let lang = [];

function Form() {

    const Fname = document.getElementById("Fname").value;
    console.log(Fname);

    const Mname = document.getElementById("Mname").value;
    console.log(Mname);

    const Lname = document.getElementById("Lname").value;
    console.log(Lname);

    const gender = document.getElementById("Male").checked;
    console.log(gender);
    if (gender);

    const Age = document.getElementById("Age").value;
    console.log(Age);

    const DOB = document.getElementById("DOB").value;
    console.log(DOB);

    const Address = document.getElementById("Address").value;
    console.log(Address);

    const city = document.getElementById("city").value;
    console.log(city);

    const AadharNo = document.getElementById("AadharNo").value;
    console.log(AadharNo);

    const Password = document.getElementById("Password").value;
    console.log(Password);

    const Color = document.getElementById("Color").value;
    console.log(Color);

    if (document.getElementById("html").checked) {
        lang.push(document.getElementById("html").value)
    }
    if (document.getElementById("css").checked) {
        lang.push(document.getElementById("css").value)
    }
    if (document.getElementById("javascript").checked) {
        lang.push(document.getElementById("javascript").value)
    }
    console.log(lang);


    if (document.getElementById("BMW").checked) {
        Car.push(document.getElementById("BMW").value)
    }
    if (document.getElementById("Audi").checked) {
        Car.push(document.getElementById("Audi").value)
    }
    if (document.getElementById("Kia").checked) {
        Car.push(document.getElementById("Kia").value)
    }
    console.log(Car);

    const File = document.getElementById("File").value;
    console.log(File);

    // OBJECT:-
    const person = {
        Fname: Fname, Mname: Mname, Lname: Lname, Age: Age, DOB: DOB, Address: Address, city: city, AadharNo: AadharNo, Password: Password, Color: Color, File: File, gender: gender, lang: lang, Car: Car,
    }
    student.push(person);
    Car = [];
    lang = [];
    displaytable();
    localStorage.setItem("data", JSON.stringify(student));
    console.log("student", student);
    console.log(person);

}

function deleterecord(id) {
    const deletee = student.filter((user, index) => index !== id);
    console.log(deletee);
    student = deletee;
    localStorage.setItem("data", JSON.stringify(deletee));
    displaytable();
}



