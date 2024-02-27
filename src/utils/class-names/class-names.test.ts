import {classNames} from './class-names.ts';

describe('classNames', () => {
  it('should join class names without falsy values', () => {
    const result = classNames('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should omit falsy values', () => {
    const result = classNames('class1', false, undefined, 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should return an empty string for all falsy values', () => {
    const result = classNames(undefined, false);
    expect(result).toBe('');
  });

  it('should handle single valid class name', () => {
    const result = classNames('class1');
    expect(result).toBe('class1');
  });

  it('should return an empty string for a single falsy value', () => {
    const result = classNames(undefined);
    expect(result).toBe('');
  });
});
