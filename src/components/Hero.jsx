import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <AspectRatio
      ratio={16 / 4}
      className="bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center text-red-500">
        Hello Next + Shad CN
      </h1>
      <p>
        Welcome to our shop! Discover the latest trends and best deals on
        electronics, fashion, and more.
      </p>
      <Button variant="destructive" className="hover:bg-red-600">
        Go To Shop <ArrowRightIcon className="w-5 h-4 "/>
      </Button>
      <Image width={100} height={100} src="https://res.cloudinary.com/dxixdugif/image/upload/v1704200744/chomotkar-fashion/red_mtycrs.jpg" alt="Image" className="rounded-md object-cover mt-5" />
    </AspectRatio>
  );
};

export default Hero;
