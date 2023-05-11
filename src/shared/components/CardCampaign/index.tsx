import { AiOutlineHeart } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '../Separator';

interface CardCampaignProps {
  title: string;
  location: string;
  closing: string;
}

export const CardCampaign: React.FC<CardCampaignProps> = ({
  title,
  location,
  closing,
}) => {
  return (
    <Link href="/campaign" className="block">
      <div className="w-full rounded-3xl border border-solid border-gray_blue-100 p-3">
        <header className="flex items-center justify-between">
          <div>
            <span className="font-nunito text-lg font-semibold text-gray_modern-700">
              {title}
            </span>
          </div>

          <div>
            <AiOutlineHeart className="h-[18px] w-5 stroke-primary" />
          </div>
        </header>

        <Separator
          orientation="horizontal"
          thickness="0.5px"
          className="my-2 bg-gray_blue-200"
        />

        <div className="relative aspect-video w-full">
          <Image src="/campaign-photo.png" alt="Foto da campanha" fill />
        </div>

        <Separator
          orientation="horizontal"
          thickness="0.5px"
          className="my-2 bg-gray_blue-200"
        />

        <footer className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Localização
            </span>
            <span className="font-nunito text-sm font-medium text-gray_modern-700">
              {location}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Encerramento
            </span>
            <span className="font-nunito text-sm font-medium text-error-400">
              {closing}
            </span>
          </div>
        </footer>
      </div>
    </Link>
  );
};
