let Self = JSON.parse(localStorage.getItem("hello")) || [];

let isEdit = -1;

const displaytable = () => {
    document.getElementById("tbl").innerHTML = Self.map((item, index) => {
        return (
            `<tr>
            <td>${item.Uname}</td>
            <td>${item.Email}</td>
            <td>${item.password}</td>
            <td><button type="button" onclick="deleterecord(${index})">Delete</button></td>
            <td><button type="button" onclick="editdata(${index})">Edit</button></td>
            </tr>`
        )
    }).join('');
}
displaytable();

let deleterecord = (indexx) => {
    const updated = Self.filter((item, index) => { return index !== indexx });
    Self = updated;
    localStorage.setItem("hello", JSON.stringify(Self));
    displaytable();
}

const editdata = (idx) => {
    isEdit = idx;

    const record = Self.find((item, index) => { return index === idx });
    console.log(record);

    document.getElementById("Uname").value = record.Uname;
    document.getElementById("Email").value = record.Email;
    document.getElementById("password").value = record.password;

}

function Form() {

    const Uname = document.getElementById("Uname").value;
    console.log(Uname);

    const Email = document.getElementById("Email").value;
    console.log(Email);

    const password = document.getElementById("password").value;
    console.log(password);

    const Person = {
        Uname: Uname, Email: Email, password: password,
    }

    if (isEdit !== -1) {
        const updatee = Self.map((item, index) => {
            if (isEdit === index) {
                return Person
            }
            return item;
        })

        Self = updatee;

    }
    else { Self.push(Person); }
    displaytable();
    localStorage.setItem("hello", JSON.stringify(Self));
    console.log(Person);
    console.log(Self);
}