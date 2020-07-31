import React,{Component} from "react"
import { Navbar,Nav,Container,Row,Col} from "react-bootstrap"
import { Widget ,addResponseMessage} from 'react-chat-widget';
import axios from "axios"
 import logo from "./images/Sparrow Bird.png"
import 'react-chat-widget/lib/styles.css';




class Home extends Component{
    constructor(props)
    {
        super(props)
      
        this.state ={
            
        }
    }
    componentDidMount()
{
    addResponseMessage("NEED SOME HELP??");
}
    handleNewUserMessage = async () => {
        axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
           var aa=response["data"]["slip"]["advice"]
        
            addResponseMessage(aa)
        })
        .catch(function (error) {
          console.log(error);
        })
      
     }

    render()
    {
        return(    <>
       
        
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{fontFamily:"",fontSize : "20px", color:"#ffffff", textAlign:"center" }}href=""><strong>Maxion</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link className="mr-4" href="#features">Products</Nav.Link>
                <Nav.Link className="mr-4" href="#pricing">Features</Nav.Link>
                <Nav.Link className="mr-4" href="#pricing">Use Cases</Nav.Link>
             
              <Nav.Link className="mr-5" href="#features">Pricings</Nav.Link>
              
              </Nav>
              <Nav>
              
               
                   
                  <Nav.Link ><strong>LOGIN</strong></Nav.Link>                                                   }
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container style={{  position: "fixed",
 
  
  top: "25%",
  left:"12%"
  }}>
          
  <Row >
    <Col className="mt-5 "sm={4}>
     <h2 style={{fontFamily:"",fontSize : "55px", color:"#ffffff" }}><strong>Where</strong></h2>
     <h2 style={{fontFamily:"",fontSize : "55px", color:"#ffffff" }}><strong>words</strong></h2>
     <h2 style={{fontFamily:"",fontSize : "55px", color:"#ffffff" }}><strong>Fail,</strong></h2>
     <h2 style={{fontFamily:"",fontSize : "55px", color:"#ffffff" }}><strong>Music</strong></h2>
     <h2 style={{fontFamily:"",fontSize : "55px", color:"#ffffff" }}><strong>speaks.</strong></h2>



    </Col>
   
  </Row>
  </Container>
  <Widget handleNewUserMessage={this.handleNewUserMessage}
    
    title="Hi There!"
    profileAvatar={logo}
    subtitle="The Team usually replies in few minutes"/>
 


          </>)
    }
}
  export default Home