import React from "react";
import "../styles/Anxiety.css";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import DepressionImage from "../assets/Stress.jpeg";

import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import ProblemSolutionRightImage from "../Components/ProblemSolutionRightImage";
import AnxietyImage1 from "../assets/Stress1.jpg";
import AnxietyImage2 from "../assets/Stress2.avif";
import AnxietyImage3 from "../assets/Stress3.jpg";
import AnxietyImage4 from "../assets/Stress4.jpg";

import Footer from "../Components/Footer";

const title = "Stress";
const info =
  "In small doses, stress can help you stay energized and focused. But when it’s chronic or overwhelming, it can damage your health, productivity, and well-being. Learn the warning signs and what you can do to protect yourself.";

//column 1 data
const col1Title = "Acute Stress";
const col1Info1 =
  "Practice deep breathing exercises to calm the body's stress response.";
const col1Info2 =
  "Engage in physical activity, such as brisk walking or yoga, to release tension.";
const col1Info3 =
  "Use relaxation techniques like meditation or progressive muscle relaxation to promote relaxation.";
//column 2 data
const col2Title = "Chronic Stress";
const col2Info1 =
  "Establish healthy boundaries to prevent overwhelming responsibilities.";
const col2Info2 =
  "Prioritize self-care activities, such as getting enough sleep and maintaining a balanced diet.";
const col2Info3 =
  "Seek support from friends, family, or a therapist to cope with underlying stressors.";
//column 3 data
const col3Title = "Environmental Stress:";
const col3Info1 =
  "Create a calm and organized living or working environment to minimize distractions.";
const col3Info2 =
  "Spend time in nature or green spaces to reduce exposure to urban stressors.";
const col3Info3 =
  "Use noise-canceling headphones or white noise machines to block out disturbing sounds.";

//column 4 data
const col4Title = "Psychological Stress:";
const col4Info1 =
  "Challenge negative thought patterns through cognitive-behavioral techniques.";
const col4Info2 =
  "Practice self-compassion and acceptance to foster resilience in the face of setbacks.";
const col4Info3 =
  "Engage in activities that promote mindfulness and emotional awareness, such as journaling or creative expression.";

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
