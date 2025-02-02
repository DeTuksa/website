'use client';

import s from './about.module.css';

import React, { useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Fade, CircularProgress } from 'components';

import cn from 'classnames';

const goals = [
  { title: 'Contribute to Open Source Projects', progress: 30 },
  { title: 'Work fully remote', progress: 100 },
  { title: 'Read 20 books this year', progress: 20 },
  { title: 'Learn and Master Rust', progress: 60 },
];

const About = ({ ...props }) => {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const profileRef = useRef(null);
  const sectionsRef = useRef(null);

  return (
    <>
      <div {...props} ref={rootRef}>
        {/* About  */}
        <div className={s.root}>
          {/* Title  */}
          <Fade className="m-0" delay={0.3} trigger={titleRef}>
            <h2 className={s.title} ref={titleRef}>
              <span className={s['about-gradient']}>About</span> <span className={s['me-gradient']}>Me</span>
            </h2>
          </Fade>

          {/* Container  */}
          <div className="container">
            <div className={s.intro}>
              {/* Intro  */}
              <Fade direction="left" distance={150} delay={0.5} trigger={introRef}>
                <div className={s.introInner} ref={introRef}>
                  <span>I&apos;m a Software Engineer based in United Kingdom ☕</span>
                </div>
              </Fade>
              {/* Profile */}
              <div className={s.profileContainer}>
                <Fade distance={150} delay={0.5} trigger={profileRef}>
                  <div className={s.profileImage}>
                    <Image width={150} height={150} src="/images/profile.jpg" alt="Mateo Nunez's face" />
                  </div>

                  <div className="w-full" ref={profileRef}>
                    <div className={s.profileQuoteContainer}>
                      <div className={cn(s.profileQuote, 'text-left')}>“</div>
                      <p className={s.profileText}>
                        You will never be able to experience everything. So, please, do poetical justice to your soul and simply experience yourself.
                      </p>
                      <div className={cn(s.profileQuote, 'text-right')}>”</div>
                    </div>
                    <div className="w-full">
                      <p className="font-bold text-center text-amber-500 text-md">Albert Camus</p>
                    </div>
                  </div>
                </Fade>

                <div className={s.sections} ref={sectionsRef}>
                  {/* Bio */}
                  <Fade className="m-0 mx-0" direction="left" distance={150} delay={0.3} trigger={sectionsRef}>
                    <article className="my-1">
                      <h2 className={cn(s.profileSectionTitle, s.profileSectionTitleBlack)}>Bio</h2>
                      <div className={s.bio}>
                        <span className={s.bioYear}>1999</span>
                        Born in Kano, Nigeria. <br />
                        <b>Naibawa</b>. The place where I learned the most important thing: <i>The Value of Family</i>
                        .
                      </div>
                      <div className={s.bio}>
                        <span className={s.bioYear}>2015</span>
                        Undergraduate Studies. <br />I started pursuing my undergrad degree in computer engineering. Made new friends, learnt new things...experienced life differently.
                      </div>
                      <div className={s.bio}>
                        <span className={s.bioYear}>2019</span>
                        <span className={s.bioText}>
                          Started internship with eHealth4everyone at Abuja. Learnt valuable technologies including {' '}
                          <i>Java</i>, <i>Python</i>, <i>Flutter</i> and other lessons like debugging and SOLID principles.
                        </span>
                      </div>
                      <div className={s.bio}>
                        <span className={s.bioYear}>2021</span>
                        <span className={s.bioText}>
                          Worked on
                          Bloverse at Demz Analytics where I learnt Agile methodologies and got introduced to DevOps and TDD.
                        </span>
                      </div>
                      <div className={s.bio}>
                        <span className={s.bioYear}>2021</span>
                        <span className={s.bioText}>
                          Started a new adventure at{' '}
                          <Link href="https://eftechnology.net/" passHref alt="EF Network" target="_blank" rel="noreferrer">
                            EF Network
                          </Link>{' '}
                          as a Software Engineer. Architected the GAB taxi platform from the ground up.
                        </span>
                      </div>
                      <div className={s.bio}>
                        <span className={s.bioYear}>2021 to 2024</span>
                        <span className={s.bioText}>Senior Software Engineer at </span>
                        <Link href="https://www.myxellia.io/" passHref alt="Myxellia" target="_blank" rel="noreferrer">
                          Myxellia
                        </Link>
                      </div>
                      <div className={s.bio}>
                        <span className={s.bioYear}>2023 to date</span>
                        Moved to UK. <br />I came to the UK to pursue my masters degree in software engineering. Graduated with a distinction. Been happy to experience diverse cultures and meet new people.
                      </div>
                    </article>
                  </Fade>

                  {/* You should know */}
                  <Fade className="m-0 mx-0" direction="left" distance={150} delay={0.5} clean trigger={sectionsRef}>
                    <article className="my-3">
                      <h2 className={cn(s.profileSectionTitle, s.profileSectionTitleBlack)}>You should know</h2>
                      <p className={s.paragraph}>
                        I am an avid reader. When I'm not on coding you'll find me reading books on various topics including science, history, philosophy, and fiction. I also love to write and share my thoughts. I enjoy listening to music, and so you'll be able to find some of my spotify playlists. here.
                      </p>
                    </article>
                  </Fade>

                  {/* You shouldn't */}
                  {/* <Fade className="m-0 mx-0" direction="left" distance={150} delay={1.2} clean trigger={sectionsRef}>
                    <article className="my-3">
                      <h2 className={cn(s.profileSectionTitle, s.profileSectionTitleBlack)}>You shouldn&apos;t</h2>
                      <p className={s.paragraph}>I&apos;m touchy.</p>
                    </article>
                  </Fade> */}

                  {/* Goals  */}
                  <Fade className="m-0 mx-0" direction="left" distance={150} delay={1.8} clean trigger={sectionsRef}>
                    <article className="my-3">
                      <h2 className={cn(s.profileSectionTitle, s.profileSectionTitleBlack)}>Goals</h2>
                      <div className="w-full">
                        <ul className={s.goalsList}>
                          {goals.map((goal) => (
                            <li key={goal.title} className={s.goal}>
                              {goal.title} <CircularProgress progress={goal.progress} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(About);
