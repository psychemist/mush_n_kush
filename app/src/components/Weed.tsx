import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

interface WeedCardProps {
  image: any;
  title: string;
  content: string;
  onClick?: () => void;
}

export default function BookingCard({ image, title, content, price }: WeedCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      {isOpen && <Modal isOpen={isOpen} onClose={closeModal} children={<div>Hello</div>} />}
      <CardHeader floated={false} color="blue-gray">
        <Image src={image} alt="strains" className="h-90 w-65" />
      </CardHeader>
      <CardBody className="p-8">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
        <div className="flex w-full place-content-center pb-8 pt-0">
          <span className="flex w-2/4 cursor-pointer place-content-center rounded-full border border-gray-900/5 bg-gray-900/5 p-3 font-bold text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <button
            /* onClick={() => {
                addToCart(product);
                setIsCartOpen(true);
              }} */
            >
              {price}
            </button>
          </span>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} onClick={openModal} className="bg-blue-500 text-white">
          Reserve
        </Button>
      </CardFooter>
    </Card>
  );
}
