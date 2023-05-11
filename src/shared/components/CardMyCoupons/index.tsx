import { Separator } from '@/shared/components/Separator';

export const CardMyCoupons = () => {
  return (
    <div className="rounded-3xl bg-gray_blue-100 p-3">
      <header className="flex flex-wrap items-center gap-x-4 gap-y-4">
        {Array.from({ length: 40 }, () => 'A1469').map((coupon, index) => (
          <span
            key={index}
            className="font-nunito text-base font-medium text-primary"
          >
            {coupon}
          </span>
        ))}
      </header>

      <Separator
        orientation="horizontal"
        thickness="0.5px"
        className="my-2 bg-gray_blue-200"
      />

      <main className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-regular font-nunito text-xs text-gray_modern-700">
            Encerramento
          </span>
          <span className="font-nunito text-xs font-medium text-error-400">
            02/02/2023 - 18:00
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-regular font-nunito text-xs text-gray_modern-700">
            Sorteio
          </span>
          <span className="font-nunito text-xs font-medium text-green-400">
            02/02/2023 - 18:00
          </span>
        </div>
      </main>
    </div>
  );
};
