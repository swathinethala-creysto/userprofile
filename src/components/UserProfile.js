import React,{useState} from "react";
import file_attach from "../Asserts/file_attach.png";
import pic from "../Asserts/pic.jpg";
import background from "../Asserts//background.jpeg";
import pp1 from "../Asserts//pp1.jpg";
const UserProfile=()=> {
  const [propic, setPropic] = useState(null)
  function previewFile() {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setPropic(reader.result)
        
        // setImgAdd((prv) => !prv);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <div>
      <div className="form_card">
        <div className="form_data">
          <div>
            <div>
              <img
                src={background}
                alt="John"
                style={{ width: "100%", height:"200px" }}
              />
              <div className="img_card">
                <img
                 src={pp1}
                  alt="myimg"
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
            src={propic||pic}
            alt="below"
            width="100px"
            height="100px"
            className="second_img"
          />
        </div>
        <div>
          <div className="icon_style">
            <div style={{paddingTop:'20px'}}>
               <input id="fileInput" type="file" onChange={previewFile} style={{visibility:'hidden', width:'1px'}} />
             <img
               src={file_attach}
               alt="below"
               width="20px"
               height="20px"
               className="second_img"
               onClick={()=>{
            document.getElementById('fileInput').click()}}
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
