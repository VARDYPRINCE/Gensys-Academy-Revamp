import "../landingstyles/landingpage.css";
import float1 from "../../assets/images/Group 58.png";
import float2 from "../../assets/images/Group 1.png";
import paul from "../../assets/images/_MG_0920 2.png";
import mentorship from "../../assets/images/Group 13.png";
import friendlylearning from "../../assets/images/Group 16.png";
import community from "../../assets/images/Group 14.png";
import twins from "../../assets/images/_MG_0887 1.png";
import realwork from "../../assets/images/Group 18.png";
import personalgrt from "../../assets/images/Group 17.png";
import jobplace from "../../assets/images/Frame 1006.png";
const Standout = () => {
  return (
    <div className="standoutwrapper">
      <div>
        <img src={float1} alt="" />
      </div>
      <div className="standoutheader">Why We Stand Out</div>
      <div className="firststandoutwrapper">
        <div className="floated2">
          <img src={float2} alt="" />
        </div>
        <div>
          <img src={paul} alt="" />
        </div>
        <div className="standoutreasons">
          <div className="stanoutwid">
            <div className="satnding11">
              <img src={mentorship} alt="" />
              <div>One-on-One Mentorship</div>
            </div>
            <div className="standngtxt">
              Our commitment to mentorship with our interns is immeasurable,
              with close guidance and support making the learning experience
              favourable.
            </div>
          </div>

          <div className="stanoutwid">
            <div className="satnding11">
              <img src={friendlylearning} alt="" />
              <div>Friendly Learning Environment</div>
            </div>
            <div className="standngtxt">
              We have a friendly atmospheric environment that suits our interns
              enabling them to feel the comfort of learning.
            </div>
          </div>

          <div className="stanoutwid">
            <div className="satnding11">
              <img src={community} alt="" />
              <div>Friendly Learning Environment</div>
            </div>
            <div className="standngtxt">
              We have a friendly atmospheric environment that suits our interns
              enabling them to feel the comfort of learning.
            </div>
          </div>
        </div>
      </div>
      
      <div className="firststandoutwrapper" id="bottomstand">
        <div className="floated2"></div>
        <div className="standoutreasons">
          <div className="stanoutwid">
            <div className="satnding11">
              <img src={realwork} alt="" />
              <div>Gain Real Work Experience</div>
            </div>
            <div className="standngtxt">
            Our curriculum is spiced up with an implementation phase where our interns are expose to real work experience.
            </div>
          </div>

          <div className="stanoutwid">
            <div className="satnding11">
              <img src={personalgrt} alt="" />
              <div>Personal Growth</div>
            </div>
            <div className="standngtxt">
            We help our interns inculcate a growth mindset enabling them become one of the best in their respective career pathways and so much more.
            </div>
          </div>

          <div className="stanoutwid">
            <div className="satnding11">
              <img src={jobplace} alt="" />
              <div>Get Job Placement</div>
            </div>
            <div className="standngtxt">
              We fix our interns in job positions to showcase their work
              experience in real time at tech firms to give them further career
              opportunities.
            </div>
          </div>
        </div>
        <div>
          <img src={twins} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Standout;
