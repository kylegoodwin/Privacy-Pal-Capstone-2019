import React, { Component } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {Redirect} from 'react-router'

let apiKey = 'SG.KOunLzpMQMmfIF1ucbAZsw.'
apiKey += 'yETl8sf7U6gLpeezuq1YpuXO25gUIzYsuwY6f'
apiKey += 'VNBREM'

export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export class FinalPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  sendEmail = () => {
    let parentName = document.getElementById("parent-name").value;
    let parentEmail = document.getElementById("parent-email").value;
    let studentName = document.getElementById("student-name").value;

    if (parentEmail && parentName) {

      let email = {
        personalizations: [
          {
            to: [
              {
                email: parentEmail,
                name: parentName
              }
            ],
            dynamic_template_data: {
              parentName: parentName,
              sudentName: studentName
            }
          }
        ],
        from: {
          email: "app@privacypal.me",
          name: "Privacy Pal"
        },
        template_id: "d-560d6a6780244dfdae5f69f9dfd0f143"
      };

      fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email)
      }).then(res => {

        console.log(res);

        if(res.status == 400){
          alert("Error sending email with that information. Try again");
        }else{
          this.setState({clicked:true});
        }

      })
    } else {
      alert("Error with email information given!");
    }
  }

  render() {

    window.scrollTo(0, 0);
    if( this.state.clicked){
      return( <Redirect push to={"/"} />)
    }
    return (
      <div className="final-body">
          <Confetti
      width={window.innerWidth}
      height={500}
    />
        <div className="final-body-center">
          <img id="final-image" src="img/badge.svg"></img>
        </div>
        <h1>Congratulations!</h1>
        <p>
          You have finished the social media module and are ready to make friends online! To prove what you know, we will send your scores to your parents. You must also agree to this contract below!
          </p>
        <form>
          <label htmlFor="parent-email">Parents First Name:</label>
          <br></br>
          <input id="parent-name" type="text" />
          <br></br>
          <label htmlFor="parent-email">Parents Email:</label>
          <br></br>
          <input id="parent-email" type="text" />
          <br></br>
          <h1> I Agree to this Contract About my Social Media use:</h1>
          <ol>
            <li>Use social media in a way that is respectful to myself and others</li>
            <li>Limit my use and time on social media to a healthy amount</li>
            <li>Only interact with people I actually know and carefully check who I connect with</li>
            <li>Be conscious of what personal information I put online</li>
          </ol>
          <label htmlFor="student-name">Sign Here:</label><input id="student-name" type="text" />
          <br></br>
          <div class="final-body-center">
            <button onClick={this.sendEmail}> I agree, email my parents!</button>
          </div>
        </form>

      </div>
    )
  }
}