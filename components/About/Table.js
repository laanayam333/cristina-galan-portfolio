import { motion } from 'framer-motion';

import { tableVariants } from '@/utils/framer';

const Table = ({ rows }) => {
  return (
    <>
      <motion.table
        className="w-full origin-top"
        intial="initial"
        animate="animate"
        variants={tableVariants}
      >
        <tbody>
          {rows.map((row, index) => (
            <tr
              className="flex border-b-2 border-gray-100 dark:border-gray-900 tw-animation"
              key={index}
            >
              {row.year_location && (
                <td className="w-3/12 about-row">
                  {row.year_location[0].text}
                </td>
              )}

              {row.content && (
                <td className="w-5/12 about-row">{row.content[0].text}</td>
              )}

              {row.institution && (
                <td className="w-4/12 about-row">{row.institution[0].text}</td>
              )}
            </tr>
          ))}
        </tbody>
      </motion.table>
    </>
  );
};

export default Table;
