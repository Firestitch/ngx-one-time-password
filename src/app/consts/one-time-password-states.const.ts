import { OneTimePasswordState } from '../enums';

export const OneTimePasswordStates = [
  { name: 'Pending', value: OneTimePasswordState.Pending },
  { name: 'Deleted', value: OneTimePasswordState.Deleted },
  { name: 'Used', value: OneTimePasswordState.Used },
];
