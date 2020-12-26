import ProjectCard from '@/components/Project/Card';

const HomeProjects = ({ displayedProjects, onCursor }) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-24 2xl:gap-32 tw-container tw-separator-top">
        {displayedProjects &&
          displayedProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => onCursor('tw-hovered')}
              onMouseLeave={onCursor}
            >
              <ProjectCard project={project.node} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default HomeProjects;
