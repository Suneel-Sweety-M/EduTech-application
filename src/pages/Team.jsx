import React from 'react'
import Back from '../components/common/Back';
import Awrapper from '../components/about/Awrapper';
import TeamCard from '../components/common/TeamCard';
import '../components/styles/team.css';

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team;