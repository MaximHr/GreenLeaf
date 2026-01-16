import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import SliderSection from "./SliderSection";
import uber from "./assets/uber.svg";
import sustainability from "./assets/sustainability.png";
import starbucks from "./assets/starbucks.svg";
import shopify from "./assets/shopify.svg";
import nike from "./assets/nike.svg";
import salesforce from "./assets/salesforce.svg";
import micrsoft from "./assets/microsoft.svg";
import meta from "./assets/meta.svg";
import mcdonalds from "./assets/mcdonalds.svg";
import maersk from "./assets/maersk.svg";
import mastercard from "./assets/mastercard.svg";
import google from "./assets/google.svg";
import delta from "./assets/delta.svg";
import apple from "./assets/apple.svg";
import amazon from "./assets/amazon.svg";
import att from "./assets/att.svg";
import atlassian from "./assets/atlassian.svg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import doodle from "./assets/doodle.svg";
import chart from "./assets/chart.svg";
import { Link } from "react-router-dom";

const Features = () => {
  const ref = useRef();
  const [animation, setAnimation] = useState("none");
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);
  const scrollHandler = () => {
    // if(window.scrollY > position of cards-contianer) {
    setAnimation("show 1s ease forwards");
    // }
  };
  return (
    <div className="features">
      <>
        <h1 className="title">
          Modern spend management built for climate-friendly business
        </h1>
        <h2>
          With every dip, tap, and swipe, GreenLeaf helps you manage spend and
          prepare for a more sustainable future.
        </h2>
      </>
      <div className="cards-container" ref={ref}>
        <Card
          anim={animation}
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          }
          title="All-in-one"
          text="Issue physical and virtual cards, send ACH and wires, and leverage spend controls."
        />
        <Card
          delay="0.5s"
          anim={animation}
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          }
          title="Yield & rewards"
          text="Earn 4.75% yield on deposits and climate rewards on your everyday card purchases."
        />
        <Card
          delay="1s"
          anim={animation}
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          }
          title="Secure"
          text="Funds are kept in FDIC-insured accounts, with fraud monitoring and industry-standard encryption."
        />
        <Card
          delay="1.5s"
          anim={animation}
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          }
          title="Always-on support"
          text="Dedicated account manager and support team."
        />
      </div>
      <div className="sections-container">
        <div className="section">
          <h1>Your climate compliance, verified</h1>
          <h2>
            Automatically track your emissions from spending, identify carbon
            and cost savings opportunities, and gain actionable insights and
            tips aligned with industry-standard frameworks.
          </h2>
          <Link to="/how-it-works" className="btn">
            Learn More
          </Link>
        </div>
        <div className="section">
          <div className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
              <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
            Claim <span className="bold">IRA</span> clean electricity tax credit
          </div>
          <div className="alert">
            <img className="alert-img" src={uber} alt="uber logo" />
            Cut emissions with an <span className="bold">Uber Green</span>{" "}
            policy
          </div>
          <img src={sustainability} alt="chart" />
        </div>
      </div>
      <div className="control-spend">
        <h1 className="title">Control spend</h1>
        <h2>
          Issue dedicated virtual cards with custom controls for your employees
          and vendors to stay on budget, ensure policy compliance, and avoid
          surprise charges.
        </h2>
      </div>
      <SliderSection />
      <div className="sections-container" id="section2">
        <div className="section">
          <div id="companies">
            <a
              target="_blank"
              href="https://www.microsoft.com/en-us/sustainability"
            >
              <img src={micrsoft} alt="micrsoft" />
            </a>
            <a target="_blank" href="https://www.apple.com/environment/">
              <img src={apple} alt="apple" />
            </a>
            <a target="_blank" href="https://sustainability.aboutamazon.com/">
              <img src={amazon} alt="amazon" />
            </a>
            <a target="_blank" href="https://sustainability.google/">
              <img src={google} alt="google" />
            </a>
            <a
              target="_blank"
              href="https://corporate.mcdonalds.com/corpmcd/our-purpose-and-impact/our-planet.html"
            >
              <img src={mcdonalds} alt="mcdonalds" />
            </a>
            <a target="_blank" href="https://sustainability.fb.com/">
              <img src={meta} alt="meta" />
            </a>
            <a
              target="_blank"
              href="https://www.uber.com/us/en/about/sustainability/"
            >
              <img src={uber} alt="uber" />
            </a>
            <a
              target="_blank"
              href="https://www.salesforce.com/company/sustainability/"
            >
              <img src={salesforce} alt="salesforce" />
            </a>
            <a
              target="_blank"
              href="https://www.starbucks.com/responsibility/planet/"
            >
              <img src={starbucks} alt="starbucks" />
            </a>
            <a target="_blank" href="https://www.maersk.com/sustainability">
              <img src={maersk} alt="maersk" />
            </a>
            <a target="_blank" href="https://www.att.com/">
              <img src={att} alt="att" />
            </a>
            <a target="_blank" href="https://www.shopify.com/climate">
              <img src={shopify} alt="shopify" />
            </a>
            <a target="_blank" href="https://www.nike.com/sustainability">
              <img src={nike} alt="nike" />
            </a>
            <a
              target="_blank"
              href="https://www.delta.com/us/en/about-delta/sustainability"
            >
              <img src={delta} alt="delta" />
            </a>
            <a
              target="_blank"
              href="https://www.mastercard.com/global/en/vision/corp-responsibility/sustainability.html"
            >
              <img src={mastercard} alt="mastercard" />
            </a>
            <a
              target="_blank"
              href="https://www.atlassian.com/company/corporate-social-responsibility/report"
            >
              <img src={atlassian} alt="atlassian" />
            </a>
          </div>
        </div>
        <div className="section share-your-story">
          <h1>Follow your vendors' climate progress</h1>
          <h2>
            Learn about the sustainability commitments of your vendors and
            peers, and track their progress towards their climate goals.
          </h2>
        </div>
      </div>
      <div className="carbon-projects">
        <h1 className="title">Climate rewards you can feel good about</h1>
        <h2>
          Earn unlimited 0.5% back in premium carbon removal credits for all
          purchases made on your Bend card, redeemed automatically. Put your
          credits towards reducing your business's net emissions.
        </h2>
        <h2>
          GreenLeaf tracks a portfolio of carbon removal projects vetted by
          Frontier Climate and Microsoft, and their panel of scientists. You'll
          help support projects that store carbon permanently (&gt;1,000 years)
          and have demonstrated potential to remove gigatons of carbon from the
          atmosphere.
        </h2>
        <div className="projects">
          <div className="project">
            <img src={img1} alt="Living Carbon" />
            <p className="big">Living Carbon</p>
            <p className="small">Synthetic Biology</p>
            <p className="small">California, USA</p>
          </div>
          <div className="project">
            <img src={img2} alt="Living Carbon" />
            <p className="big">CarbonCapture</p>
            <p className="small">Direct Air Capture</p>
            <p className="small">Wyoming, USA</p>
          </div>
          <div className="project">
            <img src={img3} alt="Living Carbon" />
            <p className="big">Charm Industrial</p>
            <p className="small">Bio-oil</p>
            <p className="small">Kansas, USA</p>
          </div>
          <div className="project">
            <img src={img4} alt="Living Carbon" />
            <p className="big">Running Tide</p>
            <p className="small">Bio-oil</p>
            <p className="small">Maine, USA</p>
          </div>
        </div>
      </div>
      <div id="section3" className="sections-container">
        <div className="section">
          <img src={doodle} alt="icon" />
        </div>
        <div className="section">
          <h1>Engage every employee, team, and department</h1>
          <h2 className="empower">
            Empower your team to make sustainability-informed purchase
            decisions, tailored to each department.
          </h2>
        </div>
      </div>
      <div id="section4" className="sections-container">
        <div className="section">
          <img src={chart} alt="icon" />
        </div>
        <div className="section share-your-story">
          <h1>Share your sustainability story</h1>
          <h2>
            Communicate your progress with confidence to customers, employees,
            and investors. Create reports and export data aligned with GHG
            Protocol, SBTi, PCAF, and SFDR.
          </h2>
        </div>
      </div>
      <div className="join">
        <h1>
          Join a community of forward-thinking businesses bending the carbon
          curve.
        </h1>
        <h2>Get a Bend account and cards for free, in minutes.</h2>
        <Link
          to="/signup"
          className="btn green"
          style={{ marginBottom: "7.5rem" }}
        >
          Open a Free Account
        </Link>
      </div>
      <div className="footer">
        <p>©2023 GreenLeaf, Inc.</p>
      </div>
    </div>
  );
};

export default Features;
