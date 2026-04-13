const ORIGINAL_ENV = process.env;

describe('start-app', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
    delete process.env.NODE_ENV;
    delete process.env.WINGSUIT_APP;
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  test('defaults NODE_ENV to development', () => {
    const resolveConfig = jest.fn(() => ({ app: 'storybook' }));
    const getAppPack = jest.fn((appConfig) => ({ appConfig }));

    jest.doMock('../src/index', () => ({
      resolveConfig,
      getAppPack,
    }));

    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const result = require('../src/start-app');

    expect(resolveConfig).toHaveBeenCalledWith('storybook', 'development');
    expect(getAppPack).toHaveBeenCalledWith({ app: 'storybook' });
    expect(result).toEqual({ appConfig: { app: 'storybook' } });
  });
});
