import { useRouter } from 'next/router';
import BackIcon from '@/components/Icons/BackIcon';

const BackBtn = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            <BackIcon />
          </a>
        </div>
      )}
    </div>
  );
};

export default BackBtn;
