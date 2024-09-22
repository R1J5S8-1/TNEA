import { useRef, useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import SpecialReservation from "./SpecialReservation";
import ScholarshipInformation from "./ScholarshipInformation";
import SchoolOfStudy from "./SchoolOfStudy";
import AcademicInformation from "./AcademicInformation";
import Preview from "./Preview";
import PaymentDetails from "./PaymentDetails";

function FormNav() {
  const navRef = useRef(null);
  const [formPage, setFormPage] = useState(5);
  const [data, setData] = useState({
    name: "User",
    parentName: "",
    address: "",
    permanentAddress: "",
    state: "",
    district: "",
    taluk: "",
    pincode: "",
    nativeDistrict: "",
    email: "",
    mobile: "",
    dob: "2001-09-03",
    gender: "",
    motherTongue: "",
    nationality: "",
    nativity: "",
    religion: "",
    community: "",
    caste: "",
    aadhar: "",
    sports: "",
    exService: "",
    differntlyAbled: "",
    TFC: "",
    parrentOccupation: "",
    annualIncome: "",
    firstGraduate: "",
    postMatricScholarship: "",
    schoolCategory: "",
    stateOfStudy: "",
    schoolCivicStatus: "",
    schoolOfStudyGovt: "",
    yearOfPassingVI: "",
    nameOfSchoolVI: "",
    districtVI: "",
    stateVI: "",
    yearOfPassingVII: "",
    nameOfSchoolVII: "",
    districtVII: "",
    stateVII: "",
    yearOfPassingVIII: "",
    nameOfSchoolVIII: "",
    districtVIII: "",
    stateVIII: "",
    yearOfPassingIX: "",
    nameOfSchoolIX: "",
    districtIX: "",
    stateIX: "",
    yearOfPassingX: "",
    nameOfSchoolX: "",
    districtX: "",
    stateX: "",
    yearOfPassingXI: "",
    nameOfSchoolXI: "",
    districtXI: "",
    stateXI: "",
    yearOfPassingXII: "",
    nameOfSchoolXII: "",
    districtXII: "",
    stateXII: "",
    qualifyingExam: "",
    boardOfExam: "",
    HSCRegistrationNo: "",
    HSCRollNo: "",
    qualifiedYear: "",
    HSCGroup: "",
    HSCGroupCode: "",
    HSCMedium: "",
    HSCMarkMax: "",
    HSCMarkObtained: "",
    SSLCMarkMax: "",
    SSLCMarkObtained: "",
    communityNumber: "",
    nativityNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleClick = (page) => {
    setFormPage(page);
  };

  useEffect(() => {
    if (navRef.current) {
      

      const progressBar = document.querySelector(".progressBar");
      if (progressBar) {
        progressBar.style.width = `calc(${
          (formPage / 8) * 100
        }% - (1/8) * 100%)`;
        progressBar.style.margin = "0 75px";
      }
      const pStyle = navRef.current.querySelectorAll("p");
      pStyle.forEach((p) => {
        p.style.margin = "none";
      });

      // Select all <a> elements within the nav and apply the style
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
        link.style.borderBottom = "none";
      });
    }
    if (formPage === 1) {
      setFormPage(1);
      // Select all <a> elements within the nav and apply the style
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the first <a> element within the nav and apply the style
      const firstLink = navRef.current.querySelector("button");
      firstLink.style.color = "green";
      firstLink.style.textDecoration = "none";
      firstLink.style.borderBottom = "2px solid green";
      
    } else if (formPage === 2) {
      setFormPage(2);
      // Select all <a> elements within the nav and apply the style for the second <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
        link.style.marginBottom = "none";
      });
      // Select the second <a> element within the nav and apply the style
      const secondLink = navRef.current.querySelectorAll("button")[1];
      secondLink.style.color = "green";
      secondLink.style.textDecoration = "none";
      secondLink.style.borderBottom = "2px solid green";
    } else if (formPage === 3) {
      setFormPage(3);
      // Select all <a> elements within the nav and apply the style for the third <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the third <a> element within the nav and apply the style
      const thirdLink = navRef.current.querySelectorAll("button")[2];
      thirdLink.style.color = "green";
      thirdLink.style.textDecoration = "none";
      thirdLink.style.borderBottom = "2px solid green";
    } else if (formPage === 4) {
      setFormPage(4);
      // Select all <a> elements within the nav and apply the style for the fourth <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the fourth <a> element within the nav and apply the style
      const fourthLink = navRef.current.querySelectorAll("button")[3];
      fourthLink.style.color = "green";
      fourthLink.style.textDecoration = "none";
      fourthLink.style.borderBottom = "2px solid green";
    } else if (formPage === 5) {
      setFormPage(5);
      // Select all <a> elements within the nav and apply the style for the fourth <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the fifth <a> element within the nav and apply the style
      const fifthLink = navRef.current.querySelectorAll("button")[4];
      fifthLink.style.color = "green";
      fifthLink.style.textDecoration = "none";
      fifthLink.style.borderBottom = "2px solid green";
    } else if (formPage === 6) {
      setFormPage(6);
      // Select all <a> elements within the nav and apply the style for the fourth <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the sixth <a> element within the nav and apply the style
      const sixthLink = navRef.current.querySelectorAll("button")[5];
      sixthLink.style.color = "green";
      sixthLink.style.textDecoration = "none";
      sixthLink.style.borderBottom = "2px solid green";
    } else if (formPage === 7) {
      setFormPage(7);
      // Select all <a> elements within the nav and apply the style for the fourth <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the seventh <a> element within the nav and apply the style
      const seventhLink = navRef.current.querySelectorAll("button")[6];
      seventhLink.style.color = "green";
      seventhLink.style.textDecoration = "none";
      seventhLink.style.borderBottom = "2px solid green";
    } else if (formPage === 8) {
      setFormPage(8);
      // Select all <a> elements within the nav and apply the style for the fourth <a> element within the nav
      const links = navRef.current.querySelectorAll("button");
      links.forEach((link) => {
        link.style.color = "black";
        link.style.textDecoration = "none";
      });
      // Select the eighth <a> element within the nav and apply the style
      const eighthLink = navRef.current.querySelectorAll("button")[7];
      eighthLink.style.color = "green";
      eighthLink.style.textDecoration = "none";
      eighthLink.style.borderBottom = "2px solid green";
    }
  }, [formPage]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameSchoolAsVI(checked);

    if (checked) {
      setData((prevData) => ({
        ...prevData,
        nameOfSchoolVII: prevData.nameOfSchoolVI,
        districtVII: prevData.districtVI,
        stateVII: prevData.stateVI,
        yearOfPassingVII: parseInt(prevData.yearOfPassingVI) + 1,
        nameOfSchoolVIII: prevData.nameOfSchoolVI,
        districtVIII: prevData.districtVI,
        stateVIII: prevData.stateVI,
        yearOfPassingVIII: parseInt(prevData.yearOfPassingVI) + 2,
        nameOfSchoolIX: prevData.nameOfSchoolVI,
        districtIX: prevData.districtVI,
        stateIX: prevData.stateVI,
        yearOfPassingIX: parseInt(prevData.yearOfPassingVI) + 3,
        nameOfSchoolX: prevData.nameOfSchoolVI,
        districtX: prevData.districtVI,
        stateX: prevData.stateVI,
        yearOfPassingX: parseInt(prevData.yearOfPassingVI) + 4,
        nameOfSchoolXI: prevData.nameOfSchoolVI,
        districtXI: prevData.districtVI,
        stateXI: prevData.stateVI,
        yearOfPassingXI: parseInt(prevData.yearOfPassingVI) + 5,
        nameOfSchoolXII: prevData.nameOfSchoolVI,
        districtXII: prevData.districtVI,
        stateXII: prevData.stateVI,
        yearOfPassingXII: parseInt(prevData.yearOfPassingVI) + 6,
      }));
    }
  };


  const handleSave = () => {
    // const validationErrors = validateForm();
    // setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    //   if (formPage < 8) {
    //     setFormPage((prevPage) => prevPage + 1);
    //   }
    // }

    if (formPage < 8) {
      setFormPage((prevPage) => prevPage + 1);
    }
  };

  const handleBack = () => {
    if (formPage > 1 && formPage < 8) {
      setFormPage((prevPage) => prevPage - 1);
    }
  };


  return (
    <>
      <div
        ref={navRef}
        className="nav d-flex justify-content-around flex-nowrap"
      >
        <div>
          <button onClick={handleClick.bind(this, 1)} className="text-truncate">
            <p>Personal Details</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 2)} className="text-truncate">
            <p>Special Reservation</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 3)} className="text-truncate">
            <p>Scholarship Details</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 4)} className="text-truncate">
            <p>school of study</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 5)} className="text-truncate">
            <p>Academic info</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 6)} className="text-truncate">
            <p>Preview</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 7)} className="text-truncate">
            <p>Payment Details</p>
          </button>
        </div>
        <div>
          <button onClick={handleClick.bind(this, 8)} className="text-truncate">
            <p>Generate Report</p>
          </button>
        </div>
      </div>
      <div
        className="progress"
        style={{
          height: "2rem",
          justifyContent: "space-around",
          position: "relative",
        }}
      >
        <span className="circled-text active">1</span>
        <span className="circled-text active">2</span>
        <span className="circled-text active">3</span>
        <span className="circled-text active">4</span>
        <span className="circled-text active">5</span>
        <span className="circled-text active">6</span>
        <span className="circled-text active">7</span>
        <span className="circled-text active">8</span>
      </div>
      <span className="progressBar d-block"></span>
      <br />
      <div>
        {formPage === 1 && (
          <PersonalDetails
            data={data}
            setData={setData}
            onChange={handleChange}
            next={handleSave}
          />
        )}
        {formPage === 2 && (
          <SpecialReservation
            data={data}
            onChange={handleChange}
            next={handleSave}
            back={handleBack}
          />
        )}
        {formPage === 3 && (
          <ScholarshipInformation
            data={data}
            onChange={handleChange}
            next={handleSave}
            back={handleBack}
          />
        )}
        {formPage === 4 && (
          <SchoolOfStudy
            data={data}
            setData={setData}
            onChange={handleChange}
            checkBoxChange={handleCheckboxChange}
            next={handleSave}
            back={handleBack}
          />
        )}
        {formPage === 5 && (
          <AcademicInformation
            data={data}
            onChange={handleChange}
            next={handleSave}
            back={handleBack}
          />
        )}
        {formPage === 6 && (
          <Preview
            data={data}
            formPage={formPage}
            setFormPage={setFormPage}
            onChange={handleChange}
            next={handleSave}
            back={handleBack}
          />
        )}
        {formPage === 7 && <PaymentDetails />}
      </div>
    </>
  );
}

export default FormNav;
