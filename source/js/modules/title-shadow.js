const getTitleShadow = (e) => {
  e.forEach((item) => {
    const titleShadow = item.innerHTML;
    item.setAttribute('data-content', `${titleShadow}`);
  });
};

export {getTitleShadow};
