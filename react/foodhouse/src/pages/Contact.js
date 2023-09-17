import React from "react";
import '../styles/Contact.css'
import PizzaLeft from '../assets/pizza4.jpg'

const Contact = () => {
    return ( 
        <div className = "contact">
            <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}>
            </div>
            <div className="rightSide">
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
    {/* <label class="form-check-label" for="exampleCheck1"></label> */}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                {/* <form method="POST" id="contact-form">
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="성함" />
                    <label htmlFor="email"></label>
                    <input type ="email" placeholder="사용하는 이메일 주소"/>
                    <label htmlFor="message"></label>
                    <textarea name = "message" placeholder="메시지를 입력하세요"></textarea>
                    <button type="submit">메세지 보내기</button>
                </form> */}
            </div>
        </div>
     );
}
 
export default Contact;