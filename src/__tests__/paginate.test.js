import paginate from '../utils/paginate';

describe('Test paginate func', () => {
  test('Pages count <= 5', () => {
    const page = 1;
    const pageSize = 4;
    let total = 12;
    let result = [1, 2, 3];
    expect(paginate(page, pageSize, total)).toEqual(result);
    total = 20;
    result = [1, 2, 3, 4, 5];
    expect(paginate(page, pageSize, total)).toEqual(result);
  });

  test('Pages count > 5', () => {
    const pageSize = 4;
    let page = 1;
    let total = 25;
    const separator = '...';
    let result = [1, 2, 3, separator, 7];
    expect(paginate(page, pageSize, total)).toEqual(result);
    total = 25;
    page = 2;
    result = [1, 2, 3, 4, separator, 7];
    expect(paginate(page, pageSize, total)).toEqual(result);
    page = 3;
    result = [1, 2, 3, 4, 5, separator, 7];
    expect(paginate(page, pageSize, total)).toEqual(result);
    page = 9;
    total = 40;
    result = [1, separator, 7, 8, 9, 10];
    expect(paginate(page, pageSize, total)).toEqual(result);
    page = 6;
    result = [1, separator, 4, 5, 6, 7, 8, separator, 10];
    expect(paginate(page, pageSize, total)).toEqual(result);
    page = 7;
    result = [1, separator, 5, 6, 7, 8, 9, separator, 10];
    expect(paginate(page, pageSize, total)).toEqual(result);
  });

  test('Error: current page > max pages', () => {
    const pageSize = 4;
    const page = 10;
    const total = 25;
    expect(paginate(page, pageSize, total)).toBe(null);
  });
});
