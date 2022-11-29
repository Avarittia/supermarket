import Advertisement from "../components/Advertisement";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";

import Topselling from "../components/Topselling";

export default function Home() {
  return (
    <div>
      <Carousel1 />
      <Topselling />
      <Carousel2 />
      <Advertisement />
    </div>
  );
}
