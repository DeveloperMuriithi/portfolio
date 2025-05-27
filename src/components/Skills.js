// Create your Skills component here
import {FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker} from "react-icons/fa";

const Skills = () => {
  const SkillsArr = [
    {
      "name" : 'JavaScript',
      "icon" : FaJs
    },
    {
      "name" : "HTML",
      "icon" : FaHtml5
    },
    {
      "name" : "CSS",
      "icon" : FaCss3
    },
    {
      "name" : "Git",
      "icon" : FaGithub
    },
    {
      "name" : "Reactjs",
      "icon" : FaReact
    },
    {
      "name" : "Docker",
      "icon" : FaDocker
    }
  ];
  return (
    <div id='skills' className='skills'>
      <h2 className='title'>Skills</h2>
      <dic className='skill-holder'>
        {
          SkillsArr.map((skill, index) =>{
            const Icon = skill.icon;
            return (
              <i key={index} className='skill-cards'>
                <Icon className='skill-icon'/>
                <p
                className="Skill"
                >
                  {skill.name}
                </p>
              </i>
            )
          })
        }
      </dic>
    </div>
    )
}

export default Skills;