/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Online Dijkstra Algorithm",
    authors:
      "Aadyant Tripathi, Mayank Kumar, Kirti Pandey, Krishna Singh, Katyayani Shukla",
    conferences:
      "Scopus-Indexed, IEEE Conference",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/dijkstra.jpeg",
    citation: {
      vancouver:
        "Aadyant Tripathi, Mayank Kumar, Kirti Pandey, Krishna Singh and Katyayani Shukla, A method for the shortest path search by extended Dijkstra algorithm, Smc 2024 conference proceedings. 2024 ieee international conference on systems, man and cybernetics. 'cybernetics evolving to systems, humans, organizations, and their complex interactions' (cat. no.0, Nashville, TN, USA, 2024, pp. 2316-2320 vol.3, doi: 10.112202/ICSMC.2024.886462. keywords: {Search problems;Navigation;Search methods;Costs;Road transportation;Communication networks;Explosives;Hardware;Genetic mutations},"
    },
    abstract:
      "This research explores the optimization of network paths through a formal study of Online Dijkstra Algorithm Solvers. We rigorously analyze the efficiency, reliability, and suitability of these solvers across diverse network scenarios, considering algorithmic intricacies and computational complexities.",
    absbox: "absPopup1",
  },


  {
    title:
      "Car Parking Management System",
    authors:
      "Mayank kumar, Kislay komal",
    conferences:
      "IEEE Conference on Vehicle Parking Management System",
    researchYr: 2022,
    citebox: "popup8",
    image: "assets/images/research-page/car parking system.jpeg",
    citation: {
      vancouver:
        "Mayank Kumar and Kislay Komal, Vehicle Parking Management System, 2022 International Conference on Convergence to Digital World - Quo Vadis (ICCDW), Mumbai, India, 2022, pp. 1-6, doi: 10.1109/ICCDW45521.2022.9318673. keywords: {Automobiles;Wireless sensor networks;Databases;Mobile applications;Internet of Things;Acoustics;Wireless fidelity;WSNs;IR sensors;parking area;QR code;booking slot;application}"
    },
    abstract:
      "Due to the increasing population in urban cities, there is an exponential rise in the number of vehicles which is leading to major problems leading to poor traffic management and congestion. Another major problem faced by the vehicle owners is the availability of parking space. The idea of Smart Cities is slowly gaining pace with the ever increasing technologies. Therefore, in the proposed parking system we are integrating the Wireless Sensor Technology with the Android Application so that the user can book or pre-book a slot. The vehicle owner will be able to reserve a slot for his/her vehicle from anywhere and will be provided with a QR code which will be scanned on the entry of the parking area. Another feature our system provides is providing information about the near-by parking areas which comes handy when the current parking area is full.",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
