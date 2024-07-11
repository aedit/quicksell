const groupByKey = (data, key, sort) => {
  const obj = {};

  data.forEach((el) => {
    if (obj[el[key]]) obj[el[key]].push(el);
    else obj[el[key]] = [el];
  });

  for (let i in obj) {
    if (sort === "priority") {
      obj[i] = obj[i].sort((a, b) => b[sort] - a[sort]);
    } else if (sort === "title") {
      obj[i] = obj[i].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
  }

  return obj;
};

export default groupByKey;
