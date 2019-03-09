import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Form extends Component {
    render() {

        let danger =`
        <div class="well">
            <form autocomplete="nope" name="applicationForm" id="applicationForm" >
                <input type="hidden" name="sessionId" value='c7045f17-4206-11e9-8a6a-8700af8884c4' />
                <input type="hidden" name="page" value='offerPage' />
                <div class="messages"></div>
                <div class="controls">
                    <div class="row text-right push-bottom">* Required </div>

                    <div class="col-md-8 push-top">
                        <div class="form-group">
                            <label>First Name*</label>
                            <input type="text" name="custfname" class="form-control" size="20" maxlength="12" type="text" value="" OnkeyPress="return lettersOnly(event);" />
                        </div>
                    </div>
                    <div class="col-md-4 push-top">
                        <div class="form-group">
                            <label>Middle Initial</label>
                            <input type="text" name="custmidname" class="form-control" value="" maxlength="1" OnkeyPress="return lettersOnly(event);" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label>Last Name*</label>
                            <input type="text" name="custlname" class="form-control" value="" maxlength="17" OnkeyPress="return lettersOnly(event);" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Suffix</label>
                            <select name="suffix" size="1" class="form-control">
                                <option value=""></option>

                                <option value="JR" >JR</option>

                                <option value="SR" >SR</option>

                                <option value="II" >II</option>

                                <option value="III" >III</option>

                                <option value="IV" >IV</option>

                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Home Address* (No PO Boxes)</label>
                            <input type="text" name="mailingaddr1" class="form-control" value="" maxlength="26" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Address Line 2</label>
                            <input type="text" name="mailingaddr2" class="form-control" value="" maxlength="26" />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group">
                            <label>City*</label>
                            <input type="text" name="mailingcity" class="form-control" value="" maxlength="18" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>State*</label>
                            <select name="mailingstate" size="1" style="height:34px" class="col-md-12 col-xs-12 push-bottom-mobile" >
                                <option value="-1">Select State</option>
                                <option value='AA'>AA Military</option><option value='AE'>AE Military</option><option value='AP'>AP Military</option><option value='AL'>Alabama</option><option value='AK'>Alaska</option><option value='AZ'>Arizona</option><option value='AR'>Arkansas</option><option value='CA'>California</option><option value='CO'>Colorado</option><option value='CT'>Connecticut</option><option value='DE'>Delaware</option><option value='DC'>District of Columbia</option><option value='FL'>Florida</option><option value='GA'>Georgia</option><option value='HI'>Hawaii</option><option value='ID'>Idaho</option><option value='IL'>Illinois</option><option value='IN'>Indiana</option><option value='IA'>Iowa</option><option value='KS'>Kansas</option><option value='KY'>Kentucky</option><option value='LA'>Louisiana</option><option value='ME'>Maine</option><option value='MD'>Maryland</option><option value='MA'>Massachusetts</option><option value='MI'>Michigan</option><option value='MN'>Minnesota</option><option value='MS'>Mississippi</option><option value='MO'>Missouri</option><option value='MT'>Montana</option><option value='NE'>Nebraska</option><option value='NV'>Nevada</option><option value='NH'>New Hampshire</option><option value='NJ'>New Jersey</option><option value='NM'>New Mexico</option><option value='NY'>New York</option><option value='NC'>North Carolina</option><option value='ND'>North Dakota</option><option value='OH'>Ohio</option><option value='OK'>Oklahoma</option><option value='OR'>Oregon</option><option value='PA'>Pennsylvania</option><option value='RI'>Rhode Island</option><option value='SC'>South Carolina</option><option value='SD'>South Dakota</option><option value='TN'>Tennessee</option><option value='TX'>Texas</option><option value='UT'>Utah</option><option value='VT'>Vermont</option><option value='VA'>Virginia</option><option value='WA'>Washington</option><option value='WI'>Wisconsin</option><option value='WY'>Wyoming</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Zip Code*</label>
                            <input type="text" name="mailingzip" class="form-control" value="" maxlength="5" OnkeyPress="return digitsOnly(event)" onKeyDown="TabNext(this,'down',5)" onKeyUp="TabNext(this,'up',5,this.form.custemail1)" onBlur="validatesNumeric(this)" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Email Address*</label>
                            <input type="email" name="custemail1" class="form-control" maxlength="45" value="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Home Phone*</label>
                            <input type="tel" name="custphone" id="custphone" class="form-control" value="" OnkeyPress="return digitsOnly(event);" onKeyUp="TabNext(this,'up',13,this.form.custcellphone)" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Mobile Phone*</label>
                            <input type="text" name="custcellphone" id="custcellphone" class="form-control" value="" OnkeyPress="return digitsOnly(event)" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p> (Minimum one phone number required.)</p>
                    </div>
                    <div class="col-md-12 push-top">
                        <div class="form-group">
                            <label>Do You Have an Active Credit/Debit/Prepaid Card?* </label>
                            <select name="activeDebitCreditCard" size="1" style="height:34px" class="col-md-12 col-xs-12 push-bottom-mobile" >
                                <option value="-1">Please Select</option>
                                <option value='YES' >Yes</option>
                                <option value='NO' >No</option>
                            </select>
                        </div>
                    </div>
                    <div class="row push-top">
                        <div class="col-md-12 center-text push-top"> <button class="btn btn-success btn-lg" role="button">Continue >>></button> </div>
                    </div>
                </div>
            </form>
        </div>
    `

        return (
            <div dangerouslySetInnerHTML={{ __html: danger}} />
        );
    }
}
export default Form;
