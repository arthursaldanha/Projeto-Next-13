'use client';

import { CardMyHoldings } from '@/shared/components/CardMyHoldings';
import { Carousel } from '@develop-fapp/ui-kit-fapp';

export const CarouselMyHoldings = () => {
  return (
    <div className="space-y-5">
      <h2 className="font-nunito text-3xl font-bold text-gray_modern-700">
        Minhas participações
      </h2>

      <Carousel
        items={[
          <div key={1} className="max-w-screen w-[600px]">
            <CardMyHoldings />
          </div>,
          <div key={2} className="max-w-screen w-[600px]">
            <CardMyHoldings />
          </div>,
          <div key={3} className="max-w-screen w-[600px]">
            <CardMyHoldings />
          </div>,
          <div key={4} className="max-w-screen w-[600px]">
            <CardMyHoldings />
          </div>,
        ]}
        spacing={16}
      />
    </div>
  );
};
