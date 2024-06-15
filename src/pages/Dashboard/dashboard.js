import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cover from '../../components/Cover/Cover';
import { Link as ScrollLink } from 'react-scroll';
import './Dashboard.css';
import projectsData from '../../utils/projects.json';
import githubIcon from '../../assets/github.png';
import stackIcon from '../../assets/stack.png';
import dlIcon from '../../assets/deep-learning.png';
import aiIcon from '../../assets/ai.png';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import DCGAN from '../../assets/dcgan.png';
import nim from '../../assets/nim.png';
import ml from '../../assets/brain4.png';
import housing from '../../assets/housing.png';
import haa from '../../assets/haa.png'

const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
        case 'deep learning':
            return dlIcon;
        case 'artificial intelligence':
            return aiIcon;
        case 'machine learning':
            return ml;
        default:
            return dlIcon;
    }
};

const getProjectCover = (id) => {
    switch (id) {
        case 1:
            return DCGAN;
        case 2:
            return housing;
        case 4:
            return nim;
        case 5:
            return haa;
        default:
            return DCGAN;
    }
}

const Dashboard = () => {

    return (
        <div>
            <Navbar />
            <Cover />
            <div className='intro'>
                <div className='objective'>
                    <blockquote>
                    I'm a passionate Mobile App Developer with expertise in Java and Kotlin, specializing in Android and iOS development. I integrate AI/ML technologies to build innovative, scalable, and user-friendly applications. Let's collaborate to create impactful solutions!
                    </blockquote>
                </div>
                <div className='picture'>
                    <img src={require('../../assets/dp3.jpg')} />
                </div>
            </div>
            <div className='portfolio'>
                <h2>Portfolio</h2>
                <div className='projects'>
                    {projectsData.projects.map((project, index) => (
                        <div className={`project ${index === 0 ? 'thumbnail' : ''}`} key={project.id}>
                            {/* {index === 0 && <img className='thumbnail' src={getProjectCover(project.id)} alt={`${project.name} Thumbnail`} />} */}
                            <img className='thumbnail' src={getProjectCover(project.id)} alt={`${project.name} Thumbnail`} />
                            <div className='name'>{project.name}</div>
                            <div className='category'><img src={getCategoryIcon(project.category)} alt='Domain-Icon' className='github-icon' /> {project.category}</div>
                            <div className='stack'><img src={stackIcon} alt='GitHub-Icon' className='github-icon' /> {project.stack.join(', ')}</div>
                            <div className='icon'><img src={githubIcon} alt='GitHub-Icon' className='github-icon' /></div>
                        </div>
                    ))}
                </div>
            </div>
            <AboutMe />
            <Contact className='contact' />
        </div>
    );
};

export default Dashboard;