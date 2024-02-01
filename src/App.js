import MainComponent from "./components/MaiComponent/MainComponent";

import Icon from "./images/Icon";
import PlateImage from "./images/PlateImage";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    primaryColor: "#fff",
    secondaryColor: "#fff",
    background: "#000",

    plates: [
      {
        plate: <PlateImage color="transparent" strokeColor="#4F5D75" />,
        icon: <Icon color="#2E3B84" />,
      },
      {
        plate: <PlateImage color="transparent" strokeColor="#4F5D75" />,
        icon: <Icon color="#2E3B84" />,
      },
      {
        plate: <PlateImage color="transparent" strokeColor="#4F5D75" />,
        icon: <Icon color="#2E3B84" />,
      },
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
