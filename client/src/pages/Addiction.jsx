import React from "react";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import ProblemSolution from "../Components/ProblemSolutionRightImage";
import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import Footer from "../Components/Footer";

const ProblemName = "Addiction";
const ProblemInfo =
  "When you’re stuck in the cycle of addiction, recovery can seem out of reach. But no matter how powerless you feel, change is possible with the right treatment, coping strategies, and support. Don’t give up, even if you’ve tried and failed before.";
import AddictionImage from "../assets/addiction.jpg";

//column 1 data
const col1Head = "Substance Addiction";
const col1Info1 =
  "This type of addiction involves dependence on substances such as alcohol, drugs (prescription or illegal), nicotine, or even caffeine.";
const col1Info2 =
  "Overcoming substance addiction often requires professional intervention, such as medical detoxification, therapy, and support groups like Alcoholics Anonymous or Narcotics Anonymous.";
const col1Info3 =
  "Lifestyle changes, including avoiding triggers, developing healthier coping mechanisms, and building a strong support network, are crucial for long-term recovery.";
import Col1Image from "../assets/addiction2.jpg";

//column 2 data
const col2Head = "Food Addiction";
import Col2Image from "../assets/foodAddiction.jpg";
const col2Info1 =
  "Food addiction involves a compulsive relationship with food, often characterized by overeating, binge eating, or consuming specific types of food excessively";
const col2Info2 =
  "Overcoming food addiction may require a combination of therapy, nutritional counseling, support groups, and lifestyle changes";
const col2Info3 =
  "Learning to identify emotional triggers for overeating, practicing mindful eating, and adopting a balanced diet can aid in breaking the cycle of food addiction.";

//column 3 data
const col3Head = "Technology Addiction";
import Col3Image from "../assets/techAddiction.jpg";
const col3Info1 =
  "With the rise of smartphones, social media, and digital entertainment, technology addiction has become increasingly prevalent. Excessive use of technology can lead to negative effects on mental health, relationships, and productivity";
const col3Info2 =
  "Overcoming technology addiction involves setting boundaries on screen time, practicing digital detoxification, and engaging in offline activities.";
const col3Info3 =
  "Developing healthy habits like limiting screen time before bedtime, designating tech-free zones, and seeking social support can help regain control over technology usage";

//column 4 data
const col4Head = "Work Addiction";
import Col4Image from "../assets/addiction3.jpg";
const col4Info1 =
  "Work addiction, also known as workaholism, involves an obsessive focus on work to the detriment of other aspects of life, including relationships, health, and personal well-being";
const col4Info2 =
  "Overcoming work addiction requires recognizing the harmful effects of overwork, setting boundaries, prioritizing self-care, and seeking professional help if necessary";
const col4Info3 =
  "Learning to delegate tasks, practicing time management, and cultivating interests outside of work can promote a healthier work-life balance";

const Addiction = () => {
  return (
    <div>
      <Navbar />
      <ProblemHeroDiv
        name={ProblemName}
        info={ProblemInfo}
        image={AddictionImage}
      />
      <ProblemSolution
        title={col1Head}
        col1Info1={col1Info1}
        col1Info2={col1Info2}
        col1Info3={col1Info3}
        image={Col1Image}
      />
      <ProblemSolutionLeftImage
        title={col2Head}
        col1Info1={col2Info1}
        col1Info2={col2Info2}
        col1Info3={col2Info3}
        image={Col2Image}
      />
      <ProblemSolution
        title={col3Head}
        col1Info1={col3Info1}
        col1Info2={col3Info2}
        col1Info3={col3Info3}
        image={Col3Image}
      />
      <ProblemSolutionLeftImage
        title={col4Head}
        col1Info1={col4Info1}
        col1Info2={col4Info2}
        col1Info3={col4Info3}
        image={Col4Image}
      />
      <Footer />
    </div>
  );
};

export default Addiction;
