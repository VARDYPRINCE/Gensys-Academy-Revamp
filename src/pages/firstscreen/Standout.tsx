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
    // <div className="standoutwrapper">
    //   <div>
    //     <img src={float1} alt="" />
    //   </div>
    //   <div className="standoutheader">Why We Stand Out</div>
    //   <div className="firststandoutwrapper">
    //     <div className="floated2">
    //       <img src={float2} alt="" />
    //     </div>
    //     <div>
    //       <img src={paul} alt="" />
    //     </div>
    //     <div className="standoutreasons">
    //       <div className="stanoutwid">
    //         <div className="satnding11">
    //           <img src={mentorship} alt="" />
    //           <div>One-on-One Mentorship</div>
    //         </div>
    //         <div className="standngtxt">
    //           Our commitment to mentorship with our interns is immeasurable,
    //           with close guidance and support making the learning experience
    //           favourable.
    //         </div>
    //       </div>

    //       <div className="stanoutwid">
    //         <div className="satnding11">
    //           <img src={friendlylearning} alt="" />
    //           <div>Friendly Learning Environment</div>
    //         </div>
    //         <div className="standngtxt">
    //           We have a friendly atmospheric environment that suits our interns
    //           enabling them to feel the comfort of learning.
    //         </div>
    //       </div>

    //       <div className="stanoutwid">
    //         <div className="satnding11">
    //           <img src={community} alt="" />
    //           <div>Friendly Learning Environment</div>
    //         </div>
    //         <div className="standngtxt">
    //           We have a friendly atmospheric environment that suits our interns
    //           enabling them to feel the comfort of learning.
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="firststandoutwrapper" id="bottomstand">
    //     <div className="floated2"></div>
    //     <div className="standoutreasons">
    //       <div className="stanoutwid">
    //         <div className="satnding11">
    //           <img src={realwork} alt="" />
    //           <div>Gain Real Work Experience</div>
    //         </div>
    //         <div className="standngtxt">
    //         Our curriculum is spiced up with an implementation phase where our interns are expose to real work experience.
    //         </div>
    //       </div>

    //       <div className="stanoutwid">
    //         <div className="satnding11">
    //           <img src={personalgrt} alt="" />
    //           <div>Personal Growth</div>
    //         </div>
    //         <div className="standngtxt">
    //         We help our interns inculcate a growth mindset enabling them become one of the best in their respective career pathways and so much more.
    //         </div>
    //       </div>

    //       <div className="stanoutwid">
    //         <div className="satnding11">
    //           <img src={jobplace} alt="" />
    //           <div>Get Job Placement</div>
    //         </div>
    //         <div className="standngtxt">
    //           We fix our interns in job positions to showcase their work
    //           experience in real time at tech firms to give them further career
    //           opportunities.
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <img src={twins} alt="" />
    //     </div>
    //   </div>
    // </div>

    <section className="standoutwrapper">
      <figure>
        <img src={float1} alt="Floating graphic" />
      </figure>
      <h2 className="standoutheader">Why We Stand Out</h2>

      <div className="firststandoutwrapper">
        <figure className="floated2">
          <img src={float2} alt="Additional floating graphic" />
        </figure>
        <figure>
          <img src={paul} alt="Image of Paul" />
        </figure>
        <div className="standoutreasons">
          <article className="stanoutwid">
            <div className="satnding11">
              <img src={mentorship} alt="One-on-One Mentorship" />
              <h3>One-on-One Mentorship</h3>
            </div>
            <p className="standngtxt">
              Our commitment to mentorship with our interns is immeasurable,
              with close guidance and support making the learning experience
              favorable.
            </p>
          </article>

          <article className="stanoutwid">
            <div className="satnding11">
              <img src={friendlylearning} alt="Friendly Learning Environment" />
              <h3>Friendly Learning Environment</h3>
            </div>
            <p className="standngtxt">
              We have a friendly atmospheric environment that suits our interns
              enabling them to feel the comfort of learning.
            </p>
          </article>

          <article className="stanoutwid">
            <div className="satnding11">
              <img src={community} alt="Community Engagement" />
              <h3>Community Engagement</h3>
            </div>
            <p className="standngtxt">
              We foster a sense of community among our interns, encouraging
              collaboration and support.
            </p>
          </article>
        </div>
      </div>

      <div className="firststandoutwrapper" id="bottomstand">
        <figure className="floated2"></figure>
        <div className="standoutreasons">
          <article className="stanoutwid">
            <div className="satnding11">
              <img src={realwork} alt="Gain Real Work Experience" />
              <h3>Gain Real Work Experience</h3>
            </div>
            <p className="standngtxt">
              Our curriculum is spiced up with an implementation phase where our
              interns are exposed to real work experience.
            </p>
          </article>

          <article className="stanoutwid">
            <div className="satnding11">
              <img src={personalgrt} alt="Personal Growth" />
              <h3>Personal Growth</h3>
            </div>
            <p className="standngtxt">
              We help our interns inculcate a growth mindset enabling them to
              become one of the best in their respective career pathways and so
              much more.
            </p>
          </article>

          <article className="stanoutwid">
            <div className="satnding11">
              <img src={jobplace} alt="Get Job Placement" />
              <h3>Get Job Placement</h3>
            </div>
            <p className="standngtxt">
              We fix our interns in job positions to showcase their work
              experience in real time at tech firms to give them further career
              opportunities.
            </p>
          </article>
        </div>
        <figure>
          <img src={twins} alt="Twins graphic" />
        </figure>
      </div>
    </section>
  );
};

export default Standout;
