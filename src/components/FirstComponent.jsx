import React from 'react'

const FirstComponent = () => {
  return (
    <div>

     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">

                      <label htmlFor="" className="form-label">PRODUCT NAME</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">CATEGORY</label>
                    <input type="text" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">

                        <label htmlFor="" className="form-label">PRICE</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">

                        <label htmlFor="" className="form-label">MANUFACTURING DATE</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">

                        <label htmlFor="" className="form-label">EXPIRY</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">

                        <label htmlFor="" className="form-label">MANUFACTURER NAME</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">

                        <button className="btn btn-success">SUBMIT</button>


                    </div>
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}

export default FirstComponent