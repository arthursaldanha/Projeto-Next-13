import { formatPrice } from '@/shared/utils/currency';

export const TableCashback = () => {
  return (
    <table className="w-full rounded-xl bg-white text-left font-inter text-gray_modern-700">
      <thead className="text-sm font-medium">
        <tr className="border-b border-solid border-gray_blue-50">
          <th className="p-3">Data</th>
          <th className="p-3">Valor</th>
          <th className="p-3">Cashback</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>

      <tbody className="text-base font-normal">
        <tr className="border-b border-solid border-gray_blue-50">
          <td className="p-3">10/01/2023</td>
          <td className="p-3">{formatPrice(230.0)}</td>
          <td className="p-3">{formatPrice(8.31)}</td>
          <td className="p-3">ok</td>
        </tr>

        <tr className="border-b border-solid border-gray_blue-50">
          <td className="p-3">10/01/2023</td>
          <td className="p-3">{formatPrice(230.0)}</td>
          <td className="p-3">{formatPrice(8.31)}</td>
          <td className="p-3">ok</td>
        </tr>

        <tr className="border-b border-solid border-gray_blue-50">
          <td className="p-3">10/01/2023</td>
          <td className="p-3">{formatPrice(230.0)}</td>
          <td className="p-3">{formatPrice(8.31)}</td>
          <td className="p-3">ok</td>
        </tr>
      </tbody>
    </table>
  );
};
