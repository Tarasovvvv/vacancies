const formatSalary = (salary: string | undefined) => {
  if (!salary) return;

  const formattedSalary: number = parseInt(salary, 10);

  return isNaN(formattedSalary) ? salary : formattedSalary.toLocaleString("ru-RU");
};

export default formatSalary;
