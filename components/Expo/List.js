import ExpoCard from '@/components/Expo/Card';

const List = ({ exposData, onCursor }) => {
  return (
    <section className="tw-container">
      <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-20 lg:gap-28 2xl:gap-32">
        {exposData.map((expo) => (
          <ExpoCard key={expo.node._meta.id} expo={expo} onCursor={onCursor} />
        ))}
      </ul>
    </section>
  );
};

export default List;
