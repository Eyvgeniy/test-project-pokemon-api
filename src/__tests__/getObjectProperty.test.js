import getObjectProperty from '../utils/getObjectProperty';

const obj = {
  pupa: {
    lupa: {
      beep: 'boop',
    },
    foo: 'bar',
  },
};

describe('Testing getObjProperty function', () => {
  test('Object property exist', () => {
    expect(getObjectProperty(obj, 'pupa.lupa')).toEqual({ beep: 'boop' });
    expect(getObjectProperty(obj, 'pupa.lupa.beep')).toEqual('boop');
    expect(getObjectProperty(obj, 'pupa.foo')).toEqual('bar');
  });

  test('Object property does`n exist', () => {
    expect(getObjectProperty(obj, 'pupa.ne.tuda')).toBe(undefined);
  });

  test('Object property does`n exist and return default value', () => {
    expect(getObjectProperty(obj, 'pupa.ne.tuda', true)).toEqual(true);
    expect(getObjectProperty(obj, 'pupa.ne.tuda', 'Default value')).toEqual('Default value');
  });
});
