import Image from "next/image";

function Banner() {
  return (
    <div className="text-center">
      <Image
        className="banner"
        src="/images/banner.jpg"
        alt="East Media"
        height="360px"
        width="480px"
      />
    </div>
  );
}

export default Banner;
