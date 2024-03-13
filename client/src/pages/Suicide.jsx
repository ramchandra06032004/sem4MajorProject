import React from "react";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import ProblemSolution from "../Components/ProblemSolutionRightImage";
import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import Footer from "../Components/Footer";

const ProblemName = "Suicide";
const ProblemInfo =
  "Meditation has many benefits. It reduces stress, increases calm and focus, and promotes greater physical and emotional well-being. Anyone can do it, and the rewards can come quickly. These guided meditations will help you get started.";
import AddictionImage from "../assets/Suicide.jpeg";

//column 1 data
const col1Head = "Egoistic Suicide";
const col1Info1 =
  "Strengthen Social Connections: Encourage the individual to engage in social activities, join support groups, or participate in community events to foster a sense of belonging and connection.";
const col1Info2 =
  "Build Support Networks: Facilitate the creation of strong support networks consisting of friends, family, and professionals who can provide emotional support and assistance during difficult times.";
const col1Info3 =
  "Promote Self-Worth and Purpose: Help the person identify their strengths, interests, and values, and assist them in finding activities or pursuits that give them a sense of purpose and fulfillment.";
import Col1Image from "../assets/Suicide1.avif";

//column 2 data
const col2Head = "Altruistic Suicide";
import Col2Image from "../assets/Suicide2.jpg";
const col2Info1 =
  "Address Underlying Issues: Identify and address any underlying mental health issues such as depression or trauma through therapy, counseling, or medication.";
const col2Info2 =
  "Educate on Healthy Coping Mechanisms: Teach healthy coping mechanisms such as mindfulness, relaxation techniques, or creative outlets to help manage stress and emotional turmoil.";
const col2Info3 =
  " Encourage Self-Care: Emphasize the importance of self-care practices such as exercise, nutrition, adequate sleep, and self-compassion to improve overall well-being and resilience.";

//column 3 data
const col3Head = "Anomic Suicide:";
import Col3Image from "../assets/Suicide3.jpg";
const col3Info1 =
  "Provide Stability and Structure: Assist the individual in establishing routines, setting realistic goals, and creating a sense of structure in their lives to reduce feelings of uncertainty and instability.";
const col3Info2 =
  "Financial and Employment Support: Offer assistance in finding stable employment, accessing financial resources, or receiving vocational training to alleviate economic stressors contributing to feelings of despair.";
const col3Info3 =
  "Foster Resilience and Adaptability: Provide resilience-building workshops or therapy sessions to help individuals develop coping skills, adapt to life changes, and navigate difficult circumstances more effectively.";

const Meditation = () => {
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

      <Footer />
    </div>
  );
};

export default Meditation;
