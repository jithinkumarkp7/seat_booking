import React, { useState } from 'react'

const StudentInfo = () => {
    const [studentInfo, setStudentInfo] = React.useState([{
        id: 1,
        name: 'S1',
        branch: 'CS'
    },
    {
        id: 2,
        name: 'S2',
        branch: 'CS'
    },
    {
        id: 3,
        name: 'S3',
        branch: 'CS'
    },
    {
        id: 4,
        name: 'S4',
        branch: 'CS'
    }]);

    const [formData, setFormData] = React.useState({
        id: 1,
        name: 'S1',
        branch: 'CS'
    },
    );

    const [editId, setEditId] = useState(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (editId !== null) {
            setStudentInfo(studentInfo.map((student) =>
                student.id === editId ? { ...formData, id: editId } : student
            ));
        }
        else {
            setStudentInfo([...studentInfo, { ...formData, id: studentInfo.length + 1 }]);
        }
        setFormData({
            id: 1,
            name: '',
            branch: ''
        });
        setEditId(null);

    }
    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleEdit = ((student: any) => {
        setFormData(student);
        setEditId(student?.id);
    })
    const handleDelete = ((id: any) => {
        setStudentInfo(studentInfo.filter((s: any) => s.id !== id));
    })

    return (
        <div>
            <h1>Student Info</h1>
            <div className='flex gap-4'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4 justify-end'>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleOnchange}
                            required
                            value={formData.name}
                            className='border p-3'
                            name='name'
                        />

                        <input
                            type="text"
                            placeholder="Branch"
                            onChange={handleOnchange}
                            required
                            value={formData.branch}
                            name='branch'
                            className='border p-3' />


                        <button type="submit" className='bg-green-600 text-white cursor-pointer'>{editId ? 'Update' : 'Add'}</button>
                    </div>
                </form>
                <table className="table-auto border p-3">
                    <thead>
                        <tr className='border p-3'>
                            <th className='border p-3'>Id</th>
                            <th className='border p-3'>Name</th>
                            <th className='border p-3'>Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentInfo.map((student) => (
                            <tr key={student.id} className='border p-3'>
                                <td className='border p-3'>{student?.id}</td>
                                <td className='border p-3'>{student?.name}</td>
                                <td className='border p-3'>{student?.branch}</td>
                                <td>
                                    <button onClick={() => handleEdit(student)} className='mr-2 bg-amber-200 border p-3 px-2 cursor-pointer'>Edit</button>
                                    <button onClick={() => handleDelete(student.id)} className='mr-2 bg-red-600 text-white border p-3 px-2 cursor-pointer'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentInfo