import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/style/Contact.css"

const Contact = () => {
    return ( 
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage:`url( ${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact us</h1>
                <form id="contact-form" method="POST">
                    <label>고객성명</label>
                    <input name = "name" placeholder="성함" type="text" />

                    <label>이메일주소</label>
                    <input name = "email" placeholder='사용하는 이메일주소' 
                    type="email" />

                    <label>상담내역</label>
                    <textarea rows="6"
                    placeholder='메시지를 입력하세요'
                    required>
                        </textarea>
                        <button type="submit">메시지를 보내기</button>
                </form>

            </div>
        </div>
     );
}
 
export default Contact;