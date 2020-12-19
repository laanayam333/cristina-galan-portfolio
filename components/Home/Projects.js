import ProjectCard from '@/components/Project/Card';

const HomeProjects = ({ displayedProjects, onCursor }) => {
  return (
    <section className="custom-container custom-mt">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-24 2xl:gap-32">
        {displayedProjects &&
          displayedProjects.map((project) => (
            <div
              key={project.node._meta.slug}
              onMouseEnter={() => onCursor('hovered')}
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
