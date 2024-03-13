import React from "react";
import "../styles/Anxiety.css";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import DepressionImage from "../assets/Love-and-Friendship.jpeg";

import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import ProblemSolutionRightImage from "../Components/ProblemSolutionRightImage";
import AnxietyImage1 from "../assets/Love-and-Friendship1.avif";
import AnxietyImage2 from "../assets/Love-and-Friendship2.avif";
import AnxietyImage3 from "../assets/Love-and-Friendship3.avif";
import AnxietyImage4 from "../assets/Love-and-Friendship4.jpg";

import Footer from "../Components/Footer";

const title = "Love & Friendship";
const info =
  "Strong healthy relationships—whether romantic, family, or friendship—are vital to our happiness as human beings. These resources will help you learn the skills you need to repair old connections and build meaningful new ones. View FAQs";

//column 1 data
const col1Title = "Romantic Love";
const col1Info1 =
  "Emotional Support: Romantic partners provide comfort and empathy, fostering emotional resilience.";
const col1Info2 =
  "Stress Reduction: Sharing intimacy and affection can lower stress levels and promote relaxation.";
const col1Info3 =
  "Sense of Belonging: Being loved romantically strengthens feelings of belonging and acceptance";
//column 2 data
const col2Title = "Familial Love";
const col2Info1 =
  "Security: Family relationships offer a sense of security and stability, promoting mental well-being";
const col2Info2 =
  "Identity Formation: Strong family ties contribute to a sense of identity and self-worth.";
const col2Info3 =
  "Unconditional Support: Family members often provide unwavering support during challenging times, enhancing emotional resilience";
//column 3 data
const col3Title = "Platonic Friendship";
const col3Info1 =
  "Self-Expression: Friends offer a safe space for self-expression and authenticity, promoting mental health";
const col3Info2 =
  "Shared Joy: Sharing experiences and laughter with friends fosters happiness and boosts mood.";
const col3Info3 =
  "Social Connection: Friendships provide social support, reducing feelings of loneliness and isolation";

//column 4 data
const col4Title = "Altruistic Love";
const col4Info1 =
  "Sense of Purpose: Helping others cultivates a sense of purpose and fulfillment, enhancing mental health";
const col4Info2 =
  "Empathy Development: Practicing altruism strengthens empathy and connection with others";
const col4Info3 =
  "Positive Impact: Contributing to the well-being of others promotes a positive outlook and self-worth.";

const LoveFriendship = () => {
  return (
    <div>
      <Navbar />
      <ProblemHeroDiv name={title} info={info} image={DepressionImage} />
      <ProblemSolutionRightImage
        title={col1Title}
        col1Info1={col1Info1}
        col1Info2={col1Info2}
        col1Info3={col1Info3}
        image={AnxietyImage1}
      />
      <ProblemSolutionLeftImage
        title={col2Title}
        col1Info1={col2Info1}
        col1Info2={col2Info2}
        col1Info3={col2Info3}
        image={AnxietyImage3}
      />
      <ProblemSolutionRightImage
        title={col3Title}
        col1Info1={col3Info1}
        col1Info2={col3Info2}
        col1Info3={col3Info3}
        image={AnxietyImage2}
      />
      <ProblemSolutionLeftImage
        title={col4Title}
        col1Info1={col4Info1}
        col1Info2={col4Info2}
        col1Info3={col4Info3}
        image={AnxietyImage4}
      />

      <Footer />
    </div>
  );
};

export default LoveFriendship;
