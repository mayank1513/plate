export const isDocxFootnote = (element: Element): boolean => {
  return (
    element.tagName === 'SPAN' &&
    element.classList.contains('MsoFootnoteReference')
  );
};
