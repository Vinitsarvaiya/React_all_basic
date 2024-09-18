import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CrudAxios = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });
    const [formData2, setFormData2] = useState({
        id: '',
        name: '',
        description: ''
    });

    const getData = () => {
        axios.get('http://localhost:5000/api/posts')
            .then(result => {
                setData(result.data);
            })
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handlePost = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/posts', formData)
            .then(() => {
                console.log("created");
                getData();
                setFormData({ name: '', description: '' }); // Reset form
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/posts/${id}`)
            .then(() => {
                console.log("deleted");
                getData();
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (item) => {
        setShow(true);
        setFormData2({
            id: item.id,
            name: item.name,
            description: item.description
        });
    };

    const handleChangeEdit = (e) => {
        const { name, value } = e.target;
        setFormData2(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/posts/${formData2.id}`, formData2)
            .then(() => {
                console.log("updated");
                setShow(false);
                getData();
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <div>
            {!show && (
                <form className='mt-5 mb-5' onSubmit={handlePost}>
                    <input type="text" className="form-control mt-2 mb-2" name="name" onChange={handleChange} value={formData.name} />
                    <input type="text" className="form-control mt-2 mb-2" name="description" onChange={handleChange} value={formData.description}/>
                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            )}
                {show && (
                    <form className='mt-5 mb-5' onSubmit={handleUpdate}>
                        <input type="text" className="form-control mt-2 mb-2" name="name" onChange={handleChangeEdit} value={formData2.name} />
                        <input type="text" className="form-control mt-2 mb-2" name="description" onChange={handleChangeEdit} value={formData2.description} />
                        <button type="submit" className='btn btn-warning'>Update</button>
                    </form>
                )}
            </div>

            <button type="button" className="btn btn-success mt-5" onClick={getData}>Data</button>

            {data.length > 0 ? data.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button className='btn btn-warning' onClick={() => handleEdit(item)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                    <hr />
                </div>
            )) : <h1>No data available</h1>}
        </div>
    );
};

export default CrudAxios;
