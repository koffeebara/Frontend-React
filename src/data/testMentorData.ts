import { categoryOptions } from './categoryOptions';
import { regionOptions } from './regionOptions';

export const mentorDatas = Array.from({ length: 100 }, (_, i) => {
  const category =
    categoryOptions[Math.floor(Math.random() * categoryOptions.length)].value;
  const region =
    regionOptions[Math.floor(Math.random() * regionOptions.length)].value;

  return {
    id: i,
    name: `멘토${i + 1}`,
    category,
    region,
  };
});
