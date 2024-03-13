import React from "react";
import "../styles/Anxiety.css";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import AnxietyImage from "../assets/Anxiety.jpeg";
import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import ProblemSolutionRightImage from "../Components/ProblemSolutionRightImage";
import AnxietyImage1 from "../assets/Anxiety1.jpeg";
import AnxietyImage2 from "../assets/Anxiety2.avif";
import AnxietyImage3 from "../assets/Anxiety3.jpg";
import AnxietyImage4 from "../assets/Anxiety4.jpg";
import Footer from "../Components/Footer";

const title = "Anxiety";
const info =
  "Are worries, fears, or panic attacks making it hard to function or enjoy life? Learn about the various types of anxiety disorders and their symptoms, and what you can do to take back control and regain your peace of mind.";

//column 1 data
const col1Title = "Generalized Anxiety Disorder (GAD)";
const col1Info1 =
  "Practice mindfulness and relaxation techniques such as deep breathing exercises and progressive muscle relaxation";
const col1Info2 =
  "Challenge negative thought patterns through cognitive-behavioral therapy (CBT) or mindfulness-based cognitive therapy (MBCT)";
const col1Info3 =
  "Establish a routine to maintain structure and predictability in your daily life. Engage in regular physical activity to reduce tension and improve mood";
//column 2 data
const col2Title = "Panic Disorder";
const col2Info1 =
  "Learn relaxation techniques like deep breathing or visualization to help manage panic symptoms during an attack";
const col2Info2 =
  "Gradually expose yourself to feared situations or triggers through systematic desensitization";
const col2Info3 =
  "Seek support from a therapist trained in cognitive-behavioral techniques for panic disorder";
//column 3 data
const col3Title = "Social Anxiety Disorder";
const col3Info1 =
  "Gradually expose yourself to feared social situations, starting with less intimidating scenarios and gradually progressing";
const col3Info2 =
  "Challenge negative self-beliefs and irrational thoughts about social interactions through CBT or exposure therapy";
const col3Info3 =
  "Practice assertiveness skills to communicate effectively and build confidence in social settings";

//column 4 data
const col4Title = "Obsessive-Compulsive Disorder (OCD)";
const col4Info1 =
  "Engage in exposure and response prevention (ERP) therapy with a trained therapist to gradually confront and tolerate obsessive thoughts without performing compulsive behaviors";
const col4Info2 =
  "Challenge irrational beliefs underlying obsessions through cognitive restructuring techniques";
const col4Info3 =
  "Implement healthy coping mechanisms such as mindfulness, relaxation exercises, and distraction techniques to manage anxiety without resorting to compulsions";

const Anxiety = () => {
  return (
    <div>
      <Navbar />
      <ProblemHeroDiv name={title} info={info} image={AnxietyImage} />
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
        image={AnxietyImage2}
      />
      <ProblemSolutionRightImage
        title={col3Title}
        col1Info1={col3Info1}
        col1Info2={col3Info2}
        col1Info3={col3Info3}
        image={AnxietyImage3}
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

export default Anxiety;
