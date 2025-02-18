export const ROUTES = {
  TEST: 'test',
  DRUGS: 'drugs',
  ABOUT: 'about',
  CONTRACT: 'contract',
  VISIT: 'visit'
} as const;

export const TEST_ROUTES = {
  LIST: `${ROUTES.TEST}/list`,
  DETAIL: `${ROUTES.TEST}/detail/:id`
} as const;
