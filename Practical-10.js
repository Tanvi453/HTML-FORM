let Student = JSON.parse(localStorage.getItem("Java")) || [];

let isEdit = -1;

const displaytable = () => {
    document.getElementById("tbl").innerHTML = Student.map((item, index) => {
        return (
            `<tr>
            <td>${item.Email}</td>
            <td>${item.password}</td>
            <td><button type="button" onclick="deleterecord(${index})">Delete</button></td>
            <td><button type="button" onclick="editdata(${index})">Edit</button></td>
            <tr>`
        )
    }).join('')
}
displaytable();

let deleterecord = (indexx) => {
    const updated = Student.filter((item, index) => { return index !== indexx });
    Student = updated;
    localStorage.setItem("Java", JSON.stringify(Student));
    displaytable();
}

const editdata = (idx) => {
    isEdit = idx;

    const record = Student.find((item, index) => { return index === idx });
    console.log(record);

    document.getElementById("Email").value = record.Email;
    document.getElementById("password").value = record.password;
}

function Form() {

    const Email = document.getElementById("Email").value;
    console.log(Email);

    const password = document.getElementById("password").value;
    console.log(password);

    const Person = {
        Email: Email, password: password,
    }

    if (isEdit !== -1) {
        const updated = Student.map((item, index) => {
            if (isEdit === index) {
                return Person
            }
            return item;
        })

        Student = updated;
    }
    else { Student.push(Person); }
    displaytable();
    localStorage.setItem("Java", JSON.stringify(Student));
    console.log("Student", Student);
    console.log(Person);
}