import MainComponent from "./components/MaiComponent/MainComponent";
import { icon } from "./images";
import PlateImage from "./images/PlateImage";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",
    background: "#EFF2F3",

    plates: [
      { plate: <PlateImage color="#fff" strokeColor="#4F5D75" />, icon: icon },
      { plate: <PlateImage color="#fff" strokeColor="#4F5D75" />, icon: icon },
      { plate: <PlateImage color="#fff" strokeColor="#4F5D75" />, icon: icon },
    ],

    howDbtWorks: {
      heading: "How dbt works",
      data: [
        {
          title: "Version control & CI/CD",
          info: "Deploy safely using dev environments. Git-enabled version control enables collaboration and a return to previous states.",
        },
        {
          title: "Test and Document",
          info: "Test every model prior to production, and share dynamically generated documentation with all data stakeholders.",
        },
        {
          title: "Develop",
          info: "Write moduler data transformation in .sql or .py files - dbt handles the chore of dependency management.",
        },
      ],
    },
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
