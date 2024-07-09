AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Red-Hat Enterprise Linux",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/511a12671c12efbe1912ef292beea5b8",
  },
  {
    title: "Data Structure and Performance",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/0aeafac283b9ba40f9df356a9eae688a",
  },
  {
    title: "Algorithmic Toolbox",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/b2b0e0007db1e6d1205d341dc011ed77",
  },
  {
    title: "Microsoft Azure Management Tools",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/e30f3eec22df231830856670a110f1a3",
  },
  {
    title: "Android",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/587643c96acdc055028224bb70a4e77f",
  },
  {
    title: "Android",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/733f26f5589b6543515314616dd4d619",
  },
  {
    title: "FrontEnd Web UI Framework and Tools",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/cfc4f8caca58f8a6fbda231c901b9e8c",
  },
  {
    title: "Automate Cybersecurity with Python",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/b2553839d2a0701ff0ac91347bb01092",
  },
  {
    title: "Principles of UI/UX Design",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/9a47859d338c07ff96170ade9342533e",
  },
  {
    title: "Try HAck Me- Badges",
    cardImage: "assets/images/education-page/thm.jpeg",
    moocLink: "https://tryhackme.com/p/err0r401",
  },
  {
    title: "Time Management and Ways of Thinking",
    cardImage: "assets/images/education-page/linkedin.jpeg",
    moocLink:
      "https://www.linkedin.com/learning-login/share?account=92961692&forceAccount=true&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fpaths%2Fchandigarh-university-time-management-ways-of-thinking-17001327%3Ftrk%3Dshare_ent_path_url%26shareId%3DyzSoLQ6fSYuPuEsA%252BNkCmQ%253D%253D",
  },
  {
    title: "Ethics and Gender Equality",
    cardImage: "assets/images/education-page/linkedin.jpeg",
    moocLink: "https://www.linkedin.com/learning-login/share?account=92961692&forceAccount=true&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fpaths%2Fchandigarh-university-ethics-and-gender-equality%3Ftrk%3Dshare_ent_path_url%26shareId%3DdrsYWPQNSR%252Bhm0WNbdm3%252BA%253D%253D",
  },
  {
    title: "Entrepreneurship",
    cardImage: "assets/images/education-page/linkedin.jpeg",
    moocLink: "https://www.linkedin.com/learning-login/share?account=92961692&forceAccount=true&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fpaths%2Fchandigarh-university-entrepreneurship%3Ftrk%3Dshare_ent_path_url%26shareId%3Dfj15tkLTRPyeOdomo1i6kA%253D%253D",
  },
  {
    title: "Academic Paper Writing and IPR",
    cardImage: "assets/images/education-page/linkedin.jpeg",
    moocLink:
      "https://www.linkedin.com/learning-login/share?account=92961692&forceAccount=true&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fpaths%2Fchandigarh-university-academic-paper-writing-and-ipr-14523090%3Ftrk%3Dshare_ent_path_url%26shareId%3DpsXaCiueRn23gVJ0X0tGUA%253D%253D",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
