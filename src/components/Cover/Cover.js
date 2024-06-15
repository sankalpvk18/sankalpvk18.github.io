import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css';

const Cover = () => {
  return (
    <div className="cover">
      <div className='intro-block'>
        <div>SANKALP</div>
        <div>TRIPATHI</div>
      </div>

      <div className='experience'>
        <div className='current'>
          Data Scientist Intern at DUKE.ai
        </div>
        <div className='total-exp'>
          <div className='exp-item years'>
            <div className='number'>4+</div>
            <div className='detail'>Work Experience</div>
          </div>
          <div className='exp-item'>
            <div className='number'>20+</div>
            <div className='detail'>Projects Completed</div>
          </div>
          <div className='exp-item'>
            <div className='number'>5+</div>
            <div className='detail'>Events managed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
