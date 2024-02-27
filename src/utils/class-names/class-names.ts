export const classNames = (...rest: (string | boolean | undefined)[]) =>
  rest.filter(Boolean).join(' ');
