import React, { useState } from 'react'

const FormHandler = () => {
    const mystyle = {
        marginTop:"10%",
    };

    const [formData,SetformData]=useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    })

    const Handlechange=(e)=>{
        SetformData({...formData,[e.target.name]:e.target.value})
        // console.log(formData)
    }

    const Hnadlesubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className='container' style={mystyle}>
            <form onSubmit={Hnadlesubmit}>
            <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Fname</label>
                    <input type="text" value={formData.fname} className="form-control" name="fname" id="fname" onChange={Handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Lname</label>
                    <input type="text" value={formData.lname} className="form-control" name="lname" id="lname" onChange={Handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={formData.email} className="form-control" name="email" id="email" aria-describedby="emailHelp" autoComplete="new-email" onChange={Handlechange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={formData.password} className="form-control" name="password" id="password" autoComplete="new-password" onChange={Handlechange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default FormHandler