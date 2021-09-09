import React, { Component } from 'react';

class RegistrationAddress extends React.Component {
    render() { 
        return (
            <React.Fragment>
            <div className="card shadow-sm mt-2">
                <div className="card-header bg-white text-dark text-uppercase">
                    Address Details
                </div>
                <div className="card-body">
                    <label className="">i. Permanent Address</label>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_no">Address No <span className="text-danger font-size-16">*</span></label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_street">Address Street <span className="text-danger font-size-16">*</span></label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_city">Address City</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_4">Address Line 4</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_state">Address State</label>
                                <input  type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_country_p">Address Country <span className="text-danger font-size-16">*</span></label>
                                <select className="form-control select2" required>
                                    <option selected disabled>Select Country</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_postal_code">Address Postal Code</label>
                                <input  type="text" className="form-control" pattern="^[0-9]{4,10}$"/>
                            </div>
                        </div>
                    </div>

                    <label className="">ii. Contact Address</label>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_no">Address No <span className="text-danger font-size-16">*</span></label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_street">Address Street <span className="text-danger font-size-16">*</span></label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_city">Address City</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_4">Address Line 4</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_state">Address State</label>
                                <input  type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_country_p">Address Country <span className="text-danger font-size-16">*</span></label>
                                <select className="form-control select2" required>
                                    <option selected disabled>Select Country</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="address_postal_code">Address Postal Code</label>
                                <input  type="text" className="form-control" pattern="^[0-9]{4,10}$"/>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="province">iii. Province <span className="text-danger font-size-16">*</span></label>
                                    <select id="province" name="province" className="form-control" required>
                                        <option selected disabled>Select Province</option>
                                        <option value="Central">Central</option>
                                        <option value="Eastern">Eastern</option>
                                        <option value="North Central">North Central</option>
                                        <option value="Northern">Northern</option>
                                        <option value="North Western">North Western</option>
                                        <option value="Sabaragamuwa">Sabaragamuwa</option>
                                        <option value="Southern">Southern</option>
                                        <option value="Uva">Uva</option>
                                        <option value="Western">Western</option>
                                    </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="shortname">iv. District <span className="text-danger font-size-16">*</span></label>
                                <select id="district" name="district" className="form-control select2" required>
                                    <option selected disabled>Select District</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="shortname">District No.</label>
                                <input id="district_no" name="district_no" type="text" className="form-control bg-light" disabled/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="nic">v. National Identity Card / Passport No. <span className="text-danger font-size-16">*</span> </label>
                                <input  id="nic" name="nic" type="text" className="form-control bg-light" disabled/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="mobile">vi. Mobile<span className="text-danger font-size-16">*</span> </label>
                                <input  id="mobile" name="mobile" type="text" className="form-control bg-light" readonly/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">vii. Email <span className="text-danger font-size-16">*</span> </label>
                                <input  id="email" name="email" type="email" className="form-control  bg-light" readonly/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="row my-4">
                <div class="col text-right">
                    <button  type="submit" class="btn btn-primary">  Next </button>
                </div>
            </div> 
            </React.Fragment>
        );
    }
}
 
export default RegistrationAddress;