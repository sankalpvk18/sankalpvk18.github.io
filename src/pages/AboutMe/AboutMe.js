// import React from 'react';
// import './AboutMe.css'; // Import your CSS file for styling

// const AboutMe = () => {
//   return (
//     <div className="about-me-container">
//       <h2>About Me</h2>
//       <p>
//         Hello, I'm Sankalp Tripathi, a passionate and innovative software engineer currently pursuing my Master's in Computer Science at the University of Texas at Arlington. With a solid foundation in computer science and a focus on cutting-edge technologies, I bring over 3.5 years of professional experience and a commitment to continuous learning and growth.
//       </p>

//       <div className="section-heading">Education:</div>
//       <ul>
//         <li>Master of Science, Computer Science (Aug 2022 - Present) <br /> University of Texas at Arlington <br /> Courses: Neural Networks, Machine Learning, Artificial Intelligence, Data Analysis, Design and Analysis of Algorithms, Database Systems, Distributed Systems</li>
//         <li>Bachelor of Technology, Computer Science & Engineering (Aug 2014 - May 2018) <br /> Biju Patnaik University of Technology <br /> Key Subjects: Object-Oriented Programming, Data Structures, Database Management, Machine Learning, Computer Networking</li>
//       </ul>

//       <div className="section-heading">Technical Skills:</div>
//       <ul>
//         <li>Programming Languages: Python, JAVA, Scala</li>
//         <li>Statistical Analysis: Regression, Hypothesis Testing, Time Series Analysis</li>
//         <li>Machine Learning: Supervised Learning, Unsupervised Learning, Deep Learning, Natural Language Processing</li>
//         <li>Data Visualization: Power BI, Matplotlib, Seaborn</li>
//         <li>Tools: TensorFlow, Keras, scikit-learn, Jupyter Notebook</li>
//         <li>Databases: MySQL, MongoDB</li>
//         <li>Software Development: HTML, CSS, React, Angular, TypeScript, Git, Postman, Figma, Agile Methodology, Scrum</li>
//       </ul>

//       <div className="section-heading">Work Experience:</div>
//       <ul>
//         <li>Sr. Software Engineer, Divami Design Labs, Hyderabad, India (July 2019 - June 2022) <br /> Led a team in delivering critical backend projects, integrated multiple payment gateways, and developed Android and iOS applications for a Texas-based trucking solution provider.</li>
//         <li>Software Engineer, Divami Design Labs (Oct 2018 - June 2019) <br /> Contributed to front-end development for a Dubai-based payment gateway solutions provider and created a medium-scale Android application for a financial planning solution client.</li>
//       </ul>

//       <div className="section-heading">Academic Project & Internship:</div>
//       <ul>
//         <li>Multi-level And Cross-level Association Rule Mining And Hiding (08/2017-03/2018) <br /> Developed association rules using the Apriori algorithm, categorized items into different groups, and hid sensitive rules using data hiding techniques.</li>
//         <li>Summer Research Internship at IIIT Naya Raipur (05/2016-07/2016) <br /> Conducted in-depth research on association rules, explored different interestingness measures, and prepared a comprehensive report on Interestingness Measures.</li>
//       </ul>

//       <div className="section-heading">Certifications & Accomplishments:</div>
//       <ul>
//         <li>Machine Learning Specialization by DeepLearning.AI - Stanford University</li>
//         <li>Recognized as Employee of the Year (2021) and Employee of the Month (10/19, 01/20, 12/20) for outstanding contributions to project success and team collaboration.</li>
//         <li>Achieved a gold badge on the coding platform Hackerrank for problem-solving.</li>
//       </ul>

//       <p>
//         I am enthusiastic about applying my skills in real-world scenarios, solving complex problems, and contributing to innovative projects. Let's connect and explore opportunities to collaborate! Feel free to check out my <a href="linkedin.com/in/sankalpvk18" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="github.com/sankalpvk18" target="_blank" rel="noopener noreferrer">GitHub</a> profiles.
//       </p>
//     </div>
//   );
// };

// export default AboutMe;


import React, { useState } from 'react';
import './AboutMe.css';
import photo1 from '../../assets/about_me/1.jpg';
import photo2 from '../../assets/about_me/2.JPG';
import photo3 from '../../assets/about_me/3.jpg';
import photo4 from '../../assets/about_me/4.JPG';
import prevBtn from '../../assets/arrow.png';
import nextBtn from '../../assets/arrow-right.png'

const AboutMe = () => {
    // const photos = [photo1, photo3];
    const photos = [
        { src: photo1, caption: 'Concluding my undergraduate journey with gratitude and achievement on the last day of classes.' },
        { src: photo2, caption: 'Exploring historical wonders during our office trip to Hampi, creating memories beyond the workplace.'},
        { src: photo3, caption: 'Capturing the mesmerizing beauty of nature; my camera can\'t resist when the sky paints such a breathtaking canvas.' },
        { src: photo4, caption: 'Celebrating a decade of excellence at Divami\'s 10th Anniversary party, a snapshot with the brilliant minds of the development team.' },
    ];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const goToNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const goToPrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };


    return (
        <div className="about-me-container">
            <div className='about-me-details'>
                <h2>About Me</h2>

                <div className='about-me-para'>Ever bumped into someone from a completely different realm attempting to squeeze themselves into the AI/ML field like it's a pair of jeans they've always wanted but never quite knew how to wear?</div>

                <div className='about-me-para'>Well, that someone is me. I managed to explore every avenue to distract myself from my true calling (Artificial Intelligence and Machine Learning). Yet, here I am, contemplating what it'll take to craft my very own LLM.</div>
            </div>

            <div className='photos'>
                <div className='album-container'>
                    <img src={photos[currentPhotoIndex].src} alt={`Photo ${currentPhotoIndex + 1}`} />
                    <div className='prev-btn'>
                        <img  src={prevBtn} onClick={goToPrevPhoto} alt={`Photo ${currentPhotoIndex - 1}`} />
                    </div>
                    <div className='next-btn'>
                        <img src={nextBtn} onClick={goToNextPhoto} alt={`Photo ${currentPhotoIndex + 1}`} />
                    </div>

                    {/* <button className='prev-btn' onClick={goToPrevPhoto}>Previous</button>
                    <button className='next-btn' onClick={goToNextPhoto}>Next</button> */}
                </div>
                <p className='caption'>{photos[currentPhotoIndex].caption}</p>

                {/* <button className='prev-btn' onClick={goToPrevPhoto}>Previous</button> */}
                {/* <img src={photos[currentPhotoIndex].src} alt={`Photo ${currentPhotoIndex + 1}`} /> */}
                {/* <p>{photos[currentPhotoIndex].caption}</p> */}
                {/* <button className='next-btn' onClick={goToNextPhoto}>Next</button>
                <p>{photos[currentPhotoIndex].caption}</p> */}
            </div>
        </div>
    );
};

export default AboutMe;
