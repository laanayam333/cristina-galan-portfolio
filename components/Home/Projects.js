import Card from '@/components/Project/Card';

const Projects = ({ displayedProjects, onCursor }) => {
  return (
    <section>
      <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-24 2xl:gap-32 tw-container tw-separator-t">
        {displayedProjects &&
          displayedProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => onCursor('tw-hovered')}
              onMouseLeave={onCursor}
            >
              <Card project={project.node} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
