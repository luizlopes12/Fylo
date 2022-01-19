import React, {useState} from "react";
import Button from './shared/Button'
function Form() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('foi');
    }
    const [teste, setTeste] = useState()
  return(
      <div className="form bg-footer">
          <div className="form-card container">
            <div className="row d-flex flex-column align-items-center">
                <div className="col-sm-9 col-12 text-center">
                    <h4>Get early access today</h4>
                    <p> It only takes a minute to sign up and our free starter 
                        tier is extremely generous. If you have any questions, 
                        our support team would be happy to help you.</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}  className="row d-flex mt-4">
                    <div className="col-sm-7 col-12 d-flex justify-content-end">
                    <input className='email' type="text" onChange={e=> setTeste(e.target.value)} value={teste} placeholder="email@example.com"/>
                    </div>
                    <div className="col">
                    <Button text='Get Started For Free'/>
                    </div>
                    </form>
                </div>
          </div>
      </div>
  );
}

export default Form;
