import { formatPrice } from '@/shared/utils/currency';

export const TableContemplated = () => {
  return (
    <table className="w-full rounded-xl bg-gray_blue-50 text-left font-inter text-gray_modern-700">
      <thead className="text-sm font-medium">
        <tr>
          <th className="p-3">Data</th>
          <th className="p-3">Nome</th>
          <th className="p-3">CPF</th>
          <th className="p-3">Prêmio</th>
          <th className="p-3">Valor</th>
        </tr>
      </thead>

      <tbody className="text-base font-normal">
        <tr>
          <td className="p-3">10/01/2023</td>
          <td className="p-3">Guilherme M Ribeiro</td>
          <td className="p-3">***.333-33</td>
          <td className="p-3">Voucher</td>
          <td className="p-3">{formatPrice(100.0)}</td>
        </tr>

        <tr>
          <td className="p-3">10/01/2023</td>
          <td className="p-3">Guilherme M Ribeiro</td>
          <td className="p-3">***.333-33</td>
          <td className="p-3">Voucher</td>
          <td className="p-3">{formatPrice(100.0)}</td>
        </tr>

        <tr>
          <td className="p-3">10/01/2023</td>
          <td className="p-3">Guilherme M Ribeiro</td>
          <td className="p-3">***.333-33</td>
          <td className="p-3">Voucher</td>
          <td className="p-3">{formatPrice(100.0)}</td>
        </tr>
      </tbody>
    </table>
  );
};
