import React from "react";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import ProblemSolution from "../Components/ProblemSolutionRightImage";
import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import Footer from "../Components/Footer";

const ProblemName = "Meditation";
const ProblemInfo =
  "Meditation has many benefits. It reduces stress, increases calm and focus, and promotes greater physical and emotional well-being. Anyone can do it, and the rewards can come quickly. These guided meditations will help you get started.";
import AddictionImage from "../assets/Meditation.jpeg";

//column 1 data
const col1Head = "Mindfulness Meditation";
const col1Info1 =
  "Stress Reduction: Mindfulness meditation helps to decrease stress by promoting a state of relaxation and fostering a non-reactive awareness of stressors";
const col1Info2 =
  "Improved Concentration: Regular practice of mindfulness meditation enhances concentration and cognitive function, leading to increased productivity and mental clarity.";
const col1Info3 =
  "Emotional Regulation: By increasing awareness of one's emotions, mindfulness meditation enables individuals to respond more skillfully to challenging situations, reducing impulsivity and emotional reactivity.";
import Col1Image from "../assets/meditation1.avif";

//column 2 data
const col2Head = "Loving-kindness Meditation (Metta)";
import Col2Image from "../assets/meditation2.avif";
const col2Info1 =
  "Enhanced Empathy: Loving-kindness meditation fosters feelings of compassion and empathy towards oneself and others, leading to improved relationships and a greater sense of connection.";
const col2Info2 =
  "Reduced Negative Emotions: By cultivating positive emotions such as love and kindness, this practice helps to diminish negative emotions like anger, resentment, and jealousy.";
const col2Info3 =
  "Greater Emotional Resilience: Regular practice of loving-kindness meditation strengthens emotional resilience, enabling individuals to navigate life's challenges with greater ease and grace.";

//column 3 data
const col3Head = " Transcendental Meditation (TM)";
import Col3Image from "../assets/meditation3.jpg";
const col3Info1 =
  "Stress Reduction: Transcendental meditation induces a state of deep relaxation, reducing the production of stress hormones and promoting overall feelings of calmness and well-being.";
const col3Info2 =
  "Improved Brain Function: Studies have shown that regular practice of transcendental meditation can lead to improved cognitive function, including enhanced memory, attention, and executive functioning.";
const col3Info3 =
  "Better Sleep: Transcendental meditation has been found to promote better sleep quality by calming the mind and reducing insomnia symptoms";

//column 4 data
const col4Head = "Breath Awareness Meditation";
import Col4Image from "../assets/meditation4.avif";
const col4Info1 =
  "Stress Reduction: Breath awareness meditation helps to calm the nervous system, reduce anxiety, and promote relaxation by focusing attention on the rhythmic flow of the breath";
const col4Info2 =
  "Increased Self-awareness: By observing the breath, individuals develop greater self-awareness of their thoughts, emotions, and bodily sensations, leading to improved emotional regulation and self-understanding.";
const col4Info3 =
  "Enhanced Mindfulness: Breath awareness meditation strengthens mindfulness by training individuals to stay present and attentive, even in the face of distractions and challenges.";

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

export default Meditation;
