import React from "react";

class AppFunc extends React.Component{
    
    constructor(props) {
        super(props);
        this.state =  {
        fullName : "",
        emailId : "",
        roleAppliedFor : "web" ,
        coverLetter : "",
        termsAndCond : true,
  };
}

    render(){
        return (
            <>
            <p>Job application form </p>
            <form>
                <div>
                <label>Full Name : </label>
                <input type="text" value={this.state.fullName}/>
                </div>
                
                <br/>
                
                <div>
                <label>Email Id : </label>
                <input type="email" value={this.state.emailId}
                />
                </div>
                
                <br/>
                
                <label>Role Applied For : </label>
                <select>
                    <option value="mern">MERN Developer</option>
                    <option value="mean">MEAN Developer</option>
                    <option value="web">WEB Developer</option>
                </select>
                
                 
                 <br/>
                 <div>
                 <label>Cover letter : </label>
                 <textarea value={this.state.coverLetter}></textarea>
                 </div>

                <br />
                <div>
                    <input type="checkbox" value={this.state.termsAndCond}/>
                    <label>I agree the Terms and Conditions</label>
                </div>
                
                <br />
                <button>Submit</button>      
            </form>
            </>
        )
    }
}

export default AppFunc;