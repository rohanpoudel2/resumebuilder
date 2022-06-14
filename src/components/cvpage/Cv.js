import './Cv.css';

import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { HiMail as Mail } from "react-icons/hi";
import { FaHome as Home, FaGraduationCap as Edu } from "react-icons/fa";


const Cv = () => {


  const data = JSON.parse(localStorage.getItem('value'));

  return (
    <div className="r-wrapper">
      <div className="r-left">
        <div className="r-person-img-wrapper">
          <img src={require('../../img/person.jpeg')} alt="" className='r-person-img' />
        </div>
        <div className="r-title-wrapper">
          <h3 className="r-title">Contact</h3>
        </div>
        <div className="r-contact-wrapper">
          <div className="r-contact-l">
            <div className="icon"><Phone /></div>
            <div className="icon icon-middle"><Mail /></div>
            <div className="icon"><Home /></div>
          </div>
          <div className="r-contact-r">
            <div className="icon-info">{data.data.number}</div>
            <div className="icon-info icon-info-middle">{data.data.email}</div>
            <div className="icon-info">{data.data.Address}</div>
          </div>
        </div>
        <div className="r-title-wrapper">
          <div className="r-education-l">
            <Edu />
          </div>
          <div className="r-education-r">
            <h3 className="r-title">Education</h3>
          </div>
        </div>
        <div className="education-level-wrapper">
          <div className="education-level-detail">
            <div className="education-level">
              School
            </div>
            <div className="education-institute">
              {data.data.school}
            </div>
          </div>
          <div className="education-level-detail">
            <div className="education-level">
              Ten Plus Two
            </div>
            <div className="education-institute">
              {data.data.tenplustwo}
            </div>
          </div>
          <div className="education-level-detail">
            <div className="education-level">
              {data.data.bachelorssubject}
            </div>
            <div className="education-institute">
              {data.data.bachelorscollege}
            </div>
          </div>
        </div>
      </div>
      <div className="r-right">
        <div className="r-right-name">
          <div className="r-right-name-wrapper">
            <div className="person-name">
              <h2 className='first-name'>{data.data.firstname}</h2>
              <h2>{data.data.lastname}</h2>
            </div>
            <h3 className="student-type">{data.data.currentpost}</h3>
          </div>
          <div className="r-right-name-pill">

          </div>
        </div>
        <div className="r-right-about-me-title">
          <h3 className="r-title">About Me</h3>
        </div>
        <div className="r-right-desc">
          <p>{data.data.about}</p>
        </div>
        <div className="r-right-about-me-title">
          <h3 className="r-title">Projects</h3>
        </div>
        <div className="r-right-desc">
          <p>{data.data.projects}</p>
        </div>
      </div>
    </div>
  )
}

export default Cv
