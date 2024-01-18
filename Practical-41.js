let Individual = JSON.parse(localStorage.getItem("Info")) || [];

let isEdit = -1;

const displaytable = () => {

    document.getElementById("tbl").innerHTML = Individual.map((item, index) => {
        return (
            `<tr>
            <td>${item.Fname}</td>
            <td>${item.Email}</td>
            <td>${item.Uname}</td>
            <td>${item.Password}</td>
            <td><button type="button" onclick="deleterecord(${index})">Delete</button></td>
            <td><button type="button" onclick="editdata(${index})">Edit</button></td>
            </tr>`
        )
    }).join('')

}
displaytable();

let deleterecord = (idx) => {
    const updated = Individual.filter((item, index) => { return index !== idx });
    Individual = updated;
    localStorage.setItem("Info", JSON.stringify(Individual));
    displaytable();
}

const editdata = (indexx) => {
    isEdit = indexx;

    const Record = Individual.find((item, index) => { return index === indexx });
    console.log(Record);

    document.getElementById("Fname").value = Record.Fname;
    document.getElementById("Email").value = Record.Email;
    document.getElementById("Uname").value = Record.Uname;
    document.getElementById("Password").value = Record.Password;

}

function Form() {

    const Fname = document.getElementById("Fname").value;
    console.log(Fname);

    const Email = document.getElementById("Email").value;
    console.log(Email);

    const Uname = document.getElementById("Uname").value;
    console.log(Uname);

    const Password = document.getElementById("Password").value;
    console.log(Password);

    const Person = {
        Fname: Fname, Email: Email, Uname: Uname, Password: Password,
    }

    if (isEdit !== -1) {
        const updatee = Individual.map((item, index) => {
            if (isEdit === index) {
                return Person
            }
            return item;
        })

        Individual = updatee;
    }
    else { Individual.push(Person); }
    displaytable();
    localStorage.setItem("Info", JSON.stringify(Individual));
    console.log("Individual", Individual);
    console.log(Person);

}