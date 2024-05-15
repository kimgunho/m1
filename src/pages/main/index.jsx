import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import S01 from './S01';
import S02 from './S02';
import S03 from './S03';
import S04 from './S04';
import S05 from './S05';

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
    </>
  );
};

export default Page;
