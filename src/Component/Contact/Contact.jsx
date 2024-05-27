import { Col, Container, Row ,Button ,Form } from "react-bootstrap"
import "./Contact.css"
import contact_image from "./../../assets/image/getInTouch/contact-img.svg";
import { useState } from "react";

function Contact() {

  // STATE

  const initInputValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  }

  const [inputValue , setInputValue] = useState(initInputValue);

  const [buttonText , setButtonText] = useState('send')

  const [result , setResult] =useState("")

  // == STATE ==

  const misInput =
  inputValue.firstName == "" ||
  inputValue.lastName == "" ||
  inputValue.email == "" ||
    inputValue.phoneNumber == ""
   ;

  //  FUNCTIONS 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1394ff52-77b0-4d7b-87c2-841bf978a50b");

    if (!misInput) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult("Form Submitted Successfully");
      result.target.value.style.color = 'green'
      setButtonText("Send")
      setInputValue(initInputValue)
      event.target.reset();
    } else {
      setButtonText("Send")

      setResult("SomeThing Error ! Try Agine ...");
      event.target.reset();
    // setResult(" ");

    }
    
  };

  const handleInputChange = (event) => {
    // Reset the result message when input values change
    setResult("");
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prev) =>{
      return{
        ...inputValue,
        [name] :value
      
  }});
  };

  // FUNCTIONS



  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <div className="contact-img">
              <img src={contact_image} alt="contact image" />
            </div>
          </Col>
          <Col sm={12} md={7}>
          <Form onSubmit={handleFormSubmit}>
            <div className="form-title mb-4">
              <h1>Get In Touch</h1>
            </div>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={inputValue.firstName} onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Control type="text" placeholder="Enter Last Name" name="lastName" value={inputValue.lastName} onChange={handleInputChange}/>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}controlId="email">
                  <Form.Control type="email" placeholder="example@gmail.com" name="email" value={inputValue.email} onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="phoneNumber">
                  <Form.Control type="tel" placeholder="Phone No." name="phoneNumber" value={inputValue.phoneNumber} onChange={handleInputChange}/>
                </Form.Group>
              </Row >
              <Form.Group className="mb-3" controlId="message">
                <Form.Control as="textarea" rows={5} placeholder="Message" name="message" value={inputValue.message} onChange={handleInputChange}/>
              </Form.Group>

              <Button type="submit" >
                <span>{buttonText}</span>
              </Button>
            </Form>
              <div className="message-sending">
                  <span style={{fontSize : "30px"}} className={misInput ? "red" : "green"}>{result}</span>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
