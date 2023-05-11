import { CardCampaign } from '@/shared/components/CardCampaign';

import { CarouselMyHoldings } from './client/CarouselMyHoldings';

export const DashboardPresentation = () => {
  return (
    <div className="mx-auto my-0 w-[1520px] max-w-full space-y-10">
      <CarouselMyHoldings />

      <div className="space-y-4">
        <h2 className="font-nunito text-3xl font-bold text-gray_modern-700">
          Minhas participações
        </h2>
        <CardCampaign
          title="O Grande campeão - 2023"
          location="Rua avenida Seu Jorge - 4KM"
          closing="02/02/2023 - 18:00"
        />
        <CardCampaign
          title="O Grande campeão - 2023"
          location="Rua avenida Seu Jorge - 4KM"
          closing="02/02/2023 - 18:00"
        />
      </div>
    </div>
  );
};
