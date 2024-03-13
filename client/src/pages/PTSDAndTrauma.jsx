import React from "react";
import "../styles/Anxiety.css";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import DepressionImage from "../assets/PTSD-and-Trauma.jpeg";

import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import ProblemSolutionRightImage from "../Components/ProblemSolutionRightImage";
import AnxietyImage1 from "../assets/PTSD-and-Trauma1.jpg";
import AnxietyImage2 from "../assets/PTSD-and-Trauma2.avif";
import AnxietyImage3 from "../assets/PTSD-and-Trauma3.jpg";
import AnxietyImage4 from "../assets/PTSD-and-Trauma4.avif";

import Footer from "../Components/Footer";

const title = "PTSD & Trauma";
const info =
  "When you’ve gone through something traumatic, it can seem like you’ll never feel safe again. But whether the trauma happened yesterday or years ago, you can find a way to heal, let go of painful memories, and move on. View FAQs";

//column 1 data
const col1Title = "Acute PTSD";
const col1Info1 =
  "Seek Professional Help - Consult a therapist specializing in trauma to address symptoms early on.";
const col1Info2 =
  "Practice Mindfulness and Relaxation Techniques - Engage in activities such as deep breathing, meditation, or yoga to manage stress.";
const col1Info3 =
  "Establish a Support System - Surround yourself with understanding friends and family who can provide emotional support.";
//column 2 data
const col2Title = "Chronic PTSD";
const col2Info1 =
  "Cognitive Behavioral Therapy (CBT) - Work with a therapist to identify and challenge negative thought patterns associated with trauma.";
const col2Info2 =
  "Engage in Regular Exercise - Physical activity can help alleviate symptoms of anxiety and depression often present in chronic PTSD.";
const col2Info3 =
  "Explore Medication Options - Consult with a psychiatrist about medications that may help manage symptoms, such as antidepressants or anti-anxiety medications.";
//column 3 data
const col3Title = "Complex PTSD:";
const col3Info1 =
  "Trauma-Informed Therapy - Find a therapist trained in treating complex trauma who can provide specialized care.";
const col3Info2 =
  " Develop Coping Skills - Learn healthy coping mechanisms such as journaling, art therapy, or grounding exercises to manage overwhelming emotions.";
const col3Info3 =
  " Build Healthy Relationships - Foster connections with supportive individuals who can help rebuild trust and provide validation.";

//column 4 data
const col4Title = "Secondary Traumatic Stress";
const col4Info1 =
  " Practice Self-Care - Prioritize self-care activities such as getting adequate rest, maintaining a healthy diet, and engaging in hobbies.";
const col4Info2 =
  "Set Boundaries - Establish boundaries to protect yourself from being overwhelmed by others' trauma narratives, especially if you work in a helping profession.";
const col4Info3 =
  "Seek Supervision and Support - Regularly consult with colleagues or supervisors to process challenging cases and prevent burnout.";

const PTSDAndTrauma = () => {
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

export default PTSDAndTrauma;
