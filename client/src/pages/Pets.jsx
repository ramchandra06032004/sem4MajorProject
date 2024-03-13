import React from "react";
import Navbar from "../Components/navbar";
import ProblemHeroDiv from "../Components/problemHeroDiv";
import ProblemSolution from "../Components/ProblemSolutionRightImage";
import ProblemSolutionLeftImage from "../Components/ProblemSolutionLeftImage";
import Footer from "../Components/Footer";

const ProblemName = "Pets";
const ProblemInfo =
  "Caring for a pet can have a profound impact on your mental and physical health. Domestic animals provide love and companionship, encourage activity, and can help ease stress, anxiety, and depression. They can also bring joy to even the darkest day.";
import AddictionImage from "../assets/Pets-1.jpeg";

//column 1 data
const col1Head = " Dogs";
const col1Info1 =
  "Companionship: Dogs are known for their loyalty and companionship, offering unconditional love and support, which can alleviate feelings of loneliness and isolation.";
const col1Info2 =
  "Stress Reduction: Interacting with dogs, such as petting or playing, can lower cortisol levels and reduce stress and anxiety, promoting a sense of calm and relaxation.";
const col1Info3 =
  "Increased Exercise: Owning a dog encourages regular physical activity through daily walks or playtime, leading to improved fitness levels and mood regulation.";
import Col1Image from "../assets/Pets-2.avif";

//column 2 data
const col2Head = "Cats";
import Col2Image from "../assets/pets-3.avif";
const col2Info1 =
  "Calming Presence: Cats' purring has been shown to have a calming effect on humans, reducing stress and promoting relaxation.";
const col2Info2 =
  "Emotional Support: Cats can provide emotional support through their affectionate behavior, helping to reduce feelings of anxiety and depression.";
const col2Info3 =
  "Low Maintenance: Cats are relatively low maintenance pets, requiring less attention compared to dogs, making them suitable companions for individuals with busy lifestyles";

//column 3 data
const col3Head = "  Fish";
import Col3Image from "../assets/pets-4.jpg";
const col3Info1 =
  "Soothing Effect: Watching fish swim in an aquarium has a therapeutic effect, promoting relaxation and reducing blood pressure and heart rate.";
const col3Info2 =
  "Mindfulness: Caring for fish requires a routine of feeding and tank maintenance, encouraging mindfulness and focus, which can help alleviate symptoms of anxiety and ADHD.";
const col3Info3 =
  "Quiet Companionship: Fish provide quiet companionship without the need for direct interaction, making them ideal for individuals seeking a peaceful environment.";

//column 4 data
const col4Head = "Birds";
import Col4Image from "../assets/pets-5.jpg";
const col4Info1 =
  "Social Interaction: Birds can be social creatures, forming bonds with their owners and providing companionship through chirping and playful behavior.";
const col4Info2 =
  "Stress Relief: Interacting with birds, such as talking or singing to them, can reduce stress and promote a sense of well-being.";
const col4Info3 =
  "Stimulation: Birds are intellectually stimulating pets, requiring mental stimulation through toys and training, which can enhance cognitive function and mood.";

const Pets = () => {
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

export default Pets;
