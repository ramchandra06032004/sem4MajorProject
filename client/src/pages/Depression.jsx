import React from "react";
import "../styles/Anxiety.css";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import DepressionImage from "../assets/Depression.jpeg";

import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import ProblemSolutionRightImage from "../Components/ProblemSolutionRightImage";
import AnxietyImage1 from "../assets/Depression1.jpg";
import AnxietyImage2 from "../assets/Depression2.jpg";
import AnxietyImage3 from "../assets/Depression3.png";

import Footer from "../Components/Footer";

const title = "Depression";
const info =
  "Depression is more than just feeling sad. It drains your optimism, energy, and drive. It can seem like there’s no way out. But no matter how bad you feel, there’s always hope. Read on to learn about symptoms, treatment, and recovery.";

//column 1 data
const col1Title = "Major Depressive Disorder (MDD)";
const col1Info1 =
  "Psychotherapy: Cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), and other forms of talk therapy can help individuals identify negative thought patterns and develop coping strategies";
const col1Info2 =
  "Medication: Antidepressant medications, such as selective serotonin reuptake inhibitors (SSRIs) or serotonin-norepinephrine reuptake inhibitors (SNRIs), may be prescribed by a healthcare professional to help manage symptoms";
const col1Info3 =
  "Lifestyle changes: Engaging in regular exercise, maintaining a healthy diet, getting enough sleep, and avoiding alcohol and drugs can all contribute to improving mood and overall well-being";
//column 2 data
const col2Title = "Persistent Depressive Disorder (PDD)";
const col2Info1 =
  "Therapy: Long-term therapy, such as CBT or psychodynamic therapy, can help individuals address underlying issues contributing to their persistent depressive symptoms";
const col2Info2 =
  "Support groups: Connecting with others who understand their experiences can provide valuable support and validation for individuals with PDD";
const col2Info3 =
  "Self-care practices: Practicing self-compassion, setting realistic goals, and engaging in enjoyable activities regularly can help manage symptoms and improve mood";
//column 3 data
const col3Title = "Postpartum Depression (PPD)";
const col3Info1 =
  "Therapy: Counseling or support groups specifically tailored to new mothers can provide a safe space to discuss feelings and concerns";
const col3Info2 =
  "Support from loved ones: Having a strong support network of family and friends who can offer practical help and emotional support can be invaluable for mothers experiencing PPD";
const col3Info3 =
  "Medication: In some cases, antidepressant medication may be necessary to help manage severe symptoms of PPD, especially if therapy alone is not effective";

const Depression = () => {
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

      <Footer />
    </div>
  );
};

export default Depression;
