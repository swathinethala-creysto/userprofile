import React from "react";
import file_attach from "./file_attach.png";
function UserProfile() {
  return (
    <div>
      <div className="form_card">
        <div className="form_data">
          <div>
            <div>
              <img
                src="https://media.istockphoto.com/id/518256134/photo/charminar.jpg?s=612x612&w=0&k=20&c=El2-xCRHhkaDHJwz4cUzNmJ8E_FVAqwutwQIvn4vReA="
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="img_card">
                <img
                  alt="myimg"
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  width="50%"
                  height="50%"
                  className="img_radius"
                />
              </div>
              <div className="content_card">
                <h1>Neil Sims</h1>
                <p>Senior Software Engineer</p>
                <p>New York, USA</p>
                <div className="flex_inputs contentBtn">
                  <div>
                    <button className="btnStyle">
                      <span>&#177;</span>Contact
                    </button>
                  </div>
                  <div>
                    <button className="btnstyle2a">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form_card second">
        <div className="below_img">
          <img
            src="https://media.istockphoto.com/id/518256134/photo/charminar.jpg?s=612x612&w=0&k=20&c=El2-xCRHhkaDHJwz4cUzNmJ8E_FVAqwutwQIvn4vReA="
            alt="below"
            width="100px"
            height="100px"
            className="second_img"
          />
        </div>
        <div>
          <div className="icon_style">
            <div>
              <img
              src={file_attach}
            alt="below"
            width="20px"
            height="20px"
            className="second_img"
          />
            </div>
            <div>
              <h4 className="title">choose Image</h4>
           </div>
       </div>
          
           <div>JPG,GIF or PNG </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
