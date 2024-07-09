AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/hard code.jpeg",
    langName: "Hard Coding",
    langDesc: "<li>I use to do hard code, solve competitive coding questions using the lanuages: C++, Java and Python",
  },
  {
    langImage: "assets/images/techstack-page/webd.jpeg",
    langName: "Web Development",
    langDesc: "<li>Web development using the basics: HTML5, CSS and Javascript</li>",
  },
  {
    langImage: "assets/images/techstack-page/dbms.jpeg",
    langName: "Database Management",
    langDesc: "<li>Manage database using SQl, Mongodb and Firebase</li>",
  },
  {
    langImage: "assets/images/techstack-page/kali.jpeg",
    langName: "Kali Linux",
    langDesc: "<li>Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering.</li>",
  },
  {
    langImage: "assets/images/techstack-page/pt.jpeg",
    langName: "Penetration Testing",
    langDesc: "<li>A security exercise where a cyber-security expert attempts to find and exploit vulnerabilities in a computer system.</li><li>Tools:Kali Linux, Nmap, Wireshark, Metasploit, Aircrack-ng, Burp suite, Hashcat ",
  },
  {
    langImage: "assets/images/techstack-page/phishing.png",
    langName: "Phishing Awareness",
    langDesc: "<li>Phishing is a form of social engineering and scam where attackers deceive people into revealing sensitive information or installing malware such as viruses, worms, adware, or ransomware.</li>",
  },
  {
    langImage: "assets/images/techstack-page/ip.jpeg",
    langName: "Interpersonal Skills",
    langDesc: "<li>Team Leadership, Management and Coordination, Decision making, Problem Solving, Critical Thinking</li>",
  },
  {
    langImage:"assets/images/techstack-page/hobbies.jpeg",
    langName:"Interest and Hobbies",
    langDesc:"<li>Reading thriller books</li><li>CTF Challenges</li><li>Hacking</li><li>Podcasts</li><li>Gaming</li><li>Cooking</li><li>Swimming</li><li>Outdoor games</li><li>Netflix n Chill</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
