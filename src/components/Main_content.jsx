import React from 'react'
import Personal_Details from './Personal_Details';
import './Main_content.css'
import Address from './Address';
import Upload_files from './Upload_files';

function Main_content() {
  return (
    <>
      <section className="main-body container-fluid">
        <div className="content-body">
          <div className="icon-space">
                <span className="material-symbols-outlined"> groups </span>
                <p>Welcome User</p>
            </div>
            <div className="form-space">
                <form action="" className='row g-3'>
                    <Personal_Details />
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="h6 ms-1">Residential Address</p>
                            <Address />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between fs-6">
                                <p className="h6 ms-1">Permanent Address</p>
                                <div>
                                    <small className='me-1'>Same as Residential</small>
                                    <input type="checkbox" name='sameAddress' id='sameAddress' style={{ backgroundColor:"white"}} />
                                </div>
                            </div>
                            <Address />
                        </div>
                    </div>
                    <Upload_files />
                </form>         {/* form ends */}
            </div>          {/* form-space ends */}    
        </div>      {/* content-body ends*/}
      </section>
    </>
  );
}

export default Main_content