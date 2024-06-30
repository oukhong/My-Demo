import "./HomePage.css";
import styles from "./Test.module.css";
import { useState } from "react";
const HomePage = () => {
    // Declaration state, init state, using state, update state
    const [value1, setValue1] = useState(100);
    const [value2, setValue2] = useState(200);

    // const [id, setId] = useState(null);
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");
    // const [dob, setDob] = useState("");
    // const [email, setEmail] = useState("");
    // const [salary, setSalary] = useState("");

    const [staff, setStaff] = useState({
        is_edit: false,
        id: "",
        name: "",
        gender: "",
        email: "",
    });
    const [listStaff, setListStaff] = useState([]);

    const onChangeId = (event) => {
        setStaff({
            ...staff,
            id: event.target.value,
        });
    }
    const onChangeName = (event) => {
        setStaff({
            ...staff,
            name: event.target.value,
        });
    }
    const onChangeGender = (event) => {
        setStaff({
            ...staff,
            gender: event.target.value,
        });
    }
    const onChangeEmail = (event) => {
        setStaff({
            ...staff,
            email: event.target.value,
        })
    }
    const submit = () => {
        if (staff.is_edit) {
            //edit
            const findIndex = listStaff.findIndex((item) => item.id == staff.id);
            if (findIndex != -1) {// -1 not found
                listStaff[findIndex].id = staff.id;
                listStaff[findIndex].name = staff.name;
                listStaff[findIndex].gender = staff.gender;
                listStaff[findIndex].email = staff.email;
                setListStaff([...listStaff]); //update data by index
            }
        } else {
            // call api insert http://localhost:8081/api/staff post
            // save new
            listStaff.push(staff);
            setListStaff([...listStaff]);
        }
        clear();
    };

    const clear = () => {
        setStaff({
            id: "",
            name: "",
            gender: "",
            email: "",
            is_edit: false,
        });
    };

    const onClickEdit = (item, index) => {
        setStaff({
            ...item,
            is_edit: true,
        });
    }
    const onClickDelete = (itemParam, index) => {
        const newData = listStaff.filter((item) => item.id != itemParam.id)
        setListStaff([...newData]);
    }
    return (
        <div style={{ padding: 20 }}>
            <div className={styles.txtDemo1}>Form Staff</div>
            <div>{staff.id} {staff.name} {staff.gender} {staff.email}</div>
            <div>
                <input disabled={staff.is_edit} value={staff.id} placeholder="Id" onChange={onChangeId} />
            </div>
            <div>
                <input value={staff.name} placeholder="Name" onChange={onChangeName} />
            </div>
            <div>
                <input value={staff.gender} placeholder="Gender" onChange={onChangeGender} />
            </div>
            <div>
                <input value={staff.email} placeholder="Email" onChange={onChangeEmail} />
            </div>
            <button onClick={submit}>{staff.is_edit ? "Edit" : "Save"}</button>
            <button onClick={clear}>Clear</button>
            <div>=========Staff Info===========</div>
            {/* {listStaff.map((item, index) => (
                    <div style={{ borderBottom: "1px solid #888", padding: 10 }}>
                        <div style={{ fontWeight: "bold" }}>
                            {item.id}. {item.name}
                        </div>
                        <div>{item.gender}</div>
                        <div>{item.email}</div>
                    </div>
                ))} */}

            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* {listStaff} */}
                {listStaff.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>
                            <button onClick={() => onClickEdit(item, index)}>Edit</button>
                            <button onClick={() => onClickDelete(item, index)}>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </div>
    );
};

export default HomePage;