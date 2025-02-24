// pages/[url].js
import { useRouter } from 'next/router';
import Join from "../utils/mainpage/join"

const Joins = () => {
  const router = useRouter();
  const { url } = router.query; // The dynamic segment from the URL

  return (
    <Join/>
  );
};

export default Joins;
