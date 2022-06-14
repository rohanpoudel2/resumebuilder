import './form.css';

import { Editor } from '@tinymce/tinymce-react';

import Person from '../../img/form-person.png';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';



const Form = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    Address: '',
    school: '',
    tenplustwo: '',
    bachelorssubject: '',
    bachelorscollege: '',
    currentpost: '',
    about: '',
    projects: ''
  });

  const handlenext = (e) => {
    e.preventDefault();
    let form = document.getElementById('form');
    form.classList.add('show-next');
    form.classList.remove('show-previous');
  }

  const handleprevious = (e) => {
    e.preventDefault();
    let form = document.getElementById('form');
    form.classList.add('show-previous');
    form.classList.remove('show-next');
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (e.target.name == 'firstname') {
      setData({ ...data, firstname: e.target.value });
    }
    else if (e.target.name == 'lastname') {
      setData({ ...data, lastname: e.target.value });
    }
    else if (e.target.name == 'email') {
      setData({ ...data, email: e.target.value });
    }
    else if (e.target.name == 'number') {
      setData({ ...data, number: e.target.value });
    }
    else if (e.target.name == 'address') {
      setData({ ...data, Address: e.target.value });
    }
    else if (e.target.name == 'school') {
      setData({ ...data, school: e.target.value });
    }
    else if (e.target.name == 'tenplustwo') {
      setData({ ...data, tenplustwo: e.target.value });
    }
    else if (e.target.name == 'bachelors') {
      setData({ ...data, bachelorssubject: e.target.value });
    }
    else if (e.target.name == 'bachelorscollege') {
      setData({ ...data, bachelorscollege: e.target.value });
    }
    else if (e.target.name == 'post') {
      setData({ ...data, currentpost: e.target.value });
    }
    else if (e.target.name == 'about') {
      setData({ ...data, about: e.target.value });
    }
    else if (e.target.name == 'projects') {
      setData({ ...data, projects: e.target.value });
    }

    storeData();

  }

  const storeData = () => {
    localStorage.setItem('value', JSON.stringify({ data }));
  }

  const formsubmit = () => {
    navigate('./components/cvpage/Cv.js');
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="f-left">
          <h3>Fill in your details here and we'll create a Simple Resume for you </h3>
          <img src={Person} alt="" />
        </div>
        <div className="f-right">
          <form id='form' onSubmit={formsubmit}>
            <div className="first-form-item">
              <label>
                Your First Name:
              </label>
              <input type="text" name='firstname' onChange={handlesubmit} value={data.firstname} />
              <label>
                Your Last Name:
              </label>
              <input type="text" name='lastname' onChange={handlesubmit} value={data.lastname} />
              <label>
                Your Email Address:
              </label>
              <input type="email" name='email' onChange={handlesubmit} value={data.email} />
              <label>
                Your Contact Number:
              </label>
              <input type="number" name='number' onChange={handlesubmit} value={data.number} />
              <label>
                Your Address:
              </label>
              <input type="text" name='address' onChange={handlesubmit} value={data.Address} />
              <label>
                Your School Name:
              </label>
              <input type="text" name='school' onChange={handlesubmit} value={data.school} />
              <label>
                Your Ten Plus Two School Name:
              </label>
              <input type="text" name='tenplustwo' onChange={handlesubmit} value={data.tenplustwo} />
              <label>
                Your Bachelors Subject:
              </label>
              <input type="text" name='bachelors' onChange={handlesubmit} value={data.bachelorssubject} />
              <label>
                Your Bachelors College:
              </label>
              <input type="text" name='bachelorscollege' onChange={handlesubmit} value={data.bachelorscollege} />
              <label>
                Your Current Post
              </label>
              <input type="text" name='post' onChange={handlesubmit} value={data.currentpost} />
              <button className='next-form-btn' onClick={handlenext}>Next</button>
            </div>
            <div className="form-next-item">
              <label>
                About You:
              </label>
              <textarea name="about" cols="30" rows="10" onChange={handlesubmit} value={data.about} />
              <label>
                Projects:
              </label>
              <textarea name="projects" cols="30" rows="10" onChange={handlesubmit} value={data.projects} />
              <button className='previous-form-btn' onClick={handleprevious}>Previous</button>
              <input type="Submit" className='previous-form-btn' defaultValue='Submit' />
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Form