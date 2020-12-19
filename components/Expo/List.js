import ExpoCard from '@/components/Expo/Card';

const List = ({ exposData, onCursor }) => {
  return (
    <section className="custom-container custom-padding">
      <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-12 lg:gap-x-32 2xl:gap-x-36 gap-y-12 lg:gap-y-24 2xl:gap-y-28">
        {exposData.map((expo) => (
          <ExpoCard key={expo.node._meta.id} expo={expo} onCursor={onCursor} />
        ))}
      </ul>
    </section>
  );
};

export default List;
