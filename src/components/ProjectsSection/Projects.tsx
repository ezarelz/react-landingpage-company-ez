import React from 'react';

type Project = {
  title: string;
  tag: string;
  imgSrc: string;
  imgAlt: string;
  href?: string; // optional
};

const PROJECTS: Project[] = [
  {
    title: 'Portofolio 1',
    tag: 'Landing Page',
    imgSrc: '/assets/our_work_1.png',
    imgAlt: 'Portofolio 1',
  },
  {
    title: 'Portofolio 2',
    tag: 'Landing Page',
    imgSrc: '/assets/our_work_2.png',
    imgAlt: 'Portofolio 2',
  },
  {
    title: 'Portofolio 3',
    tag: 'Landing Page',
    imgSrc: '/assets/our_work_3.png',
    imgAlt: 'Portofolio 3',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id='projects'
      className='py-16 px-4 bg-white text-gray-900 dark:bg-black dark:text-white'
      aria-labelledby='projects-heading'
    >
      {/* Heading */}
      <header className='mx-auto max-w-4xl text-center'>
        <h2
          id='projects-heading'
          className='text-[28px] leading-[36px] font-bold sm:text-[32px] sm:leading-[40px]'
        >
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className='mt-2 mb-10 text-[15px] leading-[28px] text-gray-600 dark:text-gray-300'>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </header>

      {/* Projects Grid */}
      <ul className='mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6'>
        {PROJECTS.map(({ title, tag, imgSrc, imgAlt, href }) => {
          const Card = href ? 'a' : 'div';
          return (
            <li key={title}>
              <Card
                {...(href ? { href } : {})}
                className='group flex flex-col items-center text-center lg:items-start lg:text-left'
              >
                <div className='w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm transition duration-200 group-hover:shadow-md dark:border-white/15'>
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    className='h-auto w-full object-cover transition duration-200 group-hover:scale-[1.01]'
                    loading='lazy'
                  />
                </div>

                <span className='mt-3 text-sm text-brand'> {tag} </span>
                <span className='text-[16px] leading-[30px] font-bold'>
                  {title}
                </span>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
